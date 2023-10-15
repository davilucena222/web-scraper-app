import { useState } from "react";
import { Header } from "../Header";
import { useGlobalProductContext } from "../../context/ProductContext";

export function Input() {
  const [productUrl, setProductUrl] = useState<string | "">("");
  const { getDataFromProductUrl, productData } = useGlobalProductContext();

  console.log("LINK DA PÁGINA DO PRODUTO: ", productUrl);

  function handleInputTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setProductUrl(value);
  }

  async function handleSendText() {
    await getDataFromProductUrl(productUrl);
    
    console.log("FETCH DAS INFORMAÇÕES DO PRODUTO: ", productData);
  }
  
  return (
    <div>
      <Header />
      
      <form action="">
        <input 
          type="text" 
          value={productUrl}
          onChange={handleInputTextChange}
          placeholder="Cole o link do produto aqui"
        />
      </form>

      <button onClick={handleSendText}>Pesquisar</button>
    </div>
  )
}