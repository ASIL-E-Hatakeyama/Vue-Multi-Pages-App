const { defineConfig } = require("@vue/cli-service");
const glob = require("glob");
const pages = {};

// エントリーファイルを設定(Pagesを一々手動で追加したくないため)
glob.sync("./src/pages/**/main.ts").forEach((path) => {
  const splitsPath = path.split("/");
  pages[splitsPath[splitsPath.length - 2]] = path;
});

module.exports = defineConfig({
  transpileDependencies: true,
  pages,
  productionSourceMap: false,
});
