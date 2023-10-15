import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/theme/default";
import { GlobalStyle } from "./styles/global";
import { Input } from "./components/Input";
import { GLobalProductContextProvider } from "./context/ProductContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GLobalProductContextProvider>
        <GlobalStyle />
        <Input />
      </GLobalProductContextProvider>
    </ThemeProvider>
    
  )
}

