import React from 'react'

import Menu from './Menu'

import './Header.css'
import logo from '../../assets/logo.png'
import phone from '../../assets/phone.svg'
import user from '../../assets/user.svg'
import caret from '../../assets/caret.svg'

export default function Header(props) {
    //const [userName, setUser] = useState(props.user || 'Gabriel Pontes')
    const userName = 'Gabriel Pontes'

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

            <div className="userProfile">
                <div className="userIcon">
                    <img src={user} className="userAsset" alt="User Asset" />

                    <span>{userName}</span>
                </div>


                <img className="userCaret" src={caret} alt="caret" />

                <Menu />

            </div>
        </div>
    )
}