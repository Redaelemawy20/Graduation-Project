import fs from "fs";
import path from "path";
import util from "util";
const readFile = util.promisify(fs.readFile);
export default async (options) => {
  const { loadpath, langs, ns, defaultLang } = options;
  Translation.currentLang = defaultLang;
  Translation.ns = ns;
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
}

export const translationServiece = Translation;
