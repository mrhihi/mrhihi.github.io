const glob = require("glob");
const path = require("path");
const fs = require("fs");
const matter = require("gray-matter");
const moment = require("moment");

const blogPath = "./.docusaurus/docusaurus-plugin-content-blog/default";
const blogFilesPattern = "site-blog-*.json";
const latestBlogPostList = "./src/components/LatestPosts/latest-blog-posts.json";

const docsPath = "./.docusaurus/docusaurus-plugin-content-docs/default";
const docFilesPattern = "site-docs-*.json";
const latestDocsList = "./src/components/LatestPosts/latest-docs.json";

generateLatestPostList(blogPath, blogFilesPattern, latestBlogPostList);

generateLatestPostList(docsPath, docFilesPattern, latestDocsList);

function generateLatestPostList(folderPath, filesPattern, outputPath) {
    // 改為陣列收集，避免同一天的多篇文章被同一鍵覆蓋
    let allItems = [];

    const blogFiles = glob.sync(path.join(folderPath, filesPattern));

    blogFiles.forEach((file) => {
        const rawdata = fs.readFileSync(file);
        const item = JSON.parse(rawdata);

        if (item != null && item.draft != true) {
            // 若沒有 date，使用 lastUpdatedAt
            item.date ??= new Date(item.lastUpdatedAt ?? 0);

            const yearMonth = moment(item.date).format("YYYY 年 MM 月");
            const day = moment(item.date).format("DD");
            const ts = new Date(item.date).getTime();

            allItems.push({
                title: item.title,
                permalink: item.permalink,
                description: item.description,
                tags: item.tags,
                date: item.date,
                yearMonth: yearMonth,
                day: day,
                _ts: ts
            });
        }
    });

    const latestItems = allItems
        .sort((a, b) => b._ts - a._ts)
        .slice(0, 5)
        .map(({ _ts, ...rest }) => rest);

    generateLatestFile(latestItems, outputPath);
}

function generateLatestFile(allPosts, filePath) {
    fs.writeFileSync(filePath, JSON.stringify(allPosts, null, 2));
}
