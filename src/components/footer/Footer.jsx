import "./Footer.css";

import React from 'react';

function Footer() {
  return (
    <>
    <footer className="footer">
      <div className="footer-content">
        
        <ul className="social-links">
      
            <ul className="iconos">
              <a href="https://www.instagram.com/balsolac_/" target="_blanck" title="Instagram"><i className="bi bi-instagram"></i></a>
               <a href= "https://wa.me/+5492494576551" target="_blanck" title="Whatsapp"><i className="bi bi-whatsapp"></i></a>
               <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=Atenciónbalsolac@gmail.com" target="_blanck" title="Gmail"><i className="bi bi-envelope-at"></i></a>
            </ul>
               <h4>Encontranos en:</h4>
            <div className="ubicacion text-center  p-3 ">
              <i className="bi bi-geo-alt"></i>
      
              <a className=' href="#" '>
                {" "}
                Parque Los Robles en el acceso a la Base Áerea,Cordenadas:-37.280248,-59.211907(7000), Tandil, Provincia de Buenos Aires
              </a>
              <p>&copy; 2024 Balsolac. Todos los derechos reservados.</p>
            </div>
        </ul>
      </div>
    </footer>
    
      </>
  );
}
export default Footer;
