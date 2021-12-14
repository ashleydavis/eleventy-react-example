const pluginReactStatic = require("eleventy-plugin-react-static");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(pluginReactStatic, {
        mode: "hydrate",
        minify: false,
    });

    eleventyConfig.addPassthroughCopy("assets");
};