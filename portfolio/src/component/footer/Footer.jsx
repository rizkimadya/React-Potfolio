import React from 'react'
import './footer.css'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Footer = () => {
    return(
        <footer>
            <a href="#" className="footer_logo">M.RIZKI MADYA</a>

            <ul className='permalinks'>
                <li><a href="#">Beranda</a></li>
                <li><a href="#about">Tentang saya</a></li>
                <li><a href="#experience">Pengalaman</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimoni</a></li>
                <li><a href="#contact">Kontak</a></li>
            </ul>

            <div className="footer_socials">
                <a href="https://instagram.com/riski_madya?utm_medium=copy_link"><BsInstagram/></a>
                <a href="https://api.whatsapp.com/send?phone=6282236831592&text=Hallo%20Rizki,Apakan%20anda%20bisa%20membantu%20saya?"><BsWhatsapp/></a>
            </div>

            <div className="footer_copyright">
                <small>&copy; Mr.R Tutorials. Asal Kota Bima.</small>
            </div>
        </footer>
    )
}

export default Footer