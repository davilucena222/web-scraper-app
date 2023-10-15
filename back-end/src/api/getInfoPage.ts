import puppeteer, { Page } from 'puppeteer';

async function getProductData(selector: string, productUrl: string) {
  const browser = await puppeteer.launch({
    headless: true, 
  });

  const page: Page = await browser.newPage();
  await page.goto(productUrl);

  const response = await page.evaluate((selector) => {
    const tagHtmlElement = document.querySelector(selector);
    return tagHtmlElement ? tagHtmlElement.textContent : "";
  }, selector);

  await browser.close();

  return response;
}

async function productImageSource(selector: string, productURL: string) {
  const browser = await puppeteer.launch({
    headless: true, 
  });

  const page: Page = await browser.newPage();
  await page.goto(productURL);

  const response = await page.evaluate((selector) => {
    const tagHtmlElement = document.querySelector(selector);
    return tagHtmlElement ? tagHtmlElement.getAttribute("src") : "";
  }, selector);

  await browser.close();

  return response;
}

export async function productTitle(productURL: string) {
  const productTitleText = await getProductData("h1[data-productname]", productURL);

  return productTitleText;
}

export async function productPrice(productURL: string) {
  const productPriceDefault = await getProductData(".default-price span strong", productURL);

  return productPriceDefault;
}

export async function productImage(productURL: string) {
  const productImageSrc = await productImageSource("img.zoom", productURL);
  
  return productImageSrc;
}

export async function productDescription(productURL: string) {
  const productDescriptionText = await getProductData('p[itemprop="description"]', productURL);

  return productDescriptionText;
}