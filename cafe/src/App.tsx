import { BrowserRouter } from "react-router-dom"
import { Router } from "./router"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/theme/DefaultTheme"
import { GlobalStyle } from "./styles/global"
import { CartContextProvider } from "./contexts/CartContext"


function App() {

  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CartContextProvider>
            <Router />
          </CartContextProvider>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </>
  )
}

export default App
