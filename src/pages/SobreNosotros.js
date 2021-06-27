import React from 'react'
import '../styles/SobreNosotros.css';
import ShoppingCart from '../components/ShoppingCart';

export default function SobreNosotros() {
    return (
        <div className="containerNosotros">
            <ShoppingCart/>
            <h1 className="nosotrosTitle">Nosotros</h1>
        </div>
    )
}
