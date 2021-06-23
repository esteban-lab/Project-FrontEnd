import React from 'react'
import '../styles/Faqs.css';

export default function Faqs() {
    return (
        <div className="containerFaqs">
            <h1>Preguntas frecuentes</h1>

            <hr/>

            <h2 className="faqs-title">ACERCA DE LA KOKEDAMA Y LAS PLANTAS</h2>
            <div className="imageFaqs" ><img  src="../images/kokedama1.jpeg" alt=""/></div>
            <p>
                    ¿Qué es una kokedama?
                La kokedama es una técnica japonesa en que se sustituye la tradicional maceta de las plantas por una bola de musgo. El tipo de planta resultante se llama kokedama.
                ¿Cómo riego mi kokedama?
                Regar una kokedama es fácil y entretenido. Se riega por inmersión. Los pasos a seguir son:
            </p>
            <h2 className="kokedamasCuidados">Cuidados de las kokedamas</h2>
            <div className="imageContacto1" ><img  src="../images/cuidadoskokedama.jpeg" alt=""/></div>
        </div>
    )
}
