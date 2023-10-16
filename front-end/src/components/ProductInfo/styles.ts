import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
  flex-direction: column;
  padding: 0 3rem;
  margin: 0 auto;

  width: 800px;
`;

export const PageTitle = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ProductTitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const ProductPrice = styled.p`
  margin-top: 1rem;
  margin-bottom: 3rem;
`;

export const PriceNumber = styled.p`
  font-size: 1.2rem;
`;

export const ProductDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;