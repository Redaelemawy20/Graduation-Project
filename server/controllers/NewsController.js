const path = require("path");
const File = require("../database/models/File");
const Feed = require("../database/models/Feed");
let options = require("../util/viewsOptions");

options.activeMenu = "news";
async function index(req, res) {
  const allNews = await Feed.findAll();

  res.render("news", {
    ...options,
    title: "all news",
    url: req.originalUrl,
    news: allNews,
  });
}
function create(req, res) {
  res.render("add-news", {
    ...options,
    title: "add news",
    url: req.originalUrl,
  });
}
async function store(req, res) {
  const { mainImage } = req.files;
  const imageFileName = mainImage[0].filename;
  const imagePath = path.join("news", "mainImage", imageFileName);
  const { title, content, show } = req.body;
  const feed_id = Date.now();
  const newFead = Feed.build({
    feed_id,
    title,
    content,
    show,
    mainImage: imagePath,
  });
  try {
    await newFead.save();
    for (let field in req.files) {
      for (let file of req.files[field]) {
        const { originalname, filename } = file;
        let new_file = File.build({ originalname, filename, feed_id });
        try {
          await new_file.save();
          return res.send("feed saved success").status(200);
        } catch (error) {
          return res.send("error while saving files").status(500);
        }
      }
    }
  } catch (error) {
    return res.send("faild to insert").status(500);
  }
}

function edit(req, res) {}

function update(req, res) {}

function destroy(req, es) {}

module.exports = {
  index,
  create,
  store,
  edit,
  update,
  destroy,
};
