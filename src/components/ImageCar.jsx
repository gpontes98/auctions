import React from 'react'

import hondaFit2007 from '../images/honda-fit-2007.jpg'

import './ImageCar.css'

export default props =>{
    return(
        <div className="imageCar">
            <img src={props.imageUrl} alt="" />
            <div className="showDetails">
                ver detalhes
            </div>
        </div>
    )
}