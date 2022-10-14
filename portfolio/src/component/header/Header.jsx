import React from 'react'
import './header.css'
import CTA from './CTA'
import SAYA from '../../assets/profil1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return(
        <header>
            <div class="container header_container">
                <h5>Assalamualaikum, Saya</h5>
                <h1>M. RIZKI MADYA</h1>
                <h5 className="text-light">FrontEnd Web Developer</h5>
                <CTA />
                <HeaderSocials />

                <div className="saya">
                    <img src={SAYA} alt="foto saya"/>
                </div>

                <a href="#contact" className="scroll_down">Scrol Kebawah</a>
            </div>
        </header>
    )
}

export default Header