import { useState } from "react";
import { Header } from "../Header";
import { useGlobalProductContext } from "../../context/ProductContext";
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { Button, Container, ContainerForm, InputContent } from "./styles";
import LoadingSpin from "react-loading-spin";

export function Input() {
  const [productUrl, setProductUrl] = useState<string>("");
  const { getDataFromProductUrl } = useGlobalProductContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function handleInputTextChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setProductUrl(value);
  }

  const handleSendText = async () => {
    setLoading(true);

    try {
      const pattern = /^https:\/\/www\.netshoes\.com\.br\/([\w-]+)/;
      if (!pattern.test(productUrl)) {
        throw new Error('A URL fornecida não pertence a um produto específico da Netshoes, por favor, forneça uma URL válida!');
      }
      
      await getDataFromProductUrl(productUrl);
      setTimeout(function() {}, 5000);
      
      navigate("/productInfo");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <Header />
      
      <Container>
        <ContainerForm action="">
          <InputContent 
            type="text" 
            value={productUrl}
            onChange={handleInputTextChange}
            placeholder="Cole o link do produto aqui"
            disabled={loading}
          />
        </ContainerForm>

        <Button disabled={productUrl === "" || loading} onClick={handleSendText}>
          {loading ? <LoadingSpin size={"35px"} primaryColor="#1a1a1a" /> : "Pesquisar"} 
        </Button>
      </Container>
    </>
  )
}
