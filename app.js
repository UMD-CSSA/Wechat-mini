let Api = require("./http/api.js");
let request = require("./http/request.js");
let config = require("./env/index.js");
let router = require("./utils/router.js");
let env = "Test";
App.config = config[env]; // 公共调用
App.version = "1.0.0";

App({
  config: config[env], //视图
  Api,
  router,
  get: request.fetch,
  post: (url, data, option) =>{
    option.method = "post";
    return request.fetch(url, data, option);
  }
});