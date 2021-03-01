import React, { useState } from 'react'
import './assets/styles.css'
import './assets/response.css'

import { DATA_SHOES } from './mock'


export default function App() {
  const [dataShoes] = useState(DATA_SHOES)
  const [itemShoes, setItemShoes] = useState(dataShoes[0])
  console.log("itemShoes:", itemShoes);
  console.log("data Shoes:", DATA_SHOES);
  const onSelectedShoes = (items) => {
    setItemShoes(items)
  }


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
      <img className="shoes__panner" src={itemShoes.picture_shoes} alt="/" />
      <div className="contact__shoes">
        <div>
          <img className="icon_Shoes animation_1 active" src="./images/icon_shoes.png" alt="/" />
          <img className="icon_Shoes animation_2" src="./images/icon_shoes.png" alt="/" />
          <img className="icon_Shoes animation_3" src="./images/icon_shoes.png" alt="/" />
          <img className="icon_Shoes animation_4" src="./images/icon_shoes.png" alt="/" />
        </div>
        <div className="color_Shoes">
          {
            dataShoes && dataShoes.map((item, index) => {
              return (
                <div key={index} onClick={() => { onSelectedShoes(item) }} className="color" style={{ backgroundColor: `${item.color}` }}>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}

