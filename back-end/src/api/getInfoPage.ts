import puppeteer, { Page } from 'puppeteer';

class ProductScraper {
  async getProductData(selector: string, productUrl: string) {
    const browser = await puppeteer.launch({
      headless: true,
    });

    const page: Page = await browser.newPage();
    await page.goto(productUrl);

    const response = await page.evaluate((selector) => {
      const tagHtmlElement = document.querySelector(selector);
      return tagHtmlElement ? tagHtmlElement.textContent : '';
    }, selector);

    await browser.close();

    return response;
  }

  async productImageSource(selector: string, productURL: string) {
    const browser = await puppeteer.launch({
      headless: true,
    });

    const page: Page = await browser.newPage();
    await page.goto(productURL);

    const response = await page.evaluate((selector) => {
      const tagHtmlElement = document.querySelector(selector);
      return tagHtmlElement ? tagHtmlElement.getAttribute('src') : '';
    }, selector);

    await browser.close();

    return response;
  }
}

class ProductInfo {
  private scraper: ProductScraper;

  constructor() {
    this.scraper = new ProductScraper();
  }

  async productTitle(productURL: string) {
    return this.scraper.getProductData('h1[data-productname]', productURL);
  }

  async productPrice(productURL: string) {
    return this.scraper.getProductData('.default-price span strong', productURL);
  }

  async productImage(productURL: string) {
    return this.scraper.productImageSource('img.zoom', productURL);
  }

  async productDescription(productURL: string) {
    return this.scraper.getProductData('p[itemprop="description"]', productURL);
  }
}

export const productInfo = new ProductInfo();