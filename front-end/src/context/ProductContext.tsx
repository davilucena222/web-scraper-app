import { ReactNode, createContext, useContext, useState } from "react";
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

  async function getDataFromProductUrl(productUrl: string) {
    if (productUrl === "") {
      setError("Por favor, insira o link de um produto da Netshoes no input!");
      return;
    }

    try {
      const response = await api.post("/gettingUrl", {
        productURL: productUrl, 
      });

      setProductData(
        {
          title: response.data.title,
          price: response.data.price,
          image: response.data.image,
          description: response.data.description,
        }
      );
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
