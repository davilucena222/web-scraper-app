import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Input } from "./components/Input";
import { GLobalProductContextProvider } from "./context/ProductContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductInfo } from "./components/ProductInfo";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <GLobalProductContextProvider>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<Input />} />
            <Route path="/productInfo" element={<ProductInfo />} />
          </Routes>
        </GLobalProductContextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
