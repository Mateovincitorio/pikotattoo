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
          src="/quiensoy.jpeg"
          alt="Pablo, tatuador"
          className='imgQuienSoy'
          ref={imgRef}
          onLoad={() => AOS.refresh()}
        />
        <div className="quienSoy-text " data-aos="fade-left">
          <p className='pQuienSoy'>I’m Piko, an Argentine tattoo artist with over seven years of experience.</p>
          <p className='pQuienSoy'>What started as a passion became my way of life. I specialize in Black & Grey, Patchwork, and Sticker styles, creating fully customized designs tailored to your body, your style, and the story you want to tell.
</p>
          <p className='pQuienSoy'>At Piko Tattoo Studio, you’ll find a professional, safe, and welcoming environment where every detail matters—from the first consultation to the final result.
</p>
          <p className='pQuienSoy'>Art on your skin. Always.</p>
          <button ref={btnRef} className="cta-button animate__animated animate__pulse"><a href="#contact" className="cta-link">Request a quote</a></button>
        </div>
      </div>
    </section>
  )
}







export default QuienSoy