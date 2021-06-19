import React from 'react' //Importar siempre react
import Camila from '../utils/images/PERFIL.jpeg'
import Whats from '../utils/images/whatsapp.svg'
import Email from '../utils/images/email.svg'
import Piano from '../utils/images/piano.jpg'
import Acuarela from '../utils/images/Acuarela.jpg'

const Principal = () => { //-----------------COMPONENTE DE ESTUDIOS-----------------
    return (
             //CONTENEDOR PRINCIPAL
        <div className="principal">
              <div className="dentro">
              <div className="camilita"> 
              <img src={Camila} alt="Hola soy Camila" />
              </div>
              <h1 className="nombre">JAHAIRA CAMILA CORTÉS GONZÁLEZ</h1>
              <h2>Desarrolladora FrontEnd junior</h2>
              <h1>SOBRE MÍ</h1>
              <h2> Me considero una persona proactiva, con alto sentido de la responsabilidad, honestidad y dispuesta a aprender cada vez más. Con grandes espectativas de crecimiento para poder llegar a ser una gran profesional. Actualmente cursando una beca en Procesamiento y digitación de Datos en la institución Kuepa con enfoque en desarollo FrontEnd. Con conocimiento en HTML5, CSS3, JavaScript y React JS (Framework) </h2>
              <h1>INFO. CONTACTO</h1>
              <img className="hola" src={Whats} alt="Whatsapp" />
              <h2 className="numero">3219592388</h2>
              <img className="hola" src={Email} alt="Correo" />
              <h2 className="numero1">   jahairagonzalez8@gmail.com</h2>
              <h2 className="ciudad">Bogotá, Colombia.</h2>
              </div>
              <div className="dentro2">
                  <div className="rosita">
                  <div className="xd"> <b> ESTUDIOS </b></div>
                  </div>
                  <ul>
                  <li> <h2 className="estudios"> Bachillerato - Colegio La Gaitana </h2> </li>
                  <li> <h2 className="estudios"> Técnico Procesamiento y digitación de Datos - Kuepa </h2> </li>
                  </ul>
                  <div className="rosita">
                  <div className="xd"> <b> HABILIDADES </b></div>
                  </div>
                  <ul className="ul2">
                  <li> <h2 className="estudios"> HTML5 </h2> </li>
                  <li> <h2 className="estudios"> CSS3 </h2> </li>
                  <li> <h2 className="estudios"> JavaScript </h2> </li>
                  <li> <h2 className="estudios"> React </h2> </li>
                  <li> <h2 className="estudios"> Adaptación </h2> </li>
                  <li> <h2 className="estudios"> Motivación </h2> </li>
                  <li> <h2 className="estudios"> Trabajo en equipo  </h2> </li>
                  <li> <h2 className="estudios"> Positivismo </h2> </li>
                  </ul>
                  <div className="rosita">
                  <div className="xd"> <b> INTERESES </b></div>
                  </div>
                  <ul className="ul2">
                  <li> <img className="images" src={Piano} alt="Piano" /> </li>
                  <li>  <img className="images" src={Acuarela} alt="Acuarela" /> </li>
                  </ul>
              </div>
        </div>

     )
}

export default Principal;