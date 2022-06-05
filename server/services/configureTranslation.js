import fs from "fs";
import path from "path";
import util from "util";
import db from "../models";
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);
export default async (options) => {
  const { loadpath, defaultLang } = options;
  const langs = await db.Lang.findAll();
  const nameSpaces = await db.NameSpace.findAll();

  Translation.currentLang = defaultLang;
  Translation.ns = nameSpaces;
  Translation.langs = langs;
  Translation.loadpath = loadpath;
  await configure(loadpath, nameSpaces, langs);
  await Translation.setTranslations();
};
async function configure(loadpath, nameSpaces, langs) {
  if (!fs.existsSync(path.resolve(loadpath))) {
    fs.mkdir(path.resolve(loadpath), (err) => {
      if (err) throw err;
    });
  }
  fs.writeFile(
    path.resolve(loadpath, Translation.keysFile),
    "",
    { flag: "a" },
    (err) => {
      if (err) throw err;
      console.log(`keys file created`);
    }
  );
  for (let lang of langs) {
    if (!fs.existsSync(path.resolve(loadpath, lang.value))) {
      fs.mkdir(path.resolve(loadpath, lang.value), (err) => {
        if (err) throw err;
      });
    }

    for (let nameSpace of nameSpaces) {
      fs.writeFile(
        path.resolve(loadpath, lang.value, `${nameSpace.value}.json`),
        "",
        { flag: "a" },
        (err) => {
          if (err) throw err;
          console.log(`${lang.value} -> ${nameSpace.value} created`);
        }
      );

      await Translation.addKey(nameSpace.value);
    }
  }
}

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
  static keysFile = "keys.json";
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
          `${nameSpace.value}.json`
        ),
        "utf-8"
      );
      try {
        this.translations[nameSpace.value] = JSON.parse(data);
      } catch (error) {
        this.translations[nameSpace.value] = {};
      }
    }
    this.translations["__langs"] = {
      all: this.langs,
      currentLang: this.currentLang,
    };
  }
  static async getAllTranslations() {
    const allTranslations = {};
    for (let nameSpace of this.ns) {
      for (let lang of this.langs) {
        allTranslations[lang.value] = allTranslations[lang.value] || {};
        const data = await readFile(
          path.resolve(this.loadpath, lang.value, `${nameSpace.value}.json`),
          "utf-8"
        );
        try {
          allTranslations[lang.value][nameSpace.value] = JSON.parse(data);
        } catch (error) {
          allTranslations[lang.value][nameSpace.value] = {};
        }
      }
    }
    let keys = await readFile(
      path.resolve(this.loadpath, this.keysFile),
      "utf-8"
    );
    try {
      keys = JSON.parse(keys);
    } catch (error) {
      keys = {};
    }
    return {
      allTranslations,
      nameSpaces: this.ns,
      langs: this.langs,
      currentLanguage: this.currentLang,
      keys,
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
      if (payload[lang.value]) translations[key] = payload[lang.value];
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
        path.resolve(this.loadpath, lang.value, `${nameSpace.value}.json`),
        "",
        { flag: "a" },
        (err) => {
          if (err) throw err;
          console.log(`${lang.value} -> ${nameSpace.value} created`);
        }
      );
    }
    this.langs.push(lang);
    await db.Lang.create(lang);
  }
  static getLangs() {
    return { all: this.langs, currentLang: this.currentLang };
  }
  static async addNameSpace(nameSpace) {
    await db.NameSpace.create(nameSpace);
    this.ns.push(nameSpace);
    await configure(this.loadpath, this.ns, this.langs);
    await this.addKey(nameSpace.value);
  }
  static async addKey(nameSapce, key = null) {
    const data = await readFile(
      path.resolve(this.loadpath, this.keysFile),
      "utf-8"
    );
    let keys;
    try {
      keys = JSON.parse(data) || {};
    } catch (error) {
      keys = {};
    }

    keys[nameSapce] = keys[nameSapce] || {};
    if (key) {
      const { value } = key;
      keys[nameSapce][value] = keys[nameSapce][value] || "";
    }

    try {
      await writeFile(
        path.resolve(this.loadpath, this.keysFile),
        JSON.stringify(keys),
        "utf-8"
      );
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export const translationServiece = Translation;
