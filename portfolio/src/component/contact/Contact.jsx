import React from 'react'
import './contact.css'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
    return (
        <section id="contact">
            <h5>Hubungi saya untuk membuat project web</h5>
            <h2>Kontak</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <BsInstagram className='contact_option-icon'/>
                        <h4>instagram</h4>
                        <h5>riski_madya</h5>
                        <a href="https://instagram.com/riski_madya?utm_medium=copy_link" target="_blank">kirim pesan</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className='contact_option-icon'/>
                        <h4>Whatsapp</h4>
                        <h5>+6282236831592</h5>
                        <a href="https://api.whatsapp.com/send?phone=6282236831592&text=Hallo%20Rizki,Apakan%20anda%20bisa%20membantu%20saya?" target="_blank">kirim pesan</a>
                    </article>
                </div>


                <form action="">
                    <input type="text" name='nama' placeholder="masukkan nama" required/>
                    <input type="email" name='email' placeholder="masukkan email" required/>
                    <textarea name='message' rows="7" placeholder="pesan" required></textarea>
                    <button type="submit" className="btn btn-primary">Kirim pesan</button>
                </form>
            </div>
        </section>
    )
}

export default Contact