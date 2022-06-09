const path = require("path");
const fs = require("fs");

const File = require("../models").File;
const Feed = require("../models").Feed;
const User = require("../models").User;
const NewsCategory = require("../models").NewsCategory;
let options = require("../util/viewsOptions");

options.activeMenu = "news";
async function index(req, res) {
  const { category } = req.query;
  if (category) {
    const news = await NewsCategory.findOne({
      where: {
        name: category,
      },
      include: {
        model: Feed,
        nested: true,
      },
    });
    return res.send({ news: news ? news.Feeds : [] });
  }

  const allNews = await Feed.findAll({
    include: [
      {
        model: User,
      },
      {
        model: NewsCategory,
      },
    ],
  });
  return res.send({
    ...options,
    title: "all news",
    url: req.originalUrl,
    news: allNews,
  });
}
async function create(req, res) {
  const newsCategories = await NewsCategory.findAll();

  return res.send({ newsCategories });
}
async function store(req, res) {
  const { mainImage } = req.files;

  const imageFileName = mainImage ? mainImage[0].filename : "";

  const imagePath = path.join("news", "mainImage", imageFileName);
  const { title, content, show, NewsCategoryId } = req.body;
  const feed_id = Date.now();
  const newFeed = await Feed.create({
    feed_id,
    title,
    content,
    show,
    UserId: req.user.id,
    mainImage: imagePath,
  });
  try {
    await newFeed.setNewsCategory(NewsCategoryId);
    await saveFiles(req, newFeed.id);
    return res.send("feed saved success").status(200);
  } catch (error) {
    return res.send("faild to insert").status(500);
  }
}

async function edit(req, res) {
  const { id } = req.params;
  const feed = await Feed.findByPk(id, {
    include: [
      {
        model: NewsCategory,
      },
    ],
  });
  const files = await File.findAll({
    where: {
      FeedId: id,
    },
  });
  const newsCategories = await NewsCategory.findAll();
  return res.send({
    ...options,
    title: "edit news",
    url: "/edit",
    newsCategories,
    feed: {
      ...feed.dataValues,
      Files: files,
      category: feed.NewsCategoryId,
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
        FeedId: feedId,
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
