import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () =>{
    return(
        <section id="services">
            <h5>Adapun yang saya tawarkan</h5>
            <h2>Services</h2>

            <div className="container services_container">
                <article className="service">
                    <div className="service_head">
                        <h3>Design</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Menerima pembuatan design CV</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Menerima pembuatan design UI/UX</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Menerima pembuatan design ilusrator</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Menerima pembuatan design spanduk</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Menerima pembuatan design pamflet</p>
                        </li>
                    </ul>
                </article>


                <article className="service">
                    <div className="service_head">
                        <h3>Frontend Web</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Menerima pembuatan tampilan portfolio</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Menerima pembuatan tampilan CV</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Menerima perbaikan tampilan web</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Menerima pembuatan e-comerce</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Menerima pembuatan tampilan web</p>
                        </li>
                    </ul>
                </article>


                <article className="service">
                    <div className="service_head">
                        <h3>Backend Web</h3>
                    </div>

                    <ul className="service_list">
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Menerima pembuatan backend web e-comerce</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Menerima pelatihan database sampai expert</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Menerima peatihan backend sampai expert</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Menerima pembuatan backend berbagai website</p>
                        </li>
                        <li>
                            <BiCheck className='service_list-icon'/>
                            <p>Menerima perawatan backend web</p>
                        </li>
                    </ul>
                </article>
            </div>
        </section>
    )
}

export default Services