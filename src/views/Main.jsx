import React, { useEffect, useState } from 'react'
import CardAuction from '../components/CardAuction'

import api from '../services/api'

import './Main.css'


function retornaMaior(arr){
    if(arr.length < 1) return 0;
    
    return Math.max.apply(null, arr)
}

export default function Main(){
    const [dataCars, setDataCars] = useState([])
    
    const getData = async _ =>{
        const response = await api()
        setDataCars(response);
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <div className="main">
            {
                dataCars.map(car => {
                    return(
                        <CardAuction key={car.id}
                            make={car.make}
                            version={car.version}
                            year={car.year}
                            km={car.km}
                            imageUrl={car.imageUrl}
                            remainingTime={car.remainingTime}
                            amount={
                                retornaMaior(
                                    car.bids.map(bid =>{
                                        return bid.amount
                                    })
                                )
                            }
                        />
                    )
                })
            }
        </div>
    )
}