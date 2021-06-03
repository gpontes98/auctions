import React from 'react'

import './Header.css'
import logo from '../assets/logo.png'
import phone from '../assets/phone.png'
import user from '../assets/user.png'

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
                <img src={user} alt="User Asset" />
                User Test
            </div>
        </div>
    )
}