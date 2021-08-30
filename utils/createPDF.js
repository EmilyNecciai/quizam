const puppeteer = require("puppeteer");

const createpdf = async (url, pdfurl) => {
  // Browser actions & buffer creator
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
    ],
  });
  const page = await browser.newPage();
  await page.goto(url,{waitUntil: 'networkidle0'});
  const pdf = await page.pdf({
    format: "letter",
    path: pdfurl,
  });
  await browser.close();
  // Return Buffer
  return pdf;
};

module.exports = createpdf;
