const path = require("path");
const fs = require("fs");

const File = require("../database/models/File");
const Feed = require("../database/models/Feed");
let options = require("../util/viewsOptions");

options.activeMenu = "news";
async function index(req, res) {
  const allNews = await Feed.findAll();

  return res.send({
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
    await saveFiles(req, newFead.id);
    return res.send("feed saved success").status(200);
  } catch (error) {
    return res.send("faild to insert").status(500);
  }
}

async function edit(req, res) {
  const { id } = req.params;
  const feed = await Feed.findByPk(id);
  const files = await File.findAll({
    where: {
      feedId: id,
    },
  });

  return res.send({
    ...options,
    title: "edit news",
    url: "/edit",
    feed: {
      ...feed.dataValues,
      Files: files,
      mainImage: {
        perview: "/files?file=" + feed.mainImage,
        data: feed.mainImage,
      },
    },
  });
}

async function update(req, res) {
  const { mainImage } = req.files;
  const { id: feedId } = req.params;
  let imagePath = null;
  if (mainImage) {
    const imageFileName = mainImage[0].filename;
    imagePath = path.join("news", "mainImage", imageFileName);
  }
  if (req.body.deletedFiles) {
    const deletedFiles = JSON.parse(req.body.deletedFiles);
    for (let deletedFile of deletedFiles) {
      const file = await File.findByPk(deletedFile.id);
      await file.destroy();
      let filePath = path.join(
        __dirname,
        "..",
        "storage",
        "news",
        "Files",
        deletedFile.name
      );
      fs.unlink(filePath, async (err) => {
        if (err) throw "an error occured while deleting file";
        console.log("file deleted");
      });
    }
  }
  try {
    await saveFiles(req, feedId);
  } catch (error) {
    return res.send(error).status(500);
  }
  try {
    const feed = await Feed.findByPk(feedId);
    feed.set({ ...req.body, mainImage: imagePath ?? req.body.mainImage });
    await feed.save();
    return res.send("updated");
  } catch (error) {
    return res.send("an error while updating");
  }
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
        name: req.query.file,
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
async function saveFiles(req, feedId) {
  const { files } = req.files;
  console.log(files);
  if (files)
    for (let file of files) {
      const { originalname, filename: name } = file;
      let new_file = File.build({
        originalname,
        name,
        feedId,
      });
      try {
        await new_file.save();
      } catch (error) {
        throw "error while saving files";
      }
    }
}

export default {
  index,
  create,
  store,
  edit,
  update,
  destroy,
  deleteFile,
};
