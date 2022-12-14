import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const Portfolio = () =>{
    return(
        <section id="portfolio">
            <h5>Proyek web saya</h5>
            <h2>Portfolio</h2>
            
            <div className="container portfolio_container">
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG1}/>
                    </div>
                    <h3>Lao Trip</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG2}/>
                    </div>
                    <h3>Portfolio Mr.R</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG3}/>
                    </div>
                    <h3>Website kopi Bro</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG4}/>
                    </div>
                    <h3>Website Teknologi</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG5}/>
                    </div>
                    <h3>Game Tikus</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={IMG6}/>
                    </div>
                    <h3>Game Tic Tac Toe</h3>
                    <div className='portfolio_item-cta'>
                        <a href="https://github.com" className='btn'>Github</a>
                        <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio