import React from 'react'
import '../styles/Index.css';

export default function Index() {

    const PHOTO_1 = 'images/plant_1.jpeg';
    const PHOTO_2 = 'images/plant_2.jpeg';
    const PHOTO_3 = 'images/plant_3.jpeg';
    const PHOTO_4 = 'images/plant_4.jpeg';
    const PHOTO_5 = 'images/plant_5.jpeg';
    const PHOTO_6 = 'images/plant_6.jpeg';

    const LOGO_1 = 'images/IMG_1.jpg';
    return (
        <div>
            <div className="container-main">
                <img src={LOGO_1} alt="" />
                
                <h1>El arte de las kokedamas, inspirado en la pasión japonesa por el cuidado y creacion de nuevas 
                    formas de representacion de la naturaleza  </h1>       
            </div>

                <hr/>
            <h1 className = "bestsellers"> Best Sellers </h1>
            <div className = "container-img">
                <div><img src={PHOTO_1} alt=""/><p>Arbol de Jade Kokedama</p><p className="price">€25</p></div>
                <div><img src={PHOTO_2} alt=""/><p>Ficus Ginseng Kokedama </p><p className="price">€39</p></div>
                <div><img src={PHOTO_3} alt=""/><p>Cham Kokedama</p><p className="price">€27</p></div>
                <div><img src={PHOTO_4} alt=""/><p>Esparraguera Kokedama</p><p className="price">€25</p></div>
                <div><img src={PHOTO_5} alt=""/><p>Orquidea blanca Kokedama</p><p className="price">€29</p></div>
                <div><img src={PHOTO_6} alt=""/><p>Marginata Kokedama</p><p className="price">€35</p></div>
            </div>
        </div>
    )
}
