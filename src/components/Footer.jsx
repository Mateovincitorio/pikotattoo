import React from 'react'
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="contenedor-footer">
            <div className="redes">
                        <a href='https://www.instagram.com/studiopikotattoo/' target='_blank' rel='noopener noreferrer' className="wsp-link">
        <FontAwesomeIcon
                        icon={faInstagram}
                        style={{ color: 'rgb(208, 200, 92)' }}
                      />
        </a>
        <a href='https://wa.me/543518565461?text=Hey!, I want to know more about your services' target='_blank' rel='noopener noreferrer' className="wsp-link">
        <FontAwesomeIcon
                   icon={faWhatsapp}
                    style={{ color: 'rgb(208, 200, 92)' }}
                    
            />
        </a>
        
            </div>
        </div>

<span className="linea">Developed by: <a href="https://www.instagram.com/_vincitorio/" target="_blank" rel="noopener noreferrer" className="link">Mateo Vincitorio</a> CEL: <a href="https://wa.me/543435209850?text=Hey!, I want to make my website with you!" target="_blank" rel="noopener noreferrer" className="wsp-link">54 343 520 9850</a></span>


        <p>&copy; {new Date().getFullYear()} Pikotattoo. All rights reserved.</p>
      </footer>
    </>
    )
}

export default Footer