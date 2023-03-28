import React from "react";
import photo1 from '../../img/soc.jpeg'
import photo2 from '../../img/profileImage.jpeg'
import instagram from '../../img/instagram.png'
import linkedin from '../../img/linkedin.png'
import qrCode from '../../img/qrCode.png'
import facebook from '../../img/facebook.png'
import socLogo from '../../img/soc-logo.png'
import footerImg from '../../img/footer-img.jpeg'
import './about.css';
import { Accordion } from "./Accordion";

const About = () => {

   return (
      <>
      {/* Header */}
      <div className="about-section">
         <div className="about-bgImage">
            <img src={photo1} alt="Selfie" loading="lazy"/>
         </div>
         <div className="about-profileImg">
            <img className="img-profile" src={photo2} alt="Selfie" loading="lazy"/>
         </div>
         <div className="about-title">
            <h1>Lic. Fernando Garduño</h1>
            <h2>Director APF Patrimonial MX</h2>
            <h3>Blindaje Patrimonial y de Seguros, Planes de Retiro, Vida y Gastos Médicos.</h3>
         </div>
      </div>
      {/* Social buttons */}
      <div className="social-buttons">
         <a href="https://wa.me/+525565391541?text=Me%20interesa%20recibir%20una%20que%20asesoría%20Profesional" target="_blank" rel="noreferrer">
            <button className="button-65">
                  Enviame mensaje
            </button>
         </a>
         <a href="mailto:fgarduno@socasesores.com?subject=INTERÉS EN UNA ASESORIA PROFESIONAL&amp;body=Hola Fernando, me interesa recibir una asesoría profesional, contáctame por favor, mi nombre es:

         Saludos y gracias." rel="noreferrer">
            <button className="button-65">
               Enviame un correo
            </button>
         </a>
         <a href="#codigo_qr">
            <button className="button-65">
               Codigo QR
            </button>
         </a>
      </div>

      <div className="title-accordion">
         <h1>Asesoria en:</h1>
      </div>
      
      <Accordion/>

      {/* FIN SECTION COLLAPSE */}

      <div className="social-media">
         <div className="social-media__container">
            <a href="https://www.facebook.com/profile.php?id=100083676925989" target="_blank" rel="noreferrer">
               <img src={facebook} alt="Facebook" loading="lazy" className="social-media__container_a"/>
            </a>
         </div>
         <div className="social-media__container">
            <a href="https://www.instagram.com/socapf/" target="_blank" rel="noreferrer">
               <img src={instagram} alt="Instagram" loading="lazy"/> 
            </a>
         </div>
         <div className="social-media__container">
            <a href="https://www.linkedin.com/in/soc-apf-patrimonial-mx-34705a247/" target="_blank" rel="noreferrer">
               <img src={linkedin} alt="Linkedin" loading="lazy"/> 
            </a>
         </div>
      </div>

      {/* Last section */}
      <div className="last-section">
         <div className="qr-container" id="codigo_qr">
            <img src={qrCode} alt="qr-code" loading="lazy" />
            <h2>ESCANEAR</h2>
         </div>
         <div className="footer-container">
            <img src={socLogo} alt="Logo SOC" loading="lazy"/>
         </div>
         <div className="footer-img">
            <img src={footerImg} alt="footer-logo" loading="lazy" />
         </div>
      </div>
      </>
   );
};

export default About;
