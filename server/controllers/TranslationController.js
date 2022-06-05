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
async function addNameSpace(req, res) {
  const { nameSpace } = req.body;
  if (!nameSpace) {
    return res.status(400).send("nameSpace can not be null");
  }
  translationServiece.addNameSpace(nameSpace);
  return res.send({ message: "suceess" });
}

async function addKey(req, res) {
  const { key, nameSpace } = req.body;
  if (!key || !nameSpace) {
    return res.status(400).send("key and nameSpace can not be null");
  }
  translationServiece.addKey(nameSpace, key);
  return res.send({ message: "suceess" });
}
export default {
  index,
  update,
  addLanguage,
  getLangs,
  addNameSpace,
  addKey,
};
