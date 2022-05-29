import fs from "fs";
import path from "path";
import util from "util";
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
export default async (options) => {
  const { loadpath, langs, ns, defaultLang } = options;
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
    if (!fs.existsSync(path.resolve(loadpath, lang))) {
      fs.mkdir(path.resolve(loadpath, lang), (err) => {
        if (err) throw err;
      });
    }
    for (let nameSpace of ns) {
      fs.writeFile(
        path.resolve(loadpath, lang, `${nameSpace}.json`),
        "",
        { flag: "a" },
        (err) => {
          if (err) throw err;
          console.log(`${lang} -> ${nameSpace} created`);
        }
      );
    }
  }
  await Translation.setTranslations();
};
class Translation {
  static currentLang = "en";
  static loadpath = "locales";
  static ns = [];
  static langs = [];
  static translations = {};
  static async setTranslations() {
    for (let nameSpace of this.ns) {
      const data = await readFile(
        path.resolve(this.loadpath, this.currentLang, `${nameSpace}.json`),
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
        allTranslations[lang] = allTranslations[lang] || {};
        const data = await readFile(
          path.resolve(this.loadpath, lang, `${nameSpace}.json`),
          "utf-8"
        );
        try {
          allTranslations[lang][nameSpace] = JSON.parse(data);
        } catch (error) {
          allTranslations[lang][nameSpace] = {};
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
        path.resolve(this.loadpath, lang, `${ns}.json`),
        "utf-8"
      );
      let translations;
      try {
        translations = JSON.parse(data) || {};
      } catch (error) {
        translations = {};
      }

      translations[key] = payload[lang];
      try {
        await writeFile(
          path.resolve(this.loadpath, lang, `${ns}.json`),
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
    console.log("kdkdkdkdkdkkdkd");
    if (!fs.existsSync(path.resolve(this.loadpath, lang))) {
      fs.mkdir(path.resolve(loadpath, lang), (err) => {
        if (err) throw err;
      });
    }
    for (let nameSpace of ns) {
      fs.writeFile(
        path.resolve(loadpath, lang, `${nameSpace}.json`),
        "",
        { flag: "a" },
        (err) => {
          if (err) throw err;
          console.log(`${lang} -> ${nameSpace} created`);
        }
      );
    }
  }
}

export const translationServiece = Translation;
