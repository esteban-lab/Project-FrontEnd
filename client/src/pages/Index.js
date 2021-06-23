import '../styles/Index.css';
import ShoppingCart from '../components/ShoppingCart';

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
            <ShoppingCart />
                
                <hr/>
            <h1 className = "bestsellers"> Best Sellers </h1>
            <div className = "container-img">
                <div><img src={PHOTO_1} alt=""/><a href="" className="linkonebyone"><p>Arbol de Jade Kokedama</p></a><p className="price">€25</p></div>
                <div><img src={PHOTO_2} alt=""/><a href="" className="linkonebyone"><p>Ficus Ginseng Kokedama </p></a><p className="price">€39</p></div>
                <div><img src={PHOTO_3} alt=""/><a href="" className="linkonebyone"><p>Cham Kokedama</p></a><p className="price">€27</p></div>
                <div><img src={PHOTO_4} alt=""/><a href="" className="linkonebyone"><p>Esparraguera Kokedama</p></a><p className="price">€25</p></div>
                <div><img src={PHOTO_5} alt=""/><a href="" className="linkonebyone"><p>Orquidea blanca Kokedama</p></a><p className="price">€29</p></div>
                <div><img src={PHOTO_6} alt=""/><a href="" className="linkonebyone"><p>Marginata Kokedama</p></a><p className="price">€35</p></div>
            </div>
        </div>
    )
}
