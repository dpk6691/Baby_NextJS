const globby = require("globby");
const fs = require("fs");

async function generateSiteMap() {
  try {
    const pages = await globby([
      "pages/**/*.tsx",
      "!pages/_*.tsx",
      // "!pages/**/[slug].tsx",
      "!pages/api",
    ]);

    const currentDate = new Date().toISOString();

    const sitemap = `
      <?xml version="1.0" encoding="UTF-8"?>
       <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
         ${pages
           .map((page) => {
             const path = page
               .replace("pages", "")
               .replace(".js", "")
               .replace(".jsx", "")
               .replace(".tsx", "")
               .replace(".md", "");
             const route = path === "./pages/index" ? "" : path;
             return `
             <url>
               <loc>${`http://localhost:3000${route}`}</loc>
               <lastmod>${currentDate}</lastmod>
               <changefreq>monthly</changefreq>
               <priority>1.0</priority>
             </url>
           `;
           })
           .join("")}
     </urlset>
    `;

    fs.writeFileSync("./public/sitemap.xml", sitemap);
    console.log("Sitemap generated successfully.");
  } catch (error) {
    console.error("Error generating sitemap:", error);
  }
}

generateSiteMap();
