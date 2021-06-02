import React, { useEffect, useState } from 'react'
import CardAuction from '../components/CardAuction'

import api from '../services/api'

import './Main.css'

export default props => {
    const [dataCars, setDataCars] = useState([])
    
    useEffect(() => {
        api().then(data => {
            setDataCars(data);
        })
    }, [])

    console.log(dataCars)

    return(
        <div className="main">    
            <CardAuction
                make={dataCars[0].make}
                version={dataCars[0].version}
                year={dataCars[0].year}
                km={dataCars[0].km}
                imageUrl={dataCars[0].imageUrl}
                remainingTime={dataCars[0].remainingTime}
            />

            <CardAuction
                make={dataCars[0].make}
                version={dataCars[0].version}
                year={dataCars[0].year}
                km={dataCars[0].km}
                imageUrl={dataCars[0].imageUrl}
                remainingTime={dataCars[0].remainingTime}
            />

            <CardAuction
                make={dataCars[0].make}
                version={dataCars[0].version}
                year={dataCars[0].year}
                km={dataCars[0].km}
                imageUrl={dataCars[0].imageUrl}
                remainingTime={dataCars[0].remainingTime}
            />
        </div>
    )
}