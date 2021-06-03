import React, { useState } from 'react'

import './RemainingTime.css'

export default function RemainingTime(props) {
    const remainingTimeConverted = Math.round(props.remainingTime / 100)
    const [remainingTime, setRemainingTime] = useState(remainingTimeConverted)

    function changeTime() {
        setTimeout(() => {
            setRemainingTime(remainingTime - 1)
        }, 1000)
    }

    changeTime()

    function secondsToHour(time) {

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
            <span className="remainingTime">
                {secondsToHour(remainingTime)}
            </span>

        </>
    )
}