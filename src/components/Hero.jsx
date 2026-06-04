import React, { useEffect, useRef } from 'react'
import './hero.css'
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Hero = () => {
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

    return () => {
      clearTimeout(timeoutRef.current);
      clearInterval(intervalRef.current);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="hero" id="hero">
        <div className="contenedor">
        <h1 className="title">Art in your Body</h1>
        <p className="subtitle">Professional and personalized body art</p>
        <div className="btns">  
        <button ref={btnRef} className="cta-button animate__animated animate__pulse"><a href="#contact" className="cta-link">Contact me</a></button>
        <button className="cta-button animate__animated animate__pulse no-bg"><a href="#gallery" className="cta-link">See my gallery</a></button>
        </div>
        </div>
        <div className="imagen">
          <img src='/portadaVert.png' alt="Portada" />
        </div>
            <button type="button" className="whatsapp-btn"><a href='https://wa.me/543435209850?text=Hey!, I want to know more about your services' target='_blank' rel='noopener noreferrer' className="wsp-link"><FontAwesomeIcon icon={faWhatsapp} size='xl' className="wsp-icon" /></a></button>
      </div>
    </>
  )
}

export default Hero