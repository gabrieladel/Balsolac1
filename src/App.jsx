import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header'
import Inicio from "./components/inicio/Inicio"
import Producto from "./components/producto/Producto"
import Emprende from "./components/emprende/Emprende"
import Contacto from "./components/contacto/Contacto"
import Footer from "./components/footer/Footer";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
      <Header />
      
      <Inicio />

      <Producto />
      
      <Contacto />
      <Emprende />
      <Footer />

      
    </>
  )
}

export default App
