import React from 'react'

import './LastBid.css'

export default function LastBid(props){
    return(
        <>
            <span className="lastBid">R$ {(props.amount).toLocaleString('pt-br')}</span>
        </>
    )
}