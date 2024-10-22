import "./Emprende.css";
import ContactForm from "../formComponent/FormComponent"
import background from '../../assets/images/emprender.png';

 function Emprende() {
     return (
      <>
     
      <div className="conteiner-1">
      <h1>Emprende con nosotros</h1>

      <p>Si tenes un punto de venta y querés ofrecer Balsolac, completa el formulario para que nos contactemos a la brevedad </p>
      <div className="formulario">
        <ContactForm />
        </div>
        </div>
      
      </>
     );
 }

 export default Emprende;