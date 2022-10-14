import React from 'react'
import CV from '../../assets/CV rizkimadya.pdf'

const CTA = () => {
    return(
        <div className='cta'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Hubungi saya</a>
        </div>
    )
}

export default CTA