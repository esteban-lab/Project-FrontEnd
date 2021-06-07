import '../styles/Navbar.css';
import { NavLink } from 'react-router-dom';


export default function Navbar() {
    const LOGO_1 ='images/logo_1.png';
    return (
        <div className = "navbar">
                <img src={LOGO_1} alt=""/>
                <NavLink to = "/">Home</NavLink>  
                <NavLink to = "/catalogo">Catalogo</NavLink>
                <NavLink to = "/talleres">Talleres</NavLink>
                <NavLink to = "/sobreNosotros">Sobre Nosotros</NavLink>
                <NavLink to = "/faqs">FAQs</NavLink>
                <NavLink to = "/contacto">Contacto</NavLink>            
        </div>
    )
}
