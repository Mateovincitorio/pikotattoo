import React, { useEffect, useState } from 'react'
import CircularGallery from './CircularGallery.jsx'
import './trabajos.css'

const categories = [
  {
    id: 'realismo',
    title: 'Realismo',
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

const MOBILE_QUERY = '(max-width: 520px)'

const Trabajos = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [activeCategory, setActiveCategory] = useState(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_QUERY)
    const handleChange = event => setIsMobile(event.matches)

    handleChange(mediaQuery)
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange)
    } else {
      mediaQuery.addListener(handleChange)
    }

    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange)
      } else {
        mediaQuery.removeListener(handleChange)
      }
    }
  }, [])

  const openCategory = category => setActiveCategory(category)
  const closeModal = () => setActiveCategory(null)

  return (
    <div className='trabajos'>
      <h1 className='h1Work' id='gallery'>Gallery</h1>
      <p className='pWork'>(Drag the cards to left/right to see more!)</p>

      {isMobile ? (
        <>
          <div className='trabajos-mobile-menu'>
            <p className='pWork'>Selecciona una categoría para ver las imágenes.</p>
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
