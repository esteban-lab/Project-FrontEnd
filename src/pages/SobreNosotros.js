import React from 'react'
import '../styles/SobreNosotros.css';
import ShoppingCart from '../components/ShoppingCart';

export default function SobreNosotros() {
    return (
        <div className="containerNosotros">
            <ShoppingCart/>
            <h1 className="nosotrosTitle">Sobre Nosotros</h1>
            <p>Piece of Nature, nace de la idea de llevar o elevar la simplicidad y belleza de las plantas naturales a otro nivel, una combinación de naturaleza con un poco de ingenio
             y arte para revalorar lo natural y exponer las maravillas que se pueden crear con ellas.
            </p>
            <div className="imageNosotros" ><img  src="../images/koketaller.jpeg" alt=""/></div>
            <p>En nuestro país el chip por lo ecológico se encuentra con un impulso sin precedentes, el consumo por productos naturales esta en auge y Piece of nature será parte de ese proceso de cambio desde la perspectiva esencial de estar rodeados  e inmergidos en un mundo mas natural,
                 proporcionando el conocimiento de la diversidad natural moderna y poder tenerla al alcance.
            </p>
        </div>
    )
}
