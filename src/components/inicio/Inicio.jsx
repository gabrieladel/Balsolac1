
import imgLogo from '../../assets/images/Logo-3.png';
import CarouselComponent from "../carousel/CarouselComponent";
import "./Inicio.css";


function Inicio() {
  return (
    <>
    <section id='inicio'>
        <div className="conteiner">
      <div className="conteiner-text">
        <img src={imgLogo} className="log" />
      
        <h3 >Balsamo Capilar sòlido con función Anticaspa/Anticaida </h3>
        <p>"El cabello es el lenguaje silencioso del corazón, el reflejo de nuestras emociones, el espejo de nuestra alma. 
          Nuestro producto es un poema de amor para tu cabello, un canto a la belleza que llevas dentro. 
          Con nosotros, tu cabello será el reflejo de tu esencia, el brillo de tu personalidad, el susurro de tus sueños". </p>
        
        <a href="#nosotros" className="btn btn-secondary btn-lg m-5">
          Conocenos màs 
        </a>
      </div>
      <div className="conteiner-2">

          <div className="App">
          <CarouselComponent />
        </div>
        
        </div>
      </div>
    
    </section>
   
    </>
  );
}

export default Inicio;

