import '../styles/Index.css';
import ShoppingCart from '../components/ShoppingCart';
import {useState, useEffect} from 'react';

export default function Index() {

    const API_PRODUCTS = `http://localhost:8000/api/products`;

    const [brochureProducts, setBrochureProducts] = useState([]);

    useEffect(() => {
        fetch(API_PRODUCTS)
        .then(response => response.json())
        .then(data => setBrochureProducts(data));  
        }, []);

    const PHOTO_1 = 'images/plant_1.jpeg';


    
    return (

        <div>
            <h1 className = "KokedamasTitle">  Tienda </h1>
           
            <ShoppingCart />
                <hr/>
            <h1 className = "bestsellers"> Kokedamas </h1>
            <div className="container-cards">
                {
                    brochureProducts.map(product => {
                        return (
                         <div>
                             <img src={PHOTO_1} alt=""/>
                             <p>{product.name}</p>
                             <p className="price">{`${product.price}€`}</p>
                        </div>
                        
                        )
                    })
                }
            
            </div>
            
        </div>
    )
}
