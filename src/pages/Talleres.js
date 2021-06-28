import React from 'react'
import ShoppingCart from '../components/ShoppingCart';
import '../styles/Taller.css';

export default function Talleres() {
    return (
        <div className="container-talleres">
            <ShoppingCart/>
            <h1>Talleres</h1>
            <p>En Piece of Nature compartir nuestros conocimientos es indispensable para 
                promover el arte natural, por eso hemos creado un espacio de aprendizaje
                para enseñar las tecnicas aplicadas a las plantas y asi convertirlas en Kokedamas </p>
                <div className="imageTaller" ><img  src="../images/koketaller2.jpeg" alt=""/></div>
            <p>Si estas interesado en realizar un taller con nosotros ponte en contacto a la siguiente dirección de correo electronico: pieceofnature@pieceofnature.com</p>
            <p>O a nuestras redes sociales:</p>
        </div>
        
    )
}
