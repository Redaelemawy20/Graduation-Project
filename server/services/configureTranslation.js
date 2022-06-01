import fs from "fs";
import path from "path";
import util from "util";
import db from "../models";
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
export default async (options) => {
  const { loadpath, ns, defaultLang } = options;
  const langs = await db.Lang.findAll();
  Translation.currentLang = defaultLang;
  Translation.ns = ns;
  Translation.langs = langs;
  Translation.loadpath = loadpath;
  if (!fs.existsSync(path.resolve(loadpath))) {
    fs.mkdir(path.resolve(loadpath), (err) => {
      if (err) throw err;
    });
  }
  for (let lang of langs) {
    if (!fs.existsSync(path.resolve(loadpath, lang.value))) {
      fs.mkdir(path.resolve(loadpath, lang.value), (err) => {
        if (err) throw err;
      });
    }
    for (let nameSpace of ns) {
      fs.writeFile(
        path.resolve(loadpath, lang.value, `${nameSpace}.json`),
        "",
        { flag: "a" },
        (err) => {
          if (err) throw err;
          console.log(`${lang.value} -> ${nameSpace} created`);
        }
      );
    }
  }
  await Translation.setTranslations();
};
class Translation {
  static currentLang = {
    value: "en",
    countury: "US",
    direction: "ltr",
  };

  static loadpath = "locales";
  static ns = [];
  static langs = [];
  static translations = {};
  static async setCurrentLang(lang) {
    this.langs.find((l) => {
      if (l.value === lang) {
        this.currentLang = l;
        return true;
      }
    });
    await Translation.setTranslations();
  }
  static async setTranslations() {
    for (let nameSpace of this.ns) {
      const data = await readFile(
        path.resolve(
          this.loadpath,
          this.currentLang.value,
          `${nameSpace}.json`
        ),
        "utf-8"
      );
      try {
        this.translations[nameSpace] = JSON.parse(data);
      } catch (error) {
        this.translations[nameSpace] = {};
      }
    }
  }
  static async getAllTranslations() {
    const allTranslations = {};
    for (let nameSpace of this.ns) {
      for (let lang of this.langs) {
        allTranslations[lang.value] = allTranslations[lang.value] || {};
        const data = await readFile(
          path.resolve(this.loadpath, lang.value, `${nameSpace}.json`),
          "utf-8"
        );
        try {
          allTranslations[lang.value][nameSpace] = JSON.parse(data);
        } catch (error) {
          allTranslations[lang.value][nameSpace] = {};
        }
      }
    }
    return {
      allTranslations,
      nameSpaces: this.ns,
      langs: this.langs,
      currentLanguage: this.currentLang,
    };
  }
  static async updateTranslation(payload) {
    const { key, nameSpace: ns } = payload;
    for (let lang of this.langs) {
      const data = await readFile(
        path.resolve(this.loadpath, lang.value, `${ns}.json`),
        "utf-8"
      );
      let translations;
      try {
        translations = JSON.parse(data) || {};
      } catch (error) {
        translations = {};
      }

      translations[key] = payload[lang.value];
      try {
        await writeFile(
          path.resolve(this.loadpath, lang.value, `${ns}.json`),
          JSON.stringify(translations),
          "utf-8"
        );
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  }
  static async addLanguage(lang) {
    if (!fs.existsSync(path.resolve(this.loadpath, lang.value))) {
      fs.mkdir(path.resolve(this.loadpath, lang.value), (err) => {
        console.log(err);
        if (err) throw err;
      });
    }
    for (let nameSpace of this.ns) {
      fs.writeFile(
        path.resolve(this.loadpath, lang.value, `${nameSpace}.json`),
        "",
        { flag: "a" },
        (err) => {
          console.log(err);
          if (err) throw err;
          console.log(`${lang.value} -> ${nameSpace} created`);
        }
      );
    }
    this.langs.push(lang);
    await db.Lang.create(lang);
  }
  static getLangs() {
    return { all: this.langs, currentLang: this.currentLang };
  }
}

export const translationServiece = Translation;
