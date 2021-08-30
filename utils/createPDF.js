const puppeteer = require("puppeteer");

const createpdf = async (url, pdfurl) => {
  // Browser actions & buffer creator
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  const pdf = await page.pdf({
    format: "letter",
    path: pdfurl,
  });
  await browser.close();
  // Return Buffer
  return pdf;
};

module.exports = createpdf;
