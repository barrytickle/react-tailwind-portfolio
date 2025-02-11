import { endpoint } from "../src/helpers/config.js";

import * as fs from "fs";

let xml = '<urlset xmlns="https://sitemaps.org/schemas/sitemap.0.9">';

const router = async () => {
  // if (pages.length > 0) return;
  const response = await fetch(`${endpoint}/pages/?populate=deep`);
  const data = await response.json();

  const pages = [];

  data.data.forEach((d) => {
    const category = d?.attributes?.category?.data?.attributes;

    const page = d.attributes;
    const slug = page.slug === "." ? "/" : page.slug;
    const obj = {
      path: category.slug !== "page" ? `/${category.slug}/${slug}` : slug,
    };
    pages.push(obj);
  });

  pages.forEach((page) => {
    xml += `
      <url>
        <loc>https://barrytickle.com${page.path[0] === "/" ? "" : "/"}${page.path}</loc>
      </url>
    `;
  });

  xml += `</urlset>`;

  fs.writeFile("../public/sitemap.xml", xml, function (err) {
    if (err) {
      console.log(err);
    }
  });
};

router();
