import React from 'react'
import '../styles/Index.css';

export default function Index() {

    const PHOTO_1 = "http://placeimg.com/350/400/nature";
    
    return (
        <div>
            <h1 className = "bestsellers"> Best Sellers </h1>
            <div className = "container-img">
                <img src={PHOTO_1} alt=""/>
                <img src={PHOTO_1} alt=""/>
                <img src={PHOTO_1} alt=""/>
                <img src={PHOTO_1} alt=""/>
                <img src={PHOTO_1} alt=""/>
                <img src={PHOTO_1} alt=""/>
               

            </div>
        </div>
    )
}
