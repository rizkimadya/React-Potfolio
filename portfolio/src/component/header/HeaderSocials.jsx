import React from 'react'
import {BsWhatsapp} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


const HeaderSocials = () => {
    return(
        <div className='header_socials'>
            <a href="https://api.whatsapp.com/send?phone=6282236831592&text=Hallo%20Rizki,Apakan%20anda%20bisa%20membantu%20saya?" target="_blank"><BsWhatsapp/></a>
            <a href="https://github.com" target="_blank"><BsGithub/></a>
            <a href="https://instagram.com/riski_madya?utm_medium=copy_link" target="_blank"><BsInstagram/></a>
        </div>
    )
}

export default HeaderSocials