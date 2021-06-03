import React from 'react'

import './Button.css'
export default function Button (props){
    return(
        <button className="buttonOffer" onClick={e => props.setBid()}>{props.title}</button>
    )
}