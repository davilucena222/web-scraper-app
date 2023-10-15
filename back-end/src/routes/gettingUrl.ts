import { FastifyInstance } from "fastify";
import { z } from "zod";
import { productDescription, productImage, productPrice, productTitle } from "../api/getInfoPage";

class Product {
  constructor(public title: string, public price: string, public image: string, public description: string) {
    this.title = title;
    this.price = price;
    this.image = image;
    this.description = description;
  }
}

export async function gettingUrl(app: FastifyInstance) {
  app.post("/gettingUrl", async(req, reply) => {
    const bodySchema = z.object({
      productURL: z.string(),
    });

    const { productURL } = bodySchema.parse(req.body);

    const productTitleText = await productTitle(productURL);
    const productPriceDefault = await productPrice(productURL);
    const productImageSource = await productImage(productURL);
    const productDescriptionText = await productDescription(productURL);

    if (productTitleText !== null && productPriceDefault !== null && productImageSource !== null && productDescriptionText !== null) {
      const productInfo = new Product(
        productTitleText,
        productPriceDefault,
        productImageSource,
        productDescriptionText
      );

      return {
        productInfo
      };
    } else {
      return {
        erro: "Campo não encontrado, forneça outro link!"
      }
    }
  })
}