import "./Contacto.css";
import imgLogo from '../../assets/images/img4.jpeg';


function Contacto() {
  return (
    <>
      <div className="conteiner-cont">
       
          <div className="conteiner-cont2">
          <h1>Contacto</h1>
            <p >Por consultas sobre el estado de tu pedido, por favor escribí un mail indicando tu numero de orden (#) a:</p>
            <ul className="text">
            
              <li><b>Tel/Fax: </b> (0249) 4576551</li>
            
              <li><b>Correo Electronico: </b><a href="mailto:Atencionbalsolac@gmail.com"></a>Atenciónbalsolac@gmail.com</li>
            </ul>
            <div>
              <img src={imgLogo} className="logCont" />
            </div>

          </div>
        </div>
    </>
  );
}

export default Contacto;