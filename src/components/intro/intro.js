import React from 'react'
import './intro.css';
import bg from '../../assets/myimage.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
    return (
        <section id='intro'>
            <div className='introContent'>
                <span className='hello'>Hello</span>
                <span className='introText'>I'm <span className='introname'>Aditi Solanki</span> <br />Website Designer</span>
                <p className='intropara'> I am a skilled web designer with experience in creating UI/UX and <br/>users friendly websites.</p>
                <Link><button className='btn'><img src={btnImg} alt='hire me' className='btnImg'/>Hire Me</button></Link> 
            </div>

            <img src={bg} alt='profile' className='bg' />


        </section>
    )
}

export default Intro;