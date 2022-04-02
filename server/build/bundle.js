/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _routes_news__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/news */ \"./routes/news.js\");\n/* harmony import */ var _services_reactRenderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/reactRenderer */ \"./services/reactRenderer.js\");\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_1___default()();\n\n\n__webpack_require__(/*! ./database/models/index */ \"./database/models/index.js\");\n\napp.use(express__WEBPACK_IMPORTED_MODULE_1___default()[\"static\"](\"public\"));\napp.use(\"/news\", _routes_news__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\napp.engine(\"ejs\", __webpack_require__(/*! express-ejs-extend */ \"express-ejs-extend\"));\napp.set(\"view engine\", \"ejs\");\napp.set(\"views\", path__WEBPACK_IMPORTED_MODULE_0___default().join(__dirname, \"../\", \"views\"));\napp.get(\"/files\", function (req, res) {\n  console.log(req.query.file);\n  var filePath = path__WEBPACK_IMPORTED_MODULE_0___default().join(__dirname, \"storage\", req.query.file);\n  res.sendFile(filePath);\n}); // anthor routes\n\napp.get(\"/admin/api\", function (req, res) {\n  return res.send(\"api\");\n}); // admin dashboard\n\napp.get(\"/*\", function (req, res) {\n  return res.send((0,_services_reactRenderer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(req));\n});\napp.listen(4000, function () {\n  console.log(\"Listening on port 3000\");\n});\n\n//# sourceURL=webpack://menofia-admin-dashboard/./app.js?");

/***/ }),

/***/ "./config/dev.js":
/*!***********************!*\
  !*** ./config/dev.js ***!
  \***********************/
/***/ ((module) => {

eval("module.exports = {\n  dbName: \"mu\",\n  dbHost: \"localhost\",\n  dbUser: \"root\",\n  dbPassword: \"asdf@123\"\n};\n\n//# sourceURL=webpack://menofia-admin-dashboard/./config/dev.js?");

/***/ }),

/***/ "./config/keys.js":
/*!************************!*\
  !*** ./config/keys.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var keys = {};\n\nif (false) {} else {\n  keys = __webpack_require__(/*! ./dev */ \"./config/dev.js\");\n}\n\nmodule.exports = keys;\n\n//# sourceURL=webpack://menofia-admin-dashboard/./config/keys.js?");

/***/ }),

/***/ "./controllers/NewsController.js":
/*!***************************************!*\
  !*** ./controllers/NewsController.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"@babel/runtime/helpers/asyncToGenerator\");\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"@babel/runtime/regenerator\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar File = __webpack_require__(/*! ../database/models/File */ \"./database/models/File.js\");\n\nvar Feed = __webpack_require__(/*! ../database/models/Feed */ \"./database/models/Feed.js\");\n\nvar options = __webpack_require__(/*! ../util/viewsOptions */ \"./util/viewsOptions.js\");\n\noptions.activeMenu = \"news\";\n\nfunction index(_x, _x2) {\n  return _index.apply(this, arguments);\n}\n\nfunction _index() {\n  _index = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(req, res) {\n    var allNews;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return Feed.findAll();\n\n          case 2:\n            allNews = _context.sent;\n            res.render(\"news\", _objectSpread(_objectSpread({}, options), {}, {\n              title: \"all news\",\n              url: req.originalUrl,\n              news: allNews\n            }));\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _index.apply(this, arguments);\n}\n\nfunction create(req, res) {\n  res.render(\"add-news\", _objectSpread(_objectSpread({}, options), {}, {\n    title: \"add news\",\n    url: req.originalUrl\n  }));\n}\n\nfunction store(_x3, _x4) {\n  return _store.apply(this, arguments);\n}\n\nfunction _store() {\n  _store = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee2(req, res) {\n    var mainImage, imageFileName, imagePath, _req$body, title, content, show, feed_id, newFead, field, _iterator, _step, file, originalname, filename, new_file;\n\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            mainImage = req.files.mainImage;\n            imageFileName = mainImage[0].filename;\n            imagePath = path.join(\"news\", \"mainImage\", imageFileName);\n            _req$body = req.body, title = _req$body.title, content = _req$body.content, show = _req$body.show;\n            feed_id = Date.now();\n            newFead = Feed.build({\n              feed_id: feed_id,\n              title: title,\n              content: content,\n              show: show,\n              mainImage: imagePath\n            });\n            _context2.prev = 6;\n            _context2.next = 9;\n            return newFead.save();\n\n          case 9:\n            _context2.t0 = _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().keys(req.files);\n\n          case 10:\n            if ((_context2.t1 = _context2.t0()).done) {\n              _context2.next = 40;\n              break;\n            }\n\n            field = _context2.t1.value;\n            _iterator = _createForOfIteratorHelper(req.files[field]);\n            _context2.prev = 13;\n\n            _iterator.s();\n\n          case 15:\n            if ((_step = _iterator.n()).done) {\n              _context2.next = 30;\n              break;\n            }\n\n            file = _step.value;\n            originalname = file.originalname, filename = file.filename;\n            new_file = File.build({\n              originalname: originalname,\n              filename: filename,\n              feed_id: feed_id\n            });\n            _context2.prev = 19;\n            _context2.next = 22;\n            return new_file.save();\n\n          case 22:\n            return _context2.abrupt(\"return\", res.send(\"feed saved success\").status(200));\n\n          case 25:\n            _context2.prev = 25;\n            _context2.t2 = _context2[\"catch\"](19);\n            return _context2.abrupt(\"return\", res.send(\"error while saving files\").status(500));\n\n          case 28:\n            _context2.next = 15;\n            break;\n\n          case 30:\n            _context2.next = 35;\n            break;\n\n          case 32:\n            _context2.prev = 32;\n            _context2.t3 = _context2[\"catch\"](13);\n\n            _iterator.e(_context2.t3);\n\n          case 35:\n            _context2.prev = 35;\n\n            _iterator.f();\n\n            return _context2.finish(35);\n\n          case 38:\n            _context2.next = 10;\n            break;\n\n          case 40:\n            _context2.next = 45;\n            break;\n\n          case 42:\n            _context2.prev = 42;\n            _context2.t4 = _context2[\"catch\"](6);\n            return _context2.abrupt(\"return\", res.send(\"faild to insert\").status(500));\n\n          case 45:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[6, 42], [13, 32, 35, 38], [19, 25]]);\n  }));\n  return _store.apply(this, arguments);\n}\n\nfunction edit(_x5, _x6) {\n  return _edit.apply(this, arguments);\n}\n\nfunction _edit() {\n  _edit = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee3(req, res) {\n    var id, feed, files;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            id = req.params.id;\n            _context3.next = 3;\n            return Feed.findByPk(id);\n\n          case 3:\n            feed = _context3.sent;\n            _context3.next = 6;\n            return File.findAll({\n              where: {\n                feed_id: feed.feed_id\n              }\n            });\n\n          case 6:\n            files = _context3.sent;\n            res.render(\"edit-news\", _objectSpread(_objectSpread({}, options), {}, {\n              title: \"edit news\",\n              url: \"/edit\",\n              feed: feed,\n              files: files\n            }));\n\n          case 8:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _edit.apply(this, arguments);\n}\n\nfunction update(req, res) {\n  return res.send(\"updating store>>\" + req.params.id);\n}\n\nfunction destroy(req, es) {}\n\nfunction deleteFile(_x7, _x8) {\n  return _deleteFile.apply(this, arguments);\n}\n\nfunction _deleteFile() {\n  _deleteFile = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee5(req, res) {\n    var filePath;\n    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            console.log(req.query.file);\n            console.log(__dirname);\n            filePath = path.join(__dirname, \"../\", \"storage\", \"news\", \"Files\", \"1646787473879-821543999-2.jpg\");\n            fs.unlink(filePath, /*#__PURE__*/function () {\n              var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee4(err) {\n                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee4$(_context4) {\n                  while (1) {\n                    switch (_context4.prev = _context4.next) {\n                      case 0:\n                        if (!err) {\n                          _context4.next = 3;\n                          break;\n                        }\n\n                        console.log(err);\n                        return _context4.abrupt(\"return\", res.send(\"Error while deleting file\"));\n\n                      case 3:\n                        _context4.next = 5;\n                        return File.destroy({\n                          where: {\n                            filename: req.query.file\n                          }\n                        });\n\n                      case 5:\n                        return _context4.abrupt(\"return\", res.send(\"sucess\"));\n\n                      case 6:\n                      case \"end\":\n                        return _context4.stop();\n                    }\n                  }\n                }, _callee4);\n              }));\n\n              return function (_x9) {\n                return _ref.apply(this, arguments);\n              };\n            }()); // return res.send(req.query.file);\n\n          case 4:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n  return _deleteFile.apply(this, arguments);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  index: index,\n  create: create,\n  store: store,\n  edit: edit,\n  update: update,\n  destroy: destroy,\n  deleteFile: deleteFile\n});\n\n//# sourceURL=webpack://menofia-admin-dashboard/./controllers/NewsController.js?");

/***/ }),

/***/ "./database/models/Feed.js":
/*!*********************************!*\
  !*** ./database/models/Feed.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar database = __webpack_require__(/*! ../../services/db_connection */ \"./services/db_connection.js\");\n\nvar Feed = database.define(\"Feed\", {\n  id: {\n    type: Sequelize.BIGINT,\n    autoIncrement: true,\n    primaryKey: true\n  },\n  feed_id: {\n    type: Sequelize.STRING,\n    unique: true\n  },\n  title: {\n    type: Sequelize.STRING\n  },\n  content: {\n    type: Sequelize.TEXT\n  },\n  auther: {\n    type: Sequelize.BIGINT\n  },\n  show: {\n    type: Sequelize.BOOLEAN\n  },\n  mainImage: {\n    type: Sequelize.STRING\n  }\n});\nmodule.exports = Feed;\n\n//# sourceURL=webpack://menofia-admin-dashboard/./database/models/Feed.js?");

/***/ }),

/***/ "./database/models/File.js":
/*!*********************************!*\
  !*** ./database/models/File.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar database = __webpack_require__(/*! ../../services/db_connection */ \"./services/db_connection.js\");\n\nvar File = database.define(\"File\", {\n  id: {\n    type: Sequelize.BIGINT,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  filename: {\n    type: Sequelize.STRING\n  },\n  originalname: {\n    type: Sequelize.STRING\n  },\n  feed_id: {\n    type: Sequelize.BIGINT\n  }\n});\nmodule.exports = File;\n\n//# sourceURL=webpack://menofia-admin-dashboard/./database/models/File.js?");

/***/ }),

/***/ "./database/models/User.js":
/*!*********************************!*\
  !*** ./database/models/User.js ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar database = __webpack_require__(/*! ../../services/db_connection */ \"./services/db_connection.js\");\n\nvar User = database.define(\"User\", {\n  id: {\n    type: Sequelize.BIGINT,\n    primaryKey: true,\n    autoIncrement: true\n  },\n  username: {\n    type: Sequelize.STRING,\n    allowNull: true,\n    defaultValue: \"admin@menofia.com\"\n  },\n  password: {\n    type: Sequelize.STRING,\n    allowNull: true,\n    defaultValue: \"12345\"\n  }\n});\nconsole.log(User === database.models.User);\nmodule.exports = User;\n\n//# sourceURL=webpack://menofia-admin-dashboard/./database/models/User.js?");

/***/ }),

/***/ "./database/models/index.js":
/*!**********************************!*\
  !*** ./database/models/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var database = __webpack_require__(/*! ../../services/db_connection */ \"./services/db_connection.js\");\n\nvar User = __webpack_require__(/*! ./User */ \"./database/models/User.js\");\n\nvar File = __webpack_require__(/*! ./File */ \"./database/models/File.js\");\n\nvar Feed = __webpack_require__(/*! ./Feed */ \"./database/models/Feed.js\");\n\ndatabase.sync().then(function () {\n  console.log(\"All models were synchronized successfully.\");\n}).catch(function (error) {\n  console.log(\"Error while synchronization\");\n  console.log(error);\n});\n\n//# sourceURL=webpack://menofia-admin-dashboard/./database/models/index.js?");

/***/ }),

/***/ "./routes/news.js":
/*!************************!*\
  !*** ./routes/news.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_NewsController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/NewsController */ \"./controllers/NewsController.js\");\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\n\nvar _require = __webpack_require__(/*! ../util/multerStorage */ \"./util/multerStorage.js\"),\n    newsStorage = _require.newsStorage;\n\nrouter.get(\"/\", _controllers_NewsController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].index);\nrouter.get(\"/create\", _controllers_NewsController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\nrouter.post(\"/create\", newsStorage.fields([{\n  name: \"mainImage\",\n  maxCount: 1\n}, {\n  name: \"files\",\n  maxCount: 4\n}]), _controllers_NewsController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].store);\nrouter.get(\"/:id/edit\", _controllers_NewsController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].edit);\nrouter.put(\"/:id/update\", _controllers_NewsController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update);\nrouter.delete(\"/:id/deleteFile\", _controllers_NewsController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].deleteFile);\nrouter.delete(\"/delete\", _controllers_NewsController__WEBPACK_IMPORTED_MODULE_1__[\"default\"].destroy);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://menofia-admin-dashboard/./routes/news.js?");

/***/ }),

/***/ "./services/db_connection.js":
/*!***********************************!*\
  !*** ./services/db_connection.js ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Sequelize = __webpack_require__(/*! sequelize */ \"sequelize\");\n\nvar keys = __webpack_require__(/*! ../config/keys */ \"./config/keys.js\");\n\nvar connection = new Sequelize(keys.dbName, keys.dbUser, keys.dbPassword, {\n  dialect: \"mysql\",\n  host: keys.dbHost\n});\nmodule.exports = connection;\n\n//# sourceURL=webpack://menofia-admin-dashboard/./services/db_connection.js?");

/***/ }),

/***/ "./services/reactRenderer.js":
/*!***********************************!*\
  !*** ./services/reactRenderer.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_client_components_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/client/components/Home */ \"./src/client/components/Home.js\");\n/* harmony import */ var _src_client_Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/client/Routes */ \"./src/client/Routes.js\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom/server */ \"react-router-dom/server\");\n/* harmony import */ var react_router_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function (req) {\n  var content = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_0__.renderToString)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom_server__WEBPACK_IMPORTED_MODULE_4__.StaticRouter, {\n    location: req.path,\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_src_client_Routes__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {})\n  }));\n  var html = \"\\n    <html>\\n      <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"http://localhost:4000/styles.css\\\" />\\n        <link rel=\\\"stylesheet\\\" type=\\\"text/css\\\" href=\\\"http://localhost:4000/dist/css/bootstrap.min.css\\\" />\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">\".concat(content, \"</div>\\n      </body>\\n      <script src=\\\"http://localhost:4000/bundle.js\\\"></script>\\n    </html>\");\n  return html;\n});\n\n//# sourceURL=webpack://menofia-admin-dashboard/./services/reactRenderer.js?");

/***/ }),

/***/ "./src/client/Pages/HomePage.js":
/*!**************************************!*\
  !*** ./src/client/Pages/HomePage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _components_Home_Page_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/Home_Page/Header */ \"./src/client/components/Home_Page/Header.js\");\n/* harmony import */ var _components_Home_Page_Nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home_Page/Nav */ \"./src/client/components/Home_Page/Nav.js\");\n/* harmony import */ var _components_Home_Page_Cover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home_Page/Cover */ \"./src/client/components/Home_Page/Cover.js\");\n/* harmony import */ var _components_Home_Page_LatestNewsCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Home_Page/LatestNewsCard */ \"./src/client/components/Home_Page/LatestNewsCard.js\");\n/* harmony import */ var _components_Home_Page_VideosAboutUni__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Home_Page/VideosAboutUni */ \"./src/client/components/Home_Page/VideosAboutUni.js\");\n/* harmony import */ var _components_Home_Page_Statistics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Home_Page/Statistics */ \"./src/client/components/Home_Page/Statistics.js\");\n/* harmony import */ var _components_Home_Page_Addminstration__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Home_Page/Addminstration */ \"./src/client/components/Home_Page/Addminstration.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\n\n\nfunction HomePage() {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Home_Page_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Home_Page_Nav__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Home_Page_Cover__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Home_Page_LatestNewsCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Home_Page_VideosAboutUni__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Home_Page_Statistics__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_Home_Page_Addminstration__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {})]\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/Pages/HomePage.js?");

/***/ }),

/***/ "./src/client/Pages/Map.js":
/*!*********************************!*\
  !*** ./src/client/Pages/Map.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _map_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.css */ \"./src/client/Pages/map.css\");\n/* harmony import */ var _services_tour_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/tour/map */ \"./src/client/services/tour/map.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\nvar Map = function Map(_ref) {\n  var currentLocation = _ref.currentLocation,\n      onNodeHover = _ref.onNodeHover;\n\n  var generateMapInfo = function generateMapInfo() {\n    var facsInfo = _services_tour_map__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n    var cordinates = {\n      x: 195.5,\n      y: 100\n    };\n    facsInfo = facsInfo.map(function (faculty) {\n      cordinates = faculty.cordinates ? faculty.cordinates : cordinates;\n\n      if (faculty.right !== null) {\n        var rightNodeCordinates = {\n          x: cordinates.x + 150,\n          y: 100\n        };\n        if (!facsInfo[faculty.right].cordinates) facsInfo[faculty.right].cordinates = rightNodeCordinates;\n      }\n\n      if (faculty.left !== null) {\n        var leftNodeCordinates = {\n          x: cordinates.x - 150,\n          y: 100\n        };\n        if (!facsInfo[faculty.left].cordinates) facsInfo[faculty.left].cordinates = leftNodeCordinates;\n      }\n\n      return faculty;\n    });\n    return facsInfo;\n  };\n\n  var drawNodes = function drawNodes() {\n    var drawedPaths = {};\n    var nodesInfo = generateMapInfo();\n    return nodesInfo.map(function (node, index) {\n      var _node$cordinates = node.cordinates,\n          x = _node$cordinates.x,\n          y = _node$cordinates.y;\n      var translate = \"translate(\".concat(x, \", \").concat(y, \")\");\n\n      var pathLeft = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {});\n\n      if (node.left) {\n        var _nodesInfo$node$left$ = nodesInfo[node.left].cordinates,\n            lx = _nodesInfo$node$left$.x,\n            ly = _nodesInfo$node$left$.y;\n        var sorted = [index, node.left].sort(function (a, b) {\n          return a - b;\n        });\n        var drawedPath = sorted.join();\n\n        if (!(drawedPath in drawedPaths)) {\n          pathLeft = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"path\", {\n            d: \"M \".concat(x, \" \").concat(y, \" Q 97.75 159.14 \").concat(lx, \" \").concat(ly),\n            stroke: \"black\",\n            fill: \"none\",\n            className: \"link\",\n            \"marker-end\": \"url(#link-arrow)\"\n          });\n          drawedPaths[drawedPath] = true;\n        }\n      }\n\n      var pathRight = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {});\n\n      if (node.right) {\n        var _nodesInfo$node$right = nodesInfo[node.right].cordinates,\n            rx = _nodesInfo$node$right.x,\n            ry = _nodesInfo$node$right.y;\n\n        var _sorted = [index, node.right].sort(function (a, b) {\n          return a - b;\n        });\n\n        var _drawedPath = _sorted.join();\n\n        if (!(_drawedPath in drawedPaths)) {\n          pathRight = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"path\", {\n            d: \"M \".concat(x, \" \").concat(y, \" Q 97.75 159.14 \").concat(rx, \" \").concat(ry),\n            stroke: \"black\",\n            fill: \"none\",\n            class: \"link\",\n            \"marker-end\": \"url(#link-arrow)\"\n          });\n          drawedPaths[_drawedPath] = true;\n        }\n      }\n\n      var isActive = currentLocation === node;\n      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"g\", {\n          className: \"node\",\n          transform: translate,\n          onMouseOver: function onMouseOver() {\n            return onNodeHover(node.title);\n          },\n          onMouseOut: function onMouseOut() {\n            return onNodeHover(\"\");\n          },\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"circle\", {\n            className: \"circle  \".concat(isActive && \"active_node\"),\n            r: 20\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"text\", {\n            dy: \".35em\",\n            style: {\n              textAnchor: \"middle\",\n              textShadow: \"black 1px 1px\"\n            },\n            children: \"MU\"\n          })]\n        }, index), pathLeft, \" \", pathRight]\n      });\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\", {\n    className: \"map\",\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\", {\n      className: \"graph-root\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"svg\", {\n        width: 500,\n        height: 200,\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"g\", {\n          transform: \"translate(50, 30)\",\n          children: drawNodes()\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"defs\", {\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"marker\", {\n            id: \"link-arrow\",\n            viewBox: \"0 0 5 5\",\n            refX: \"4.5\",\n            refY: \"2.5\",\n            markerUnits: \"strokeWidth\",\n            markerWidth: 5,\n            markerHeight: 5,\n            orient: \"auto\",\n            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"path\", {\n              d: \"M 0 0 L 5 2.5 L 0 5 z\",\n              fill: \"#626ee3\"\n            })\n          })\n        })]\n      })\n    })\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Map);\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/Pages/Map.js?");

/***/ }),

/***/ "./src/client/Pages/Tour.js":
/*!**********************************!*\
  !*** ./src/client/Pages/Tour.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ \"@babel/runtime/helpers/slicedToArray\");\n/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Tour_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tour.css */ \"./src/client/Pages/Tour.css\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ri */ \"react-icons/ri\");\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _360_image_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! 360-image-viewer */ \"360-image-viewer\");\n/* harmony import */ var _360_image_viewer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_360_image_viewer__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var canvas_fit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! canvas-fit */ \"canvas-fit\");\n/* harmony import */ var canvas_fit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(canvas_fit__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _services_tour_map__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/tour/map */ \"./src/client/services/tour/map.js\");\n/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Map */ \"./src/client/Pages/Map.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\n\nvar Tour = function Tour() {\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(_services_tour_map__WEBPACK_IMPORTED_MODULE_6__[\"default\"][0]),\n      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),\n      currentLocation = _useState2[0],\n      setCurrentLocation = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),\n      nextLocationInfo = _useState4[0],\n      setNextLocatonInfo = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"),\n      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState5, 2),\n      viewer = _useState6[0],\n      setViewer = _useState6[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var image = document.createElement(\"img\");\n    image.src = currentLocation.image;\n    image.addEventListener(\"load\", function () {\n      var viewer = _360_image_viewer__WEBPACK_IMPORTED_MODULE_4___default()({\n        image: image\n      });\n      document.getElementById(\"panorama\").appendChild(viewer.canvas);\n      var fit = canvas_fit__WEBPACK_IMPORTED_MODULE_5___default()(viewer.canvas, window, window.devicePixelRatio);\n      window.addEventListener(\"resize\", fit, false);\n      viewer.start();\n      setViewer(viewer);\n    });\n  }, []);\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    // change image when current location changing\n    if (viewer) {\n      var image = document.createElement(\"img\");\n      image.src = currentLocation.image;\n      image.addEventListener(\"load\", function () {\n        console.log(\"image loaded\");\n        viewer.texture(image);\n      });\n    }\n  }, [currentLocation]);\n\n  var goRight = function goRight() {\n    setNextLocatonInfo(\"\");\n    setCurrentLocation(_services_tour_map__WEBPACK_IMPORTED_MODULE_6__[\"default\"][currentLocation.right]);\n  };\n\n  var goLeft = function goLeft() {\n    setNextLocatonInfo(\"\");\n    setCurrentLocation(_services_tour_map__WEBPACK_IMPORTED_MODULE_6__[\"default\"][currentLocation.left]);\n  };\n\n  var updateNextLocationInfo = function updateNextLocationInfo(direction) {\n    if (direction === \"right\") setNextLocatonInfo(\"on the right: \" + _services_tour_map__WEBPACK_IMPORTED_MODULE_6__[\"default\"][currentLocation.right].title);else setNextLocatonInfo(\"on the left: \" + _services_tour_map__WEBPACK_IMPORTED_MODULE_6__[\"default\"][currentLocation.left].title);\n  };\n\n  var directionBtnClasses = \"btn btn-secondary btn-direction \";\n  var leftBtnClasses = directionBtnClasses + \"btn-left\";\n  var rightBtnClasses = directionBtnClasses + \"btn-right\";\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(\"div\", {\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(\"div\", {\n      id: \"panorama\",\n      className: \"wrapper\",\n      children: [currentLocation.left !== null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(\"button\", {\n        onClick: goLeft,\n        className: leftBtnClasses,\n        onMouseOver: function onMouseOver() {\n          return updateNextLocationInfo(\"left\");\n        },\n        onMouseOut: function onMouseOut() {\n          return setNextLocatonInfo(\"\");\n        },\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__.RiArrowLeftLine, {}), \" Left\"]\n      }) : \"\", nextLocationInfo ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(\"div\", {\n        className: \"next-location\",\n        children: nextLocationInfo\n      }) : \"\", currentLocation.right !== null ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(\"button\", {\n        onClick: goRight,\n        className: rightBtnClasses,\n        onMouseOver: function onMouseOver() {\n          return updateNextLocationInfo(\"right\");\n        },\n        onMouseOut: function onMouseOut() {\n          return setNextLocatonInfo(\"\");\n        },\n        children: [\"Right \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__.RiArrowRightLine, {})]\n      }) : \"\", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Map__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        currentLocation: currentLocation,\n        onNodeHover: setNextLocatonInfo\n      })]\n    })\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tour);\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/Pages/Tour.js?");

/***/ }),

/***/ "./src/client/Routes.js":
/*!******************************!*\
  !*** ./src/client/Routes.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Pages_HomePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pages/HomePage */ \"./src/client/Pages/HomePage.js\");\n/* harmony import */ var _Pages_Tour__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Pages/Tour */ \"./src/client/Pages/Tour.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  var loggedIn = false;\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Routes, {\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n        path: \"/\",\n        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Pages_HomePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {})\n        })\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n        path: \"/tour\",\n        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Pages_Tour__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {})\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Route, {\n        path: \"admin/dashboard/loggedIn\",\n        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Navigate, {\n          to: \"/admin/dashboard/test\",\n          replace: true\n        })\n      })]\n    })\n  });\n});\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/Routes.js?");

/***/ }),

/***/ "./src/client/components/Home.js":
/*!***************************************!*\
  !*** ./src/client/components/Home.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"loadData\": () => (/* binding */ loadData)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ \"@babel/runtime/helpers/taggedTemplateLiteral\");\n/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _templateObject;\n\n // import \"./test.css\";\n\n\n\n\nvar Heading = styled_components__WEBPACK_IMPORTED_MODULE_2___default().h1(_templateObject || (_templateObject = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()([\"\\n  color: green;\\n\"])));\n\nvar Home = function Home() {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(\"div\", {\n    className: \"test\",\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Heading, {\n      children: \" Welcome to my simple react on server \"\n    }), \" \"]\n  });\n};\n\nfunction loadData() {\n  return \"getUsers\";\n}\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Home.js?");

/***/ }),

/***/ "./src/client/components/Home_Page/Addminstration.js":
/*!***********************************************************!*\
  !*** ./src/client/components/Home_Page/Addminstration.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Addminstration)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cards */ \"./src/client/components/Home_Page/Cards.js\");\n/* harmony import */ var _Addinstrations_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Addinstrations.css */ \"./src/client/components/Home_Page/Addinstrations.css\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);\n\n\n //import aa from './Images/cover.jfif'\n\n\nfunction Addminstration() {\n  /*const items=[\r\n      {id:1,title:'Dr.Adel Moubark',content:'Manager of Menoufia University',img:aa}\r\n  ]*/\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\", {\n    className: \"Addmins\",\n    id: \"Add\",\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(\"div\", {\n        className: \"cards\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Cards__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {})\n      })\n    })\n  });\n}\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Home_Page/Addminstration.js?");

/***/ }),

/***/ "./src/client/components/Home_Page/Cards.js":
/*!**************************************************!*\
  !*** ./src/client/components/Home_Page/Cards.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cards)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card.css */ \"./src/client/components/Home_Page/card.css\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Cards(props) {\n  //const{img,date,title}=props.item;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {// const item = props.item;\n    // const { img } = item;\n    // console.log(img);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(\"div\", {\n    className: \"cardss\"\n  });\n}\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Home_Page/Cards.js?");

/***/ }),

/***/ "./src/client/components/Home_Page/Cover.js":
/*!**************************************************!*\
  !*** ./src/client/components/Home_Page/Cover.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cover)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Cover_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cover.css */ \"./src/client/components/Home_Page/Cover.css\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Videos_M2_mp4__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Videos/M2.mp4 */ \"./src/client/components/Videos/M2.mp4\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nfunction cover() {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n    className: \"view\",\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(\"div\", {\n      className: \"cover\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"video\", {\n        autoPlay: true,\n        loop: true,\n        muted: true,\n        id: \"vid\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"source\", {\n          src: _Videos_M2_mp4__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n          type: \"video/mp4\"\n        })\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n        className: \"trans--text\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(\"div\", {\n          className: \"organize\",\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {\n            to: \"/tour\",\n            id: \"text\",\n            children: [\"Virtual Tour\", \" \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n              className: \"icon\",\n              icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__.faArrowRight\n            })]\n          })\n        })\n      })]\n    })\n  });\n}\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Home_Page/Cover.js?");

/***/ }),

/***/ "./src/client/components/Home_Page/Figure.js":
/*!***************************************************!*\
  !*** ./src/client/components/Home_Page/Figure.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Figure)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Figure_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Figure.css */ \"./src/client/components/Home_Page/Figure.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\nvar Figure = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Figure, _Component);\n\n  var _super = _createSuper(Figure);\n\n  function Figure(props) {\n    var _this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Figure);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      count: 0\n    };\n    _this.myInterval = null;\n    return _this;\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Figure, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var listener = function listener(event) {\n        var hight = window.pageYOffset;\n        var ani = document.getElementsByClassName(\"cir\");\n\n        if (hight > 1700) {\n          Array.from(ani).forEach(function (element) {\n            element.classList.add(\"Animation\");\n          });\n          window.removeEventListener(\"scroll\", listener);\n          _this2.myInterval = setInterval(function () {\n            _this2.setState(function (prevState) {\n              return {\n                count: prevState.count + 1\n              };\n            });\n          }, 9);\n        } else {\n          Array.from(ani).forEach(function (element) {\n            element.classList.remove(\"Animation\");\n          });\n        }\n      };\n\n      window.addEventListener(\"scroll\", listener);\n\n      window.onscroll = function () {};\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps, prevState) {\n      if (prevState.count === this.props.num - 1) {\n        clearInterval(this.myInterval);\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var count = this.state.count;\n      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"div\", {\n        className: \"circle\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"div\", {\n          className: \"outer\",\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"div\", {\n            className: \"inner\",\n            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"h1\", {\n              children: this.props.Icon\n            })\n          })\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"svg\", {\n          id: \"circle\",\n          xmlns: \"http://www.w3.org/2000/svg\",\n          version: \"1.1\",\n          width: \"170px\",\n          height: \"170px\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"defs\", {\n            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"linearGradient\", {\n              id: \"GradientColor\",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"stop\", {\n                offset: \"0%\",\n                stopColor: \"#F6852B\"\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"stop\", {\n                offset: \"100%\",\n                stopColor: \"#147499\"\n              })]\n            })\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"circle\", {\n            className: \"cir\",\n            cx: \"85\",\n            cy: \"82\",\n            r: \"72\",\n            strokeLinecap: \"round\"\n          })]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"div\", {\n          className: \"Text\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"p\", {\n            children: \"More than\"\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"h1\", {\n            children: count\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"h2\", {\n            children: this.props.item\n          })]\n        })]\n      });\n    }\n  }]);\n\n  return Figure;\n}(react__WEBPACK_IMPORTED_MODULE_6__.Component);\n\n\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Home_Page/Figure.js?");

/***/ }),

/***/ "./src/client/components/Home_Page/Header.js":
/*!***************************************************!*\
  !*** ./src/client/components/Home_Page/Header.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.css */ \"./src/client/components/Home_Page/Header.css\");\n/* harmony import */ var _Images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Images/logo.png */ \"./src/client/components/Images/logo.png\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ \"@fortawesome/free-brands-svg-icons\");\n/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Images_lamp_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Images/lamp.png */ \"./src/client/components/Images/lamp.png\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Header = function Header() {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"div\", {\n    className: \"header\",\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"div\", {\n      className: \"cont\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"div\", {\n        className: \"logo\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"img\", {\n          src: _Images_logo_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n          alt: \"logo\"\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"p\", {\n          children: [\"Menoufia\", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"br\", {}), \"University\"]\n        })]\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"div\", {\n        className: \"unorder\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"div\", {\n          className: \"Caption--Ul\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"p\", {\n            children: [\"The beacon of knowledge in the heart of the delta\", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"img\", {\n              src: _Images_lamp_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n              alt: \"Lamp\"\n            })]\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"div\", {\n            className: \"dis--row\",\n            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"ul\", {\n              className: \"mainul\",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"li\", {\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"a\", {\n                  href: \"#\",\n                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faFacebookF\n                  })\n                })\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"li\", {\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"a\", {\n                  href: \"#\",\n                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faInstagram\n                  })\n                })\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"li\", {\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"a\", {\n                  href: \"#\",\n                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faLinkedinIn\n                  })\n                })\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"li\", {\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"a\", {\n                  href: \"#\",\n                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faEnvelope\n                  })\n                })\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"li\", {\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"a\", {\n                  href: \"#\",\n                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                    icon: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faTwitter\n                  })\n                })\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"li\", {\n                id: \"search\",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(\"div\", {\n                  className: \"stl--search\",\n                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"a\", {\n                    href: \"#\",\n                    id: \"btn--search\",\n                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n                      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faSearch\n                    })\n                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"input\", {\n                    type: \"text\"\n                  })]\n                })\n              })]\n            })\n          })]\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"div\", {\n          className: \"bars\",\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faBars\n          })\n        })]\n      })]\n    })\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Home_Page/Header.js?");

/***/ }),

/***/ "./src/client/components/Home_Page/LatestNewsCard.js":
/*!***********************************************************!*\
  !*** ./src/client/components/Home_Page/LatestNewsCard.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LatestNewsCard)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Cards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Cards */ \"./src/client/components/Home_Page/Cards.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n//import React from \"react\";\n\n\n\n\nvar LatestNewsCard = /*#__PURE__*/function (_Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(LatestNewsCard, _Component);\n\n  var _super = _createSuper(LatestNewsCard);\n\n  function LatestNewsCard() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, LatestNewsCard);\n\n    return _super.apply(this, arguments);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(LatestNewsCard, [{\n    key: \"render\",\n    value: function render() {\n      var cardInfo = [{\n        img: \"https://media.istockphoto.com/photos/sunrise-above-a-forest-on-a-foggy-morning-picture-id1284795077?s=612x612\",\n        date: \"1/1/2022\",\n        title: \"this is my university\"\n      }, {\n        img: \"https://media.istockphoto.com/photos/tropical-jungle-picture-id625599832\",\n        date: \"1/1/2021\",\n        title: \"this is a tree\"\n      }, {\n        img: \"https://media.istockphoto.com/photos/tropical-jungle-picture-id625599832\",\n        date: \"1/1/2021\",\n        title: \"this is a tree\"\n      }, {\n        img: \"https://media.istockphoto.com/photos/tropical-jungle-picture-id625599832\",\n        date: \"1/1/2021\",\n        title: \"this is a tree\"\n      }, {\n        img: \"https://media.istockphoto.com/photos/tropical-jungle-picture-id625599832\",\n        date: \"1/1/2021\",\n        title: \"this is a tree\"\n      }, {\n        img: \"https://media.istockphoto.com/photos/tropical-jungle-picture-id625599832\",\n        date: \"1/1/2021\",\n        title: \"this is a tree\"\n      }];\n      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(\"div\", {\n        children: cardInfo.map(function (item, index) {\n          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Cards__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n            item: item\n          }, index);\n        })\n      });\n    }\n  }]);\n\n  return LatestNewsCard;\n}(react__WEBPACK_IMPORTED_MODULE_5__.Component);\n\n\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Home_Page/LatestNewsCard.js?");

/***/ }),

/***/ "./src/client/components/Home_Page/Nav.js":
/*!************************************************!*\
  !*** ./src/client/components/Home_Page/Nav.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _Nav_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Nav.css */ \"./src/client/components/Home_Page/Nav.css\");\n/* harmony import */ var _faculties_Engineering_Engineering__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../faculties/Engineering/Engineering */ \"./src/client/components/faculties/Engineering/Engineering.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\n\n\n\n\nvar Nav = /*#__PURE__*/function (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Nav, _React$Component);\n\n  var _super = _createSuper(Nav);\n\n  function Nav() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Nav);\n\n    return _super.apply(this, arguments);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Nav, [{\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"section\", {\n        className: \"nav\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n          className: \"un--list\",\n          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"ul\", {\n            className: \"Maa--Ul\",\n            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"li\", {\n              id: \"Admins\",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"a\", {\n                children: [\"Adminstration \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {\n                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngleDown\n                })]\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n                className: \"Drop--Down--Add\",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n                  className: \"admins--form\",\n                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"ul\", {\n                    className: \"In--Unor\",\n                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    })]\n                  })\n                })\n              })]\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"li\", {\n              id: \"About\",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"a\", {\n                children: [\"About \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {\n                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngleDown\n                })]\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n                className: \"Drop--Down--Add\",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n                  className: \"admins--form\",\n                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"ul\", {\n                    className: \"In--Unor\",\n                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    })]\n                  })\n                })\n              })]\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"li\", {\n              id: \"Stf--Mem\",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"a\", {\n                children: [\"Staff Members\", \" \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {\n                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngleDown\n                })]\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n                className: \"Drop--Down--Add\",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n                  className: \"admins--form\",\n                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"ul\", {\n                    className: \"In--Unor\",\n                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    })]\n                  })\n                })\n              })]\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"li\", {\n              id: \"Facs\",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"a\", {\n                children: [\"Faculties \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {\n                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngleDown\n                })]\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n                className: \"Drop--Down--Add\",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n                  className: \"admins--form\",\n                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"ul\", {\n                    className: \"In--Unor\",\n                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    })]\n                  })\n                })\n              })]\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"li\", {\n              id: \"Sci--Res\",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"a\", {\n                children: [\"Scientific Research\", \" \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {\n                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngleDown\n                })]\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n                className: \"Drop--Down--Add\",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n                  className: \"admins--form\",\n                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"ul\", {\n                    className: \"In--Unor\",\n                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    })]\n                  })\n                })\n              })]\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"li\", {\n              id: \"Stu\",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"a\", {\n                children: [\"Students \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {\n                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngleDown\n                })]\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n                className: \"Drop--Down--Add\",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n                  className: \"admins--form\",\n                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"ul\", {\n                    className: \"In--Unor\",\n                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    })]\n                  })\n                })\n              })]\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"li\", {\n              id: \"Egy--Uni\",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"a\", {\n                children: [\"Egyptian Universities\", \" \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {\n                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngleDown\n                })]\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n                className: \"Drop--Down--Add\",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n                  className: \"admins--form\",\n                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"ul\", {\n                    className: \"In--Unor\",\n                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    })]\n                  })\n                })\n              })]\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"li\", {\n              id: \"Media\",\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"a\", {\n                children: [\"Media \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__.FontAwesomeIcon, {\n                  icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faAngleDown\n                })]\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n                className: \"Drop--Down--Add\",\n                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"div\", {\n                  className: \"admins--form\",\n                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(\"ul\", {\n                    className: \"In--Unor\",\n                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"li\", {\n                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(\"a\", {\n                        href: \"#\",\n                        children: \"MF President Sector\"\n                      })\n                    })]\n                  })\n                })\n              })]\n            })]\n          })\n        })\n      });\n    }\n  }]);\n\n  return Nav;\n}((react__WEBPACK_IMPORTED_MODULE_6___default().Component));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Home_Page/Nav.js?");

/***/ }),

/***/ "./src/client/components/Home_Page/Slider.js":
/*!***************************************************!*\
  !*** ./src/client/components/Home_Page/Slider.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"@babel/runtime/helpers/defineProperty\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Images_cc_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Images/cc.jpg */ \"./src/client/components/Images/cc.jpg\");\n/* harmony import */ var _slider_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./slider.css */ \"./src/client/components/Home_Page/slider.css\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\n // import \"bootstrap/dist/css/bootstrap.min.css\";\n\n\n\n\n\n\nfunction Slider(_ref) {\n  var img = _ref.img,\n      Description = _ref.Description;\n  console.log(img);\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"div\", {\n    className: \"back\",\n    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"div\", {\n      className: \"container--Slide\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"div\", {\n        className: \"slider\",\n        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel, {\n          variant: \"dark\",\n          className: \"ww\",\n          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel.Item, {\n            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"img\", _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({\n              src: img.cc,\n              width: \"100%\",\n              height: \"600px\",\n              alt: \"managers\"\n            }, \"alt\", \"First slide\")), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel.Caption, {\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"h5\", {\n                children: Description\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"p\", {\n                children: \"Nulla vitae elit libero, a pharetra augue mollis interdum.\"\n              })]\n            })]\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel.Item, {\n            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"img\", {\n              src: img.cc,\n              width: \"100%\",\n              height: \"600px\",\n              alt: \"managers\"\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel.Caption, {\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"h5\", {\n                children: \"Second slide label\"\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"p\", {\n                children: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit.\"\n              })]\n            })]\n          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel.Item, {\n            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"img\", {\n              src: img.cc,\n              width: \"100%\",\n              height: \"600px\",\n              alt: \"managers\"\n            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__.Carousel.Caption, {\n              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"h5\", {\n                children: Description\n              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"p\", {\n                children: \"Praesent commodo cursus magna, vel scelerisque nisl consectetur.\"\n              })]\n            })]\n          })]\n        })\n      })\n    })\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Home_Page/Slider.js?");

/***/ }),

/***/ "./src/client/components/Home_Page/Statistics.js":
/*!*******************************************************!*\
  !*** ./src/client/components/Home_Page/Statistics.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Statistics)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Figure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Figure */ \"./src/client/components/Home_Page/Figure.js\");\n/* harmony import */ var _Statics_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Statics.css */ \"./src/client/components/Home_Page/Statics.css\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction Statistics() {\n  var students = {\n    num: 100,\n    Icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faUsers\n    }),\n    item: 'Student'\n  };\n  var Staff = {\n    num: 200,\n    Icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n      className: \"Icons\",\n      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faUserTie\n    }),\n    item: 'Staff'\n  };\n  var Under_graduated_stu = {\n    num: 300,\n    Icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faUserGraduate\n    }),\n    item: 'Under graduated Student'\n  };\n  var employee = {\n    num: 400,\n    Icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faIdCard\n    }),\n    item: 'Employees'\n  };\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(\"section\", {\n    className: \"Statics\",\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"div\", {\n      className: \"Title\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"h1\", {\n        children: \"Statistics\"\n      })\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(\"div\", {\n      className: \"Organize\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Figure__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        item: employee.item,\n        Icon: employee.Icon,\n        num: employee.num\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Figure__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        item: Staff.item,\n        Icon: Staff.Icon,\n        num: Staff.num\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Figure__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        item: Under_graduated_stu.item,\n        Icon: Under_graduated_stu.Icon,\n        num: Under_graduated_stu.num\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Figure__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        item: students.item,\n        Icon: students.Icon,\n        num: students.num\n      })]\n    })]\n  });\n}\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Home_Page/Statistics.js?");

/***/ }),

/***/ "./src/client/components/Home_Page/VideosAboutUni.js":
/*!***********************************************************!*\
  !*** ./src/client/components/Home_Page/VideosAboutUni.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ VideosAboutUni)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Statics_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Statics.css */ \"./src/client/components/Home_Page/Statics.css\");\n/* harmony import */ var _VideosAboutUni_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VideosAboutUni.css */ \"./src/client/components/Home_Page/VideosAboutUni.css\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"@fortawesome/react-fontawesome\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"@fortawesome/free-solid-svg-icons\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n\nfunction VideosAboutUni() {\n  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(\"div\", {\n    className: \"Statics\",\n    id: \"Videos\",\n    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"div\", {\n      className: \"Title\",\n      id: \"Videos--Title\",\n      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(\"h1\", {\n        children: [\"Videos About \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"span\", {\n          children: \"University\"\n        })]\n      })\n    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(\"div\", {\n      className: \"Organize\",\n      id: \"Org--Videos\",\n      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(\"div\", {\n        className: \"Frames\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"iframe\", {\n          src: \"https://www.youtube.com/embed/P2mTlz50FgM\",\n          title: \"YouTube video player\",\n          frameborder: \"0\",\n          allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n          allowfullscreen: true\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(\"a\", {\n          href: \"#\",\n          children: [\"See More\", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n            className: \"Icon\",\n            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faAngleDoubleRight\n          })]\n        })]\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(\"div\", {\n        className: \"Frames\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"iframe\", {\n          src: \"https://www.youtube.com/embed/GQswFuzafFY\",\n          title: \"YouTube video player\",\n          frameborder: \"0\",\n          allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n          allowfullscreen: true\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(\"a\", {\n          href: \"#\",\n          children: [\"See More\", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n            className: \"Icon\",\n            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faAngleDoubleRight\n          })]\n        })]\n      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(\"div\", {\n        className: \"Frames\",\n        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"iframe\", {\n          src: \"https://www.youtube.com/embed/-E0d9pwjLKY\",\n          title: \"YouTube video player\",\n          frameborder: \"0\",\n          allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\",\n          allowfullscreen: true\n        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(\"a\", {\n          href: \"#\",\n          children: [\"See More\", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__.FontAwesomeIcon, {\n            className: \"Icon\",\n            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faAngleDoubleRight\n          })]\n        })]\n      })]\n    })]\n  });\n}\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Home_Page/VideosAboutUni.js?");

/***/ }),

/***/ "./src/client/components/faculties/Engineering/Engineering.js":
/*!********************************************************************!*\
  !*** ./src/client/components/faculties/Engineering/Engineering.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"@babel/runtime/helpers/classCallCheck\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"@babel/runtime/helpers/createClass\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"@babel/runtime/helpers/inherits\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"@babel/runtime/helpers/possibleConstructorReturn\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"@babel/runtime/helpers/getPrototypeOf\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Home_Page_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Home_Page/Header */ \"./src/client/components/Home_Page/Header.js\");\n/* harmony import */ var _Home_Page_Slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Home_Page/Slider */ \"./src/client/components/Home_Page/Slider.js\");\n/* harmony import */ var _Images_2b305a0d_2116_4f8e_bd04_fb84321c235e_1_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Images/2b305a0d-2116-4f8e-bd04-fb84321c235e (1).png */ \"./src/client/components/faculties/Images/2b305a0d-2116-4f8e-bd04-fb84321c235e (1).png\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n // import NavFaculity from \"./NavFaculity\";\n\n\n\n\n\n\nvar Engineering = /*#__PURE__*/function (_React$Component) {\n  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2___default()(Engineering, _React$Component);\n\n  var _super = _createSuper(Engineering);\n\n  function Engineering() {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Engineering);\n\n    return _super.apply(this, arguments);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Engineering, [{\n    key: \"render\",\n    value: function render() {\n      var _Engineering = {\n        img: {\n          cc: _Images_2b305a0d_2116_4f8e_bd04_fb84321c235e_1_png__WEBPACK_IMPORTED_MODULE_8__[\"default\"]\n        },\n        Description: \"Alaa\"\n      };\n      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {\n        children: [\"// \", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(NavFaculity, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Home_Page_Slider__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          img: _Engineering.img,\n          Description: _Engineering.Description\n        })]\n      });\n    }\n  }]);\n\n  return Engineering;\n}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Engineering);\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/faculties/Engineering/Engineering.js?");

/***/ }),

/***/ "./src/client/services/tour/map.js":
/*!*****************************************!*\
  !*** ./src/client/services/tour/map.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _img_download_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/download.jpg */ \"./src/client/services/tour/img/download.jpg\");\n/* harmony import */ var _img_image2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/image2.jpg */ \"./src/client/services/tour/img/image2.jpg\");\n/* harmony import */ var _img_image3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/image3.jpg */ \"./src/client/services/tour/img/image3.jpg\");\n\n\n\nvar map = [];\nmap.push({\n  title: \"Faculty of Sceince\",\n  image: _img_download_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  right: 1,\n  left: 2\n});\nmap.push({\n  title: \"Faculty of Computers and Information\",\n  image: _img_image2_jpg__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  right: null,\n  left: 0\n});\nmap.push({\n  title: \"Facutly of Mass Comunication\",\n  image: _img_image3_jpg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  right: 0,\n  left: null\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (map);\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/services/tour/map.js?");

/***/ }),

/***/ "./util/multerStorage.js":
/*!*******************************!*\
  !*** ./util/multerStorage.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var multer = __webpack_require__(/*! multer */ \"multer\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar fileFilters = function fileFilters(req, file, callback) {\n  var fieldname = file.fieldname,\n      mimetype = file.mimetype;\n\n  if (fieldname === \"files\") {}\n\n  if (fieldname === \"mainImage\") {}\n\n  callback(null, true);\n};\n\nvar newsStorage = multer({\n  storage: multer.diskStorage({\n    destination: function destination(req, file, cb) {\n      var dest = [__dirname, \"../\", \"storage\", \"news\"];\n      if (file.fieldname === \"mainImage\") dest.push(\"mainImage\");else dest.push(\"files\");\n      fs.exists(path.join.apply(path, dest), function (exists) {\n        if (!exists) fs.mkdirSync(path.join.apply(path, dest));\n        cb(null, path.join.apply(path, dest));\n      });\n    },\n    filename: function filename(req, file, cb) {\n      var uniqueSuffix = Date.now() + \"-\" + Math.round(Math.random() * 1e9);\n      cb(null, uniqueSuffix + \"-\" + file.originalname);\n    }\n  }),\n  fileFilter: fileFilters\n});\nmodule.exports = {\n  newsStorage: newsStorage\n};\n\n//# sourceURL=webpack://menofia-admin-dashboard/./util/multerStorage.js?");

/***/ }),

/***/ "./util/viewsOptions.js":
/*!******************************!*\
  !*** ./util/viewsOptions.js ***!
  \******************************/
/***/ ((module) => {

eval("var options = {\n  title: \"\",\n  activeMenu: \"\",\n  url: \"\"\n};\nmodule.exports = options;\n\n//# sourceURL=webpack://menofia-admin-dashboard/./util/viewsOptions.js?");

/***/ }),

/***/ "./src/client/components/Images/cc.jpg":
/*!*********************************************!*\
  !*** ./src/client/components/Images/cc.jpg ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/client/components/Images/cc.jpg\");\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Images/cc.jpg?");

/***/ }),

/***/ "./src/client/components/Images/lamp.png":
/*!***********************************************!*\
  !*** ./src/client/components/Images/lamp.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/client/components/Images/lamp.png\");\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Images/lamp.png?");

/***/ }),

/***/ "./src/client/components/Images/logo.png":
/*!***********************************************!*\
  !*** ./src/client/components/Images/logo.png ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/client/components/Images/logo.png\");\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Images/logo.png?");

/***/ }),

/***/ "./src/client/components/Videos/M2.mp4":
/*!*********************************************!*\
  !*** ./src/client/components/Videos/M2.mp4 ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/client/components/Videos/M2.mp4\");\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Videos/M2.mp4?");

/***/ }),

/***/ "./src/client/components/faculties/Images/2b305a0d-2116-4f8e-bd04-fb84321c235e (1).png":
/*!*********************************************************************************************!*\
  !*** ./src/client/components/faculties/Images/2b305a0d-2116-4f8e-bd04-fb84321c235e (1).png ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/client/components/faculties/Images/2b305a0d-2116-4f8e-bd04-fb84321c235e (1).png\");\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/faculties/Images/2b305a0d-2116-4f8e-bd04-fb84321c235e_(1).png?");

/***/ }),

/***/ "./src/client/services/tour/img/download.jpg":
/*!***************************************************!*\
  !*** ./src/client/services/tour/img/download.jpg ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/client/services/tour/img/download.jpg\");\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/services/tour/img/download.jpg?");

/***/ }),

/***/ "./src/client/services/tour/img/image2.jpg":
/*!*************************************************!*\
  !*** ./src/client/services/tour/img/image2.jpg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/client/services/tour/img/image2.jpg\");\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/services/tour/img/image2.jpg?");

/***/ }),

/***/ "./src/client/services/tour/img/image3.jpg":
/*!*************************************************!*\
  !*** ./src/client/services/tour/img/image3.jpg ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"src/client/services/tour/img/image3.jpg\");\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/services/tour/img/image3.jpg?");

/***/ }),

/***/ "./src/client/Pages/Tour.css":
/*!***********************************!*\
  !*** ./src/client/Pages/Tour.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/Pages/Tour.css?");

/***/ }),

/***/ "./src/client/Pages/map.css":
/*!**********************************!*\
  !*** ./src/client/Pages/map.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/Pages/map.css?");

/***/ }),

/***/ "./src/client/components/Home_Page/Addinstrations.css":
/*!************************************************************!*\
  !*** ./src/client/components/Home_Page/Addinstrations.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Home_Page/Addinstrations.css?");

/***/ }),

/***/ "./src/client/components/Home_Page/Cover.css":
/*!***************************************************!*\
  !*** ./src/client/components/Home_Page/Cover.css ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Home_Page/Cover.css?");

/***/ }),

/***/ "./src/client/components/Home_Page/Figure.css":
/*!****************************************************!*\
  !*** ./src/client/components/Home_Page/Figure.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Home_Page/Figure.css?");

/***/ }),

/***/ "./src/client/components/Home_Page/Header.css":
/*!****************************************************!*\
  !*** ./src/client/components/Home_Page/Header.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Home_Page/Header.css?");

/***/ }),

/***/ "./src/client/components/Home_Page/Nav.css":
/*!*************************************************!*\
  !*** ./src/client/components/Home_Page/Nav.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Home_Page/Nav.css?");

/***/ }),

/***/ "./src/client/components/Home_Page/Statics.css":
/*!*****************************************************!*\
  !*** ./src/client/components/Home_Page/Statics.css ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Home_Page/Statics.css?");

/***/ }),

/***/ "./src/client/components/Home_Page/VideosAboutUni.css":
/*!************************************************************!*\
  !*** ./src/client/components/Home_Page/VideosAboutUni.css ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Home_Page/VideosAboutUni.css?");

/***/ }),

/***/ "./src/client/components/Home_Page/card.css":
/*!**************************************************!*\
  !*** ./src/client/components/Home_Page/card.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Home_Page/card.css?");

/***/ }),

/***/ "./src/client/components/Home_Page/slider.css":
/*!****************************************************!*\
  !*** ./src/client/components/Home_Page/slider.css ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://menofia-admin-dashboard/./src/client/components/Home_Page/slider.css?");

/***/ }),

/***/ "360-image-viewer":
/*!***********************************!*\
  !*** external "360-image-viewer" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("360-image-viewer");

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/helpers/getPrototypeOf":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/getPrototypeOf" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),

/***/ "@babel/runtime/helpers/inherits":
/*!**************************************************!*\
  !*** external "@babel/runtime/helpers/inherits" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),

/***/ "@babel/runtime/helpers/possibleConstructorReturn":
/*!*******************************************************************!*\
  !*** external "@babel/runtime/helpers/possibleConstructorReturn" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),

/***/ "@babel/runtime/helpers/slicedToArray":
/*!*******************************************************!*\
  !*** external "@babel/runtime/helpers/slicedToArray" ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/slicedToArray");

/***/ }),

/***/ "@babel/runtime/helpers/taggedTemplateLiteral":
/*!***************************************************************!*\
  !*** external "@babel/runtime/helpers/taggedTemplateLiteral" ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/taggedTemplateLiteral");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@fortawesome/free-brands-svg-icons":
/*!*****************************************************!*\
  !*** external "@fortawesome/free-brands-svg-icons" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-brands-svg-icons");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "canvas-fit":
/*!*****************************!*\
  !*** external "canvas-fit" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("canvas-fit");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "express-ejs-extend":
/*!*************************************!*\
  !*** external "express-ejs-extend" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("express-ejs-extend");

/***/ }),

/***/ "multer":
/*!*************************!*\
  !*** external "multer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("multer");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom/server");

/***/ }),

/***/ "react-icons/ri":
/*!*********************************!*\
  !*** external "react-icons/ri" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/ri");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom");

/***/ }),

/***/ "react-router-dom/server":
/*!******************************************!*\
  !*** external "react-router-dom/server" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-router-dom/server");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "sequelize":
/*!****************************!*\
  !*** external "sequelize" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("sequelize");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;