import React, { useState } from 'react'

import './Index.css'
import ImageCar from './imageCar/ImageCar'
import Remainingtime from './RemainingTime'
import LastBid from './LastBid'
import Button from './Button'

export default function CardAuction(props) {
    const [lastBid, setLastBid] = useState(props.amount)
    
    return (
        <div className="cardAuction">
            <ImageCar imageUrl={props.imageUrl} />

            <div className="detailsAuction">

                <div className="timeBid">
                    <div>
                        <span>TEMPO RESTANTE</span>
                        <Remainingtime remainingTime={props.remainingTime} />
                    </div>
                    <div>
                        <span>ÚLTIMA OFERTA</span>
                        <LastBid amount={lastBid}/>
                    </div>
                </div>

                <div className="descriptionCar">
                    <span>{props.make} {props.version}</span>
                </div>

                <div className="yearKm">
                    <div>
                        <span>{props.year}</span>
                    </div>
                    <div>
                        <span>{(props.km).toLocaleString('pt-br')} km</span>
                    </div>
                </div>

                <Button title={"FAZER OFERTA"} setBid={() => setLastBid(lastBid + 250)}/>
            </div>
        </div>
    )
}