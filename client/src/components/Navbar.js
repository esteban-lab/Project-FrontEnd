import '../styles/Navbar.css';

export default function Navbar() {
    const LOGO_1 ='images/logo_1.png';
    return (
        <div className = "navbar">
                <img src={LOGO_1} alt=""/>
                <a href="#">Catalogo</a>
                <a href="#">Talleres</a>
                <a href="#">Sobre Nosotros</a>
                <a href="#">FAQs</a>
                <a href="#">Contacto</a>            
        </div>
    )
}
