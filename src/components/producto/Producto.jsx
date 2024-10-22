import "./Producto.css";
import VideoPlayer from "../videoPlayer/VideoPlayer";
import ModalInst from "../modal/ModalContent";

function Producto() {
  return (
    <>

     
        <div className="conteiner-producto">
          <div className='info'>
          <h1>¿Por qué comprar Balsolac?</h1>
     
        <h3>Tenemos responsabilidad ambiental.</h3>
            <ul>
              <li>Ecofriemdly.</li>
              <li>No está testado en animales.</li>
              <li>Proporciona brillo e hidrata.</li>
              <li>Funcion anticaspa/anti caida.</li>
            </ul>

            
            <div className="text-producto">
            <h3>Balsolac es un bálsamo capilar elaborado a base de lactosuero.</h3>
              <ul>
                <li>Hidrata.</li>
                <li>Controla la caida del cabello y la caspa.</li>
                <li>Estimula el crecimiento.</li>
                </ul>
              </div>
            <div>
              <ModalInst />
            </div>
          </div>
          <VideoPlayer />
        </div>

      

    </>
  );
}

export default Producto;

