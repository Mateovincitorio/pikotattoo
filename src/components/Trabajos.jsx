import React from 'react'
import CircularGallery from './CircularGallery.jsx'
import './trabajos.css'


const Trabajos = () => {
  return (
    <div className='trabajos'>
      <h1 className='h1Work' id="gallery">Gallery</h1>
      <p className="pWork" >(Drag the cards to left/right to see more!)</p>
      <div className="realismo">
        <h2 className="h2Work">Realismo</h2>
      <CircularGallery key="realismo" items={[
        { image: '/realismo1.JPG'},
        { image: '/realismo2.JPG'},
        { image: '/realismo3.JPG'},
        { image: '/realismo4.JPG'},
        { image: '/realismo5.JPG'}
      ]}/>
      </div>

      <div className="bg">
        <h2 className="h2Work">Black and Grey</h2>

     <CircularGallery key="bg" items={[
       { image: '/bg1.jpg'},
       { image: '/bg2.jpg'},
       { image: '/bg3.jpg'},
       { image: '/bg4.JPG'},
       { image: '/b5.JPG'},
        { image: '/bg6.JPG'},
        { image: '/bg7.jpg'},
        { image: '/bg9.jpg'},

      ]}/>
      </div>

      <div className="patch">
        <h2 className="h2Work">PatchWork</h2>
     <CircularGallery key="patch" items={[
       { image: '/patch1.JPG'},
       { image: '/patch2.PNG'},
       { image: '/patch3.PNG'},
       { image: '/patch4.PNG'},
       { image: '/patch5.jpg'}
      ]}/>
      </div>

<div className="color">
        <h2 className="h2Work">Color</h2>
     <CircularGallery key="color" items={[
       { image: '/color1.PNG'},
       { image: '/color2.jpg'},
       { image: '/color3.jpg'},
       { image: '/color4.jpg'}
      ]}/>
      </div>

<div className="sticker">
        <h2 className="h2Work">Sticker</h2>
     <CircularGallery key="sticker" items={[
       { image: '/sticker1.PNG'},
       { image: '/sticker2.PNG'},
       { image: '/sticker3.PNG'},
       { image: '/sticker4.PNG'},
      { image: '/sticker5.PNG'},
        { image: '/sticker6.PNG'},
        { image: '/sticker7.PNG'}

      ]}/>
      </div>

    </div>
  )
}

export default Trabajos