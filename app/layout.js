import '../styles/globals.css'
import { Navigation } from './components/Navigation'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title> My frist App in Next 13 </title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}

/* children -props especial de react :  contiene todo lo que se renderiza hacia abajo de nuestras rutas */
