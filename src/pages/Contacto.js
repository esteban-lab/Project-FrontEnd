import React from 'react'
import '../styles/Contacto.css';
import ShoppingCart from '../components/ShoppingCart';
import { Link  } from 'react-router-dom';
import { useForm } from '../hooks/useForm';

export default function Register({setContacts}) {

    const initialFormState = {name: "", lastname: "", email: "", password:""};
    const [form, handleInputChange] = useForm(initialFormState); // Custom Hook

    const handleSubmit = e => {
        e.preventDefault();
        setContacts(contacts => [...contacts, form])
    };

    
    return (
        <div className="container-contacto">
            <ShoppingCart/>
            <div className="imageContacto" ><img  src="../images/Kokedamagrupo.jpeg" alt=""/></div>
                <h1>Contacto</h1>
                <hr/>
                <p className="paragraph"> Para preguntas o dudas con relación a tu pedido nos puedes enviar un correo electrónico a info@pieceofnature.com 
                    o rellenar el formulario que aparece en esta página y te atenderemos con mucho gusto
                <br/>
                <br/>
                
                    Si quieres realizar un pedido especial, comentarnos una propuesta de colaboración o quieres saber más cosas acerca de nosotros,
                    escríbenos a contact@pieceofnature.com
                <br/>
                <br/>
                </p>
                <p> Para cualquier otra cosa, ¡escríbenos aquí!</p>
                <div className="register-form">
                    {/* <fieldset> */}
                    {/* <legend>Forma parte de nuestra comunidad</legend> */}
                    
                        <form  onSubmit={handleSubmit}>
                    
                            <div className="inputs-form">
                                <label htmlFor="name">Nombre:</label>
                                <input className="input-contact" onChange={handleInputChange} value={form.name} name="name" type="text" id="nameInput" placeholder="Nombre" required/>
                            </div>
                            <div className="inputs-form">
                                <label htmlFor="lastName">Apellidos:</label>
                                <input className="input-contact" onChange={handleInputChange} value={form.lastName} name="lastName" type="text" id="lastNameInput" placeholder="Apellidos" required/>
                            </div>

                            <div className="inputs-form">
                                <label htmlFor="EmailInput">Email:</label>
                                <input className="input-contact" onChange={handleInputChange} value={form.email} name="email" type="email" id="EmailInput" placeholder="tuemail@tuemail.com" required/>
                            </div>
                            <label className="inputs-form" htmlFor="comments">Comentarios:</label>
                            <div>
                              <textarea className="input-contact" name="" id="" cols="55" rows="20"></textarea>
                            </div>
                            {/* <div className="inputs-form">
                                <label htmlFor="PasswordInput">Vuelve a introducir tu contraseña</label>
                                <input onChange={handleInputChange} value={form.password} name="password" type="password" id="PasswordInput" placeholder="***************" required/>
                            </div> */}
                            {/* TODO: Averiguar como insertar el campo vuelva a introducir contraseña y sus atributos */}
                            <button className="comments-button" type="submit" value="Log in">Enviar Comentarios</button>
                        </form>

                        
                        {/* </fieldset> */}
                 </div>
                 <div className="container-login">
                        <Link className="link-login" to="/login">¿Ya tienes una cuenta con nosotros?</Link>
                </div>
        </div>
    )
}
