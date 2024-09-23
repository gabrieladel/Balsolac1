import "./Contacto.css";
import imgLogo from '../../assets/images/Logo-3.png';
import ImageCard from "../imageCard/ImageCard"
 function Contacto() {
     return (
      <>
        <section id="contacto">
        <h1>Contacto</h1>
          <div className="conteiner-cont">
          <div className="conteiner-cont2">
          <p>Por consultas sobre el estado de tu pedido, por favor escribí un mail indicando tu numero de orden (#) a:</p>
          <ul>
            <li><b>Domicilio: </b>Parque Los Robles en el acceso a la Base Áerea,Cordenadas:-37.280248,-59.211907(7000) / Tandil(Bs.As.)</li>
            <li></li>
            <li><b>Tel/Fax: </b> (0249) 4576551</li>
            <li></li>
            <li><b>Correo Electronico: </b><a href="mailto:Atencionbalsolac@gmail.com"></a>Atenciónbalsolac@gmail.com</li>
          </ul>
          </div>
          <div className="conteiner-cont2">
                <div>
                <img src={imgLogo} className="log" />
                </div>

          </div>
          </div>
        </section>
      </>
     );
 }

 export default Contacto;