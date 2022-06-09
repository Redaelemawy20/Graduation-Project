import { translationServiece } from "../services/configureTranslation";
export default async (req, res, next) => {
  const lang = req.cookies.lang ?? translationServiece.currentLang.value;

  if (
    translationServiece.currentLang.value !== lang ||
    process.env.NODE_ENV !== "production"
  ) {
    await translationServiece.setCurrentLang(lang);
  }

  req.translations = translationServiece.translations;
  req.currentLang = translationServiece.currentLang;
  next();
};
