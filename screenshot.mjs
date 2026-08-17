import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.setViewportSize({ width: 1280, height: 1080 });
  
  console.log("Navigating to http://localhost:5173/filters...");
  await page.goto('http://localhost:5173/filters', { waitUntil: 'networkidle' });
  
  const screenshotPath = '/home/sid/.gemini/antigravity-ide/brain/276ca0b1-10b2-4369-b281-ba64f498c673/filters_react_screenshot.png';
  console.log(`Saving screenshot to ${screenshotPath}...`);
  
  await page.screenshot({ path: screenshotPath, fullPage: true });
  
  await browser.close();
  console.log("Screenshot complete.");
})();
