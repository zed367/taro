import { readFile, writeFile } from "node:fs/promises";

const readProjectFile = (path) => readFile(new URL(`../${path}`, import.meta.url), "utf8");
const outputFile = new URL("../taro-preview.html", import.meta.url);

const [html, styles, cardData, app] = await Promise.all([
  readProjectFile("index.html"),
  readProjectFile("styles/main.css"),
  readProjectFile("data/cards.js"),
  readProjectFile("js/app.js")
]);

const preview = html
  .replace('<link rel="stylesheet" href="styles/main.css">', `<style>\n${styles}\n</style>`)
  .replace(
    '  <script src="data/cards.js"></script>\n  <script src="js/app.js"></script>',
    `  <script>\n${cardData}\n\n${app}\n  </script>`
  );

if (preview === html) {
  throw new Error("단일 HTML 생성에 필요한 원본 태그를 찾을 수 없습니다.");
}

await writeFile(outputFile, preview, "utf8");
