import React, { useEffect, useState } from 'react'
import CircularGallery from './CircularGallery.jsx'
import './trabajos.css'

//array para mapear las imagenes
const categories = [
  {
    id: 'realismo',
    title: 'Realism',
    images: [
      { image: '/realismo1.JPG' },
      { image: '/realismo2.JPG' },
      { image: '/realismo3.JPG' },
      { image: '/realismo4.JPG' },
      { image: '/realismo5.JPG' },
      { image: '/bg1.jpg' },
      { image: '/bg2.jpg' },
      { image: '/bg3.jpg' },
      { image: '/bg4.JPG' },
      { image: '/b5.JPG' },
      { image: '/bg6.JPG' },
      { image: '/bg7.jpg' },
      { image: '/bg9.jpg' }
    ]
  },
  {
    id: 'color',
    title: 'Color',
    images: [
      { image: '/patch1.JPG' },
      { image: '/patch2.PNG' },
      { image: '/patch3.PNG' },
      { image: '/patch4.PNG' },
      { image: '/patch5.jpg' },
      { image: '/color1.PNG' },
      { image: '/color2.jpg' },
      { image: '/color3.jpg' },
      { image: '/color4.jpg' },
      { image: '/sticker1.PNG' },
      { image: '/sticker2.PNG' },
      { image: '/sticker3.PNG' },
      { image: '/sticker4.PNG' },
      { image: '/sticker5.PNG' },
      { image: '/sticker6.PNG' },
      { image: '/sticker7.PNG' }
    ]
  },
  {
    id: 'fineline',
    title: 'FineLine',
    images: [
      { image: '/fineline1.JPG' },
      { image: '/fineline4.JPG' },
      { image: '/fineline6.JPG' },
      { image: '/fineline7.JPG' }
    ]
  }
]
//variable que dice cual es el tamaño de pantalla para mobile
const MOBILE_QUERY = '(max-width: 520px)'

const Trabajos = () => {
  //seteo el estado de si es mobile o no
  const [isMobile, setIsMobile] = useState(false)
  //seteo si la categoria esta activa
  const [activeCategory, setActiveCategory] = useState(null)

  useEffect(() => {
    //comprueba si el ancho de la ventana es menor o igual a 520px.
    const mediaQuery = window.matchMedia(MOBILE_QUERY)
    //evento que maneja el cambio de estado de isMobile (Actualiza el estado isMobile con ese valor mediante setIsMobile. a travez de la propiedad matches de event)
    const handleChange = event => setIsMobile(event.matches)

    handleChange(mediaQuery)
    //si el addEventListener existe ( el tamaño es menos o igual a 520 px), agrega un addeventlistener con evento 'change'
    if (mediaQuery.addEventListener) {
      //change es el evento
      mediaQuery.addEventListener('change', handleChange)
    } else {
      //Si el navegador NO soporta addEventListener en media queries, entonces usa el método viejo addListener
      mediaQuery.addListener(handleChange)
    }

    return () => {
      //si el addEventListener existe ( el tamaño es mayor a 520 px), elimina el addeventlistener con evento 'change'
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange)
      } else {
        //Si el navegador NO soporta addEventListener en media queries, entonces usa el método viejo removeListener
        mediaQuery.removeListener(handleChange)
      }
    }
    //se renderiza una sola vez al montar el componente
  }, [])
  //“Recibo una categoría y la guardo como la categoría activa.”
  const openCategory = category => setActiveCategory(category)
  //“Cerrar el modal eliminando la categoría activa.”
  const closeModal = () => setActiveCategory(null)

  useEffect(() => {
    const className = 'modal-open'

    if (activeCategory) {
      //si activeCategory es true, “Agrega una clase CSS al <body> del documento.” que seria "modal-open"
      document.body.classList.add(className)
    } else {
      //si ya existe, la saca
      document.body.classList.remove(className)
    }

    return () => {
      document.body.classList.remove(className)
    }
    //se renderiza cuando cambia el estado de activeCategory
  }, [activeCategory])

  return (
    <div className='trabajos'>
      <h1 className='h1Work' id='gallery'>Gallery</h1>
      <p className='pWork drag-cards'>(Drag the cards to left/right to see more!)</p>

      {isMobile ? (
        <>
          <div className='trabajos-mobile-menu'>
            <p className='pWork'>Select a category to see the images.</p>
            <div className='trabajos-mobile-menu-list'>
              {categories.map(category => (
                <button
                  key={category.id}
                  type='button'
                  className='trabajos-category-button'
                  onClick={() => openCategory(category)}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {activeCategory && (
            <div className='trabajos-modal-backdrop' onClick={closeModal}>
              <div className='trabajos-modal-content' onClick={event => event.stopPropagation()}>
                <button className='trabajos-modal-close' type='button' onClick={closeModal}>
                  ×
                </button>
                <h2 className='h2Work'>{activeCategory.title}</h2>
                <div className='trabajos-modal-images'>
                  {activeCategory.images.map((item, index) => (
                    <img
                      key={`${activeCategory.id}-${index}`}
                      src={item.image}
                      alt={`${activeCategory.title} ${index + 1}`}
                    />
                  ))}
                </div>
                <button className='trabajos-modal-action cta-button animate__animated animate__pulse no-bg' type='button' onClick={closeModal}>
                  Close gallery
                </button>
              </div>
            </div>
          )}
        </>
      ) : (
        categories.map(category => (
          <div className={category.id} key={category.id}>
            <h2 className='h2Work'>{category.title}</h2>
            <CircularGallery key={category.id} items={category.images} />
          </div>
        ))
      )}
          

    </div>
  )
}

export default Trabajos
