import "./globals.css";
import { Navbar, Footer} from "@/components";
import { StateContext } from "../../context/stateContext";

export const metadata = {
  title: 'Seven Zero Five',
  description: 'E-commerce store for T-shirt, Sweaters, Tumblers, and Beanie',
  icons: {
    icon: "/Icon.png",
  }
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <StateContext>
      <body>
      <header>
        <Navbar></Navbar>
      </header>
      {children}
        <footer>
          <Footer></Footer>
        </footer>
        </body>
        </StateContext>
    </html>
  )
}
