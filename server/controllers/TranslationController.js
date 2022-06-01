import { translationServiece } from "../services/configureTranslation";
async function index(req, res) {
  const allTranslations = await translationServiece.getAllTranslations();
  return res.send(allTranslations);
}
async function update(req, res) {
  const { nameSpace, key } = req.body;
  if (!nameSpace || !key) {
    return res.status(400).send({
      message: "nameSpace and key are required",
    });
  }

  try {
    await translationServiece.updateTranslation(req.body);
    return res.send({
      message: "translation updated successfully",
    });
  } catch (error) {
    return res.status(400).send({
      error: error,
      message: "translation not updated",
    });
  }
}
async function addLanguage(req, res) {
  const { lang } = req.body;
  if (!lang) {
    return res.status(400).send("lang can not be null");
  }

  try {
    await translationServiece.addLanguage(lang);
    return res.send({ message: "suceess" });
  } catch (error) {
    return res.status(400).send({ message: "not added" });
  }
}
function getLangs(req, res) {
  const langs = translationServiece.getLangs();
  return res.send(langs);
}
export default {
  index,
  update,
  addLanguage,
  getLangs,
};
