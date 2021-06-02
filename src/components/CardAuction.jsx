import React from 'react'

import axios from 'axios'

import './CardAuction.css'
import ButtonOffer from './ButtonOffer'
import ImageCar from './ImageCar'

export default props => {
    
    return(
        <div className="cardAuction">
            <ImageCar imageUrl={props.imageUrl} />
            <div className="dataAuction">
                <div><span>TEMPO RESTANTE:</span><span>{props.remainingTime}</span></div>
                <div><span>ULTIMA OFERTA:</span><span>29.250</span></div>
            </div>
            <div className="dataCar">
                <span>{props.make} {props.version}</span>
            </div>
            <div className="dataCar">
                <div><span>{props.year}</span></div>
                <div><span>{props.km}km</span></div>
            </div>
            <ButtonOffer/>
        </div>
    )
}