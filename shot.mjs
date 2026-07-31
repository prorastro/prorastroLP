import { chromium } from "playwright";

const out = process.argv[2] || "shot.png";
const width = Number(process.argv[3] || 1280);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width, height: 900 }, deviceScaleFactor: 2 });
await page.goto("http://localhost:8080/", { waitUntil: "networkidle" });

// Rola a página inteira para disparar as animações whileInView (once), depois volta ao topo
await page.evaluate(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const step = window.innerHeight * 0.7;
  for (let y = 0; y <= document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await sleep(220);
  }
  window.scrollTo(0, 0);
  await sleep(400);
});
await page.waitForTimeout(600);
await page.screenshot({ path: out, fullPage: true });
await browser.close();
console.log("saved", out);
