import { translationServiece } from "../services/configureTranslation";
export default async (req, res, next) => {
  const lang = req.cookies.lang ?? translationServiece.currentLang;
  if (translationServiece.currentLang !== lang) {
    translationServiece.currentLang = lang;
    await translationServiece.setTranslations();
  }
  req.translations = translationServiece.translations;
  req.currentLang = lang;
  next();
};
