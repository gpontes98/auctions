import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'

import './ShowDetails.css'

export default function ShowDetails() {
    return (
        <Router>
            <Link to="/">
                <div className="showDetails">
                    ver detalhes
                </div>
            </Link>
        </Router>
    )
}