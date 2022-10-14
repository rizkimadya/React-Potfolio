import React from 'react'
import './testimonials.css'
import avatar1 from '../../assets/me-about.jpeg'

import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () =>{
    return(
        <section id="testimonials">
            <h5>Penilaian dari client</h5>
            <h2>Testimoni</h2>

            <Swiper className="container testimonials_container"
             modules={[Pagination]}
             spaceBetween={40}
             slidesPerView={1}
             pagination={{ clickable: true }}>
                <SwiperSlide className="testimonial">
                    <div className="client_avatar">
                        <img src={avatar1}/>
                    </div>  
                    <h5 className='client_name'>Agam Khairul Anam</h5>
                    <small className='client_review'>Pelayanan yang diberikan oleh Mr.R sangat bagus, saya merasa nyaman dan puas karena website e-comerce uta.com berjalan baik</small>  
                </SwiperSlide>

                <SwiperSlide className="testimonial">
                    <div className="client_avatar">
                        <img src={avatar1}/>
                    </div>  
                    <h5 className='client_name'>Subhan Syafriansyah</h5>
                    <small className='client_review'>Saya merasa sangat terbantu karena telah bekerjasama dengan Mr.R sehingga membantu saya dalam pembuatan website hewan ternak</small>  
                </SwiperSlide>

                <SwiperSlide className="testimonial">
                    <div className="client_avatar">
                        <img src={avatar1}/>
                    </div>  
                    <h5 className='client_name'>Dody Al-Fayed</h5>
                    <small className='client_review'>Dengan adanya website yang dibuat oleh Mr.R saya sangat terbantu ketika ingin melihat bokingan futsal, jam kosong dan laiinnya terkait futsal jadi lebih muda</small>  
                </SwiperSlide>

                <SwiperSlide className="testimonial">
                    <div className="client_avatar">
                        <img src={avatar1}/>
                    </div>  
                    <h5 className='client_name'>Nurhayati</h5>
                    <small className='client_review'>Saya terlah merasakan kepuasaan karena pelayanan dan website dari Mr.R dapat mengembangkan bisnis saya yaitu terkait dengan perawatan masyarakat dipelosok</small>  
                </SwiperSlide>
              
            </Swiper>
        </section>
    )
}

export default Testimonials