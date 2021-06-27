import React from 'react';
import "../styles/Footer.css";

export default function Footer() {
    const LOGO_1 ='images/logo_1.png';
    return (
        <div>
        <img src="" alt=""/>
            <div className = "footer">
                    <a href="#">Contacto</a>
                    <a href="#">Condiciones de Uso</a>
                    <a href="#">Politicas de Privacidad</a>
                    <a href="#">Aviso legal</a>
                    <a href="#">Talleres</a>
                    <img src={LOGO_1} alt=""/>
            </div>
        </div>
    )
}
