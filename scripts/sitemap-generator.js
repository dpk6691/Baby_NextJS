const sitemap = require("nextjs-sitemap-generator");
const fs = require("fs");
const path = require("path");

function getDynamicRoutes() {
  return ["/indian", "/rashi", "/names"];
}

sitemap({
  baseUrl: "https://baby-next-js.vercel.app",
  pagesDirectory: path.resolve(__dirname, "../pages/"),
  targetDirectory: path.resolve(__dirname, "../public/"),
  ignoredExtensions: ["js", "map", "json", "xml", "png", "jpg", "jpeg", "svg"],
  ignoredPaths: ["/layout", "../pages/api"],
  allowFileExtensions: true,
  pagesConfig: {
    "/dynamic-route-1": {
      priority: "0.5",
      changefreq: "daily",
    },
    "/dynamic-route-2": {
      priority: "0.5",
      changefreq: "daily",
    },

    ...getDynamicRoutes().reduce((acc, route) => {
      acc[route] = { priority: "0.5", changefreq: "daily" };
      return acc;
    }, {}),
  },
});

// node scripts/sitemap-generator.js
