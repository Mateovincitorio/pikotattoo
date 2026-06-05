import React, { useEffect, useState } from 'react'
import './contacto.css'

const Contacto = () => {

    const handleSubmit = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const size = e.target.size.value;
        const estilo = e.target.style.value;
        const mensaje = e.target.message.value;

        const message = `
         Hey! I wanted to know how much will it cost me to get a tattoo, here are the details and my information:

        Name: ${name} 

        Style: ${estilo}

        Size of Tattoo: ${size} cm

        Message: ${mensaje}
        `
        const url = `https://wa.me/543518565461?text=${encodeURIComponent(
    message
  )}` 
    window.open(url, "_blank");

    }
    
  return (
    <>
    <section id='contact'>
            <form className='formulario' onSubmit={handleSubmit}>
                <h2>I want my quote</h2>
  <input name="name" type="text" placeholder='Name' required />
  <input name="size" type="number" placeholder='Tattoo size (cm)' required />
  <input name="style" type="text" placeholder='Tattoo style' required />
  <textarea name="message" placeholder='Message' required />
  <button type="submit">Submit</button>
</form>

        </section>
    </>
)
}

export default Contacto