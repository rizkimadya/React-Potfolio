import React from 'react'
import './about.css'
import SAYA from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa' 
import {FiUsers} from 'react-icons/fi'
import {CgWebsite} from 'react-icons/cg'

const About = () => {
    return (
        <section id="about">
            <h5>cari tahu mengenai ku!</h5>
            <h2>Tentang Saya</h2>
    
            <div className="container about_container">
                <div className="about_me">
                    <div className="about_me-image">
                        <img src={SAYA} alt="foto saya"/>
                    </div>
                </div>

                <div className="about_content">
                    <div className="about_cards">

                        <article className='about_card'>
                            <FaAward className='about_icon'/>
                            <h5>Pengalaman</h5>
                            <small>Fresh Graduate</small>
                        </article>

                        <article className='about_card'>
                            <FiUsers className='about_icon'/>
                            <h5>Pelanggan</h5>
                            <small>+1 pelanggan</small>
                        </article>

                        <article className='about_card'>
                            <CgWebsite className='about_icon'/>
                            <h5>Project</h5>
                            <small>+5 project</small>
                        </article>
                    </div>

                    <p>Web Developer, dengan pengetahuan luas dan pengalaman berhari-hari, bekerja dalam teknologi web dan Desain UI/UX, memberikan kualitas terbaik pada perusahaan anda</p>

                    <a href="#contact" className="btn btn-primary">Ayo Kepoin</a>    
                </div>
            </div>
        </section>
    )
}

export default About