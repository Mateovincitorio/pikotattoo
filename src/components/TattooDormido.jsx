import React, { useEffect, useRef } from 'react'
import './tattooDormido.css'
import AOS from "aos";
import "aos/dist/aos.css";
import './QuienSoy.css'

const TattooDormido = () => {
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
          data-aos="fade-left"
          src="/tatuajedormido.JPEG"
          alt=""
          className='imgQuienSoy ladoderecho'
          ref={imgRef}
          onLoad={() => AOS.refresh()}
        />
        <div className="quienSoy-text " data-aos="fade-right">
          <p className='pQuienSoy'>Tattooing Under Sedation</p>

<p className='pQuienSoy'>Tattooing under sedation is exactly what it sounds like: the client goes to sleep, and the work begins.

Everything takes place in a medical clinic, with doctors monitoring every moment — breathing, heart rate, and oxygen levels. The client remains safe, comfortable, and completely unaware of any pain.

Meanwhile, the artists work without interruptions, without breaks, and without the body reacting to discomfort. That changes everything. Pieces that would normally require multiple sessions can be completed in a single sitting. The level of detail, scale, and overall quality of the result is simply different.

Medicine takes care of the body. Art takes care of the rest.

It’s a collaboration between two worlds that rarely intersect, and the outcome speaks for itself.

</p>

          <button ref={btnRef} className="cta-button animate__animated animate__pulse"><a href="#contact" className="cta-link">Request a quote</a></button>
        </div>
      </div>
    </section>
  )
}







export default TattooDormido