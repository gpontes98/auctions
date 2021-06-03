import React from 'react'

import './Header.css'
import logo from '../assets/logo.png'
import phone from '../assets/phone.svg'
import user from '../assets/user.svg'
import caret from '../assets/caret.svg'

export default function Header() {
    return (
        <div className="header">
            <div className="logoPhone">
                <div className="logo">
                    <img src={logo} alt="Logo Instacarros" />
                </div>

                <div className="phone">
                    <img src={phone} alt="Phone Asset" />
                    (11) 3569-3465
                </div>
            </div>

            <div className="userTest">
                <div className="userAsset">
                   <img src={user} className="userAsset" alt="User Asset" />
                
                    <span>User Test</span> 
                </div>
                
                <div className="userCaret">
                    <img src={caret} alt="caret" />
                </div>
            </div>
        </div>
    )
}