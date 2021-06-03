import React from 'react'
import ShowDetails from './showDetails/ShowDetails'

import './ImageCar.css'

export default function Main (props){
    return(
        <div className="imageCar">
            <img src={props.imageUrl} alt="" />
            <ShowDetails />
        </div>
    )
}