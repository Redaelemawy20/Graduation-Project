const path = require("path");
const fs = require("fs");

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

async function edit(req, res) {
  const { id } = req.params;
  const feed = await Feed.findByPk(id);
  const files = await File.findAll({
    where: {
      feed_id: feed.feed_id,
    },
  });

  res.render("edit-news", {
    ...options,
    title: "edit news",
    url: "/edit",
    feed,
    files,
  });
}

function update(req, res) {
  res.send("updating store>>" + req.params.id);
}

function destroy(req, es) {}

async function deleteFile(req, res) {
  console.log(req.query.file);
  console.log(__dirname);
  const filePath = path.join(
    __dirname,
    "../",
    "storage",
    "news",
    "Files",
    "1646787473879-821543999-2.jpg"
  );
  fs.unlink(filePath, async (err) => {
    if (err) {
      console.log(err);
      return res.send("Error while deleting file");
    }
    //file removed
    await File.destroy({
      where: {
        filename: req.query.file,
      },
    });
    return res.send("sucess");
    // response.writeHead(200, {
    //   Location: `/news/${req.params.id}/edit`,
    // });
    // return response.end();
  });

  // return res.send(req.query.file);
}

module.exports = {
  index,
  create,
  store,
  edit,
  update,
  destroy,
  deleteFile,
};
