import React from 'react'
import './assets/styles.css'
import './assets/response.css'

export default function App() {
  return (
    <section id="header">
      <div className="header__left">
        <h1 className="title_header">nike</h1>
        <span className="slogan_header">just do it
        <img className="logo_Nike" src="./images/logo_nike.png" alt="/" />
        </span>
      </div>
      <div className="header__right">
        <img className="image_banner" src="./images/nike2.png" alt="/" />
      </div>
      <img className="shoes__panner" src="./images/shoes.png" alt="/" />
      <div className="contact__shoes">
        <div>
          <img className="icon_Shoes animation_1 active" src="./images/icon_shoes.png" alt="/" />
          <img className="icon_Shoes animation_2" src="./images/icon_shoes.png" alt="/" />
          <img className="icon_Shoes animation_3" src="./images/icon_shoes.png" alt="/" />
          <img className="icon_Shoes animation_4" src="./images/icon_shoes.png" alt="/" />
        </div>
        <div className="color_Shoes">
          <div className="color color_gray" />
          <div className="color _orange" />
          <div className="color _perple" />
          <div className="color _red" />
        </div>
      </div>
    </section>
  );
}

