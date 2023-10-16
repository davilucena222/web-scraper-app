import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { api } from "../utils/axios";

interface GlobalProductContextType {
  getDataFromProductUrl: (productUrl: string) => Promise<void>;
  productData: ProductData;
  error: string | null;
}

const initialContextValue: GlobalProductContextType = {
  getDataFromProductUrl: async () => {},
  productData: {} as ProductData,
  error: null,
};

export const GlobalProductContext = createContext(initialContextValue);

interface GlobalProductContextProviderProps {
  children: ReactNode;
}

interface ProductData {
  title: string;
  price: string;
  image: string;
  description: string;
}

export const GLobalProductContextProvider = ({ children }: GlobalProductContextProviderProps) => {
  const [productData, setProductData] = useState({} as ProductData);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedProductData = localStorage.getItem('productData');
    if (storedProductData) {
      const parsedProductData = JSON.parse(storedProductData);
      setProductData(parsedProductData);
    }
  }, []);

  async function getDataFromProductUrl(productUrl: string) {
    try {
      const response = await api.post("/gettingUrl", {
        productURL: productUrl,
      });

      if (response.data.productInfo.title === "" || response.data.productInfo.price === "" || response.data.productInfo.image === "" || response.data.productInfo.description === "") {
        alert("Você forneceu o link de um produto da Netshoes errado, por favor, forneça um link válido");

        window.location.href = "/";

        return;
      }

      const product = {
        title: JSON.stringify(response.data.productInfo.title),
        price: JSON.stringify(response.data.productInfo.price),
        image: JSON.stringify(response.data.productInfo.image),
        description: JSON.stringify(response.data.productInfo.description),
      }
      
      localStorage.setItem('productData', JSON.stringify(product));

      setProductData(product);
      
      setError(null);
    } catch (error) {
      setError("Erro ao enviar o link do produto!");
    }
  }

  return (
    <GlobalProductContext.Provider
      value={{
        getDataFromProductUrl,
        productData,
        error,
      }}
    >
      {children}
    </GlobalProductContext.Provider>
  );
};

export const useGlobalProductContext = () => {
  return useContext(GlobalProductContext);
};
