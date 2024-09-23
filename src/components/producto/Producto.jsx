import "./Producto.css";
import VideoPlayer  from "../videoPlayer/VideoPlayer";

function Producto() {
    return (
      <>
      
            <section id='producto'> 
            <div className="conteiner">
                <div className='info'>
                 <h1> ¿Por qué comprar Balsolac?</h1>
                 <p>
                     Tenemos responsabilidad ambiental.</p>
                     <li>
                    <ol>•Ecofriemdly.</ol>
                    <ol>•No está testado en animales.</ol>
                    <ol>•Proporciona brillo e hidrata.</ol>
                    <ol>•Funcion anticaspa/anti caida.</ol>
                    </li>
<br />
                 <p>Balsolac es un bálsamo capilar elaborado a base de lactosuero. 
Hidrata.
Controla la caida del cabello y la caspa.
Estimula el crecimiento.</p>
                </div>
                <VideoPlayer />
                </div>

             </section>
    
      </>
    );
  }
  
  export default Producto;
  
  