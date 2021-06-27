import React from 'react'
import {BrowserRouter, Route, Switch} from  'react-router-dom';
import Index from '../pages/Index';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Faqs from '../pages/Faqs';
import Catalogo from '../pages/Catalogo';
import Talleres from '../pages/Talleres';
import SobreNosotros from '../pages/SobreNosotros';
import Contacto from '../pages/Contacto';
import Login from '../pages/Login';
import ShoppingCart from '../components/ShoppingCart';




export default function Router() {
    return (
        <div>
        <BrowserRouter>
            <Navbar />        
            <Switch>
                 <Route exact path ="/"   component={Index}/>
                 <Route path = "/faqs"    component={Faqs}/>
                 <Route path = "/catalogo"component={Catalogo}/>
                 <Route path = "/talleres"component={Talleres}/>
                 <Route path = "/sobreNosotros" component={SobreNosotros}/>
                 <Route path = "/contacto"component={Contacto}/>
                 <Route path = "/login"   component={Login}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
            
        </div>
    )
}
