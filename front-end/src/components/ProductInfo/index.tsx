import { useGlobalProductContext } from "../../context/ProductContext";
import { Container, PageTitle, PriceNumber, ProductDescription, ProductPrice, ProductTitle, Section } from "./styles";

export function ProductInfo() {
  const { productData } = useGlobalProductContext();

  const storedProductData = localStorage.getItem('productData');
  const productFormattedData = storedProductData ? JSON.parse(storedProductData) : {
    title: productData.title.replace(/"/g, ''),
    price: productData.price.replace(/"/g, ''),
    image: productData.image.replace(/"/g, ''),
    description: productData.description.replace(/"/g, ''),
  };

  return (
    <Container>
      <PageTitle>Dados do produto</PageTitle>

      <Section>
        <ProductTitle>{productFormattedData.title.replace(/"/g, '')}</ProductTitle>
        <img src={productFormattedData.image.replace(/"/g, '')} alt={`Imagem do produto ${productFormattedData.title}`} />
      </Section>

      <ProductPrice>
        <PriceNumber>{productFormattedData.price.replace(/"/g, '')} Reais</PriceNumber>
      </ProductPrice>

      <ProductDescription>{productFormattedData.description.replace(/"/g, '')}</ProductDescription>
    </Container>
  )
}
