
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/header/Header'
import Inicio from "./components/inicio/Inicio"
import Producto from "./components/producto/Producto"
import Emprende from "./components/emprende/Emprende"
import Contacto from "./components/contacto/Contacto"
import Footer from "./components/footer/Footer";


function App() {


  return (
    <>

      <Header />
      <main className='conteiner'>
        <section id="inicio" >
          <Inicio />
        </section>
        <section id="producto" >
          <Producto />
        </section>
        <section id="contacto" >
          <Contacto />
        </section>
        <section id="emprende" >
          <Emprende />
        </section>
      </main>
      <Footer />


    </>
  )
}

export default App
