import React from 'react'

import './CardAuction.css'
import ImageCar from './ImageCar'
import Remainingtime from './RemainingTime'
import Button from './Button'

export default function CardAuction (props){
    return(
        <div className="cardAuction">
            <ImageCar imageUrl={props.imageUrl} />

            <div className="detailsAuction">

                <div className="timeOfer">
                    <div><span>TEMPO RESTANTE</span><span className="remainingTime"><Remainingtime remainingTime={props.remainingTime}/></span></div>
                    <div><span>ÚLTIMA OFERTA</span><span className="lastOffer">R$ {(props.amount).toLocaleString('pt-br')}</span></div>
                </div>

                <div className="descriptionCar">
                    <span>{props.make} {props.version}</span>
                </div>

                <div className="yearKm">
                    <div><span>{props.year}</span></div>
                    <div><span>{(props.km).toLocaleString('pt-br')} km</span></div>
                </div>      

                <Button title={"FAZER OFERTA"}/>
            </div>
        </div>
    )
}