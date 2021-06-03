import React from 'react'

import './ImageCar.css'

export default function Main (props){
    return(
        <div className="imageCar">
            <img src={props.imageUrl} alt="" />
            <div className="showDetails">
                ver detalhes
            </div>
        </div>
    )
}