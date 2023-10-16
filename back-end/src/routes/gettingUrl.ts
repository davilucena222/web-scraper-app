import { FastifyInstance } from "fastify";
import { z } from "zod";
import { productInfo } from "../api/getInfoPage";

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

    const productTitleText = await productInfo.productTitle(productURL);
    const productPriceDefault = await productInfo.productPrice(productURL);
    const productImageSource = await productInfo.productImage(productURL);
    const productDescriptionText = await productInfo.productDescription(productURL);

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
      return reply.status(400).send({ error: "Campo não encontrado, por favor, forneça outro link!" });
    }
  })
}