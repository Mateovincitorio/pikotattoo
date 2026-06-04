import React, { useEffect, useRef } from 'react'
import './QuienSoy.css'
import AOS from "aos";
import "aos/dist/aos.css";

const QuienSoy = () => {
  const btnRef = useRef(null);
    const intervalRef = useRef(null);
    const timeoutRef = useRef(null);
  
    const triggerAnimation = () => {
      if (btnRef.current) {
        btnRef.current.classList.remove('animate__pulse');
        // reinicia la animación
        void btnRef.current.offsetWidth;
        btnRef.current.classList.add('animate__pulse');
      }
    };
  
    useEffect(() => {
      const btn = btnRef.current;
      if (!btn) return;
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            timeoutRef.current = setTimeout(() => {
              triggerAnimation();
              intervalRef.current = setInterval(() => {
                triggerAnimation();
              }, 2000);
            }, 1500);
          } else {
            clearTimeout(timeoutRef.current);
            clearInterval(intervalRef.current);
          }
        });
      });
  
      observer.observe(btn);
    }, []);
  const imgRef = useRef(null);

  useEffect(() => {
    AOS.init({ once: false, mirror: true, duration: 1000 });
    AOS.refresh();

    const handleRefresh = () => AOS.refresh();
    window.addEventListener('load', handleRefresh);
    window.addEventListener('resize', handleRefresh);

    return () => {
      window.removeEventListener('load', handleRefresh);
      window.removeEventListener('resize', handleRefresh);
    };
  }, []);

  return (
    <section className="quienSoy" id='about'>
      <div className="quienSoy-body">
        <img
          data-aos="fade-right"
          src="/imgwhoami.png"
          alt="Pablo, tatuador"
          className='imgQuienSoy'
          ref={imgRef}
          onLoad={() => AOS.refresh()}
        />
        <div className="quienSoy-text " data-aos="fade-left">
          <p className='pQuienSoy'>Soy Pablo, tatuador apasionado por convertir ideas y recuerdos en tatuajes con significado. Cada diseño nace de una conversación cercana, cuidando cada detalle para que la pieza sea una expresión auténtica de tu historia.</p>
          <p className='pQuienSoy'>Mi estilo abarca desde líneas limpias y minimalistas hasta trabajos detallados y realistas. Con experiencia y dedicación constante, ofrezco un servicio profesional, personalizado y cálido para quienes quieren llevar su historia en la piel.</p>
          <button ref={btnRef} className="cta-button animate__animated animate__pulse"><a href="#contact" className="cta-link">Contact me</a></button>
        </div>
      </div>
    </section>
  )
}

export default QuienSoy