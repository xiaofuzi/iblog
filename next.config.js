// next.config.js
const withSass = require("@zeit/next-sass");
const notesApi = require('./lib/notes/index.js');
const fs = require("fs-extra");
const Config = require('./config.js');
const path = require('path');

const _path = Config.storgePath || "/Users/yangxiaofu/Boostnote";


const debug = process.env.NODE_ENV !== "production";
function saveStorge () {
    fs.emptyDirSync("./storge");
    fs.copySync(_path, './storge', {
        overwrite: true
    });
}

async function getNotesList () {
    let res = await notesApi.fetchNotes();
    return res.all;
}
let nextConfigJs = {
  exportPathMap: async function(defaultPathMap) {
    let pages = {
        "/": { page: "/note" },
        "/notes": { page: "/note" },
        "/posts": { page: "/" }
    };

    let postPages = {};
    let allPosts = await getNotesList();
    allPosts&&allPosts.map(post => {
      postPages[`/post/${post.key}`] = {
        page: "/post",
        query: { id: post.key }
      };
    });

    // saveStorge
    saveStorge();
    return Object.assign(pages, postPages);
  },
  // assetPrefix: !debug ? "/Next-gh-page-example/" : ""
};
module.exports = withSass(nextConfigJs)
