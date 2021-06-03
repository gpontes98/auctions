import React, { useState } from 'react'

export default function RemainingTime(props) {
    const remainingTimeConverted = Math.round(props.remainingTime / 100)
    const [remainingTime, setRemainingTime] = useState(remainingTimeConverted)

    function alteraEstado() {
        setTimeout(() => {
            setRemainingTime(remainingTime - 1)
        }, 1000)
    }


    alteraEstado()

    function segParaHora(time) {

        let hours = Math.floor(time / 3600)
        let minutes = Math.floor((time % 3600) / 60)
        let seconds = time % 60

        // @ts-ignore
        minutes = minutes < 10 ? '0' + minutes : minutes;
        // @ts-ignore     
        seconds = seconds < 10 ? '0' + seconds : seconds
        // @ts-ignore
        hours = hours < 10 ? '0' + hours : hours

        return hours + ":" + minutes + ":" + seconds

    }


    return (
        <>
            {segParaHora(remainingTime)}
        </>
    )
}