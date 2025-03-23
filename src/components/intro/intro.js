import React from 'react';
import './intro.css';
import bg from '../../assets/myimage.png';
import { Link } from 'react-scroll';
import btnImg from '../../assets/hireme.png';

const Intro = () => {
    return (
        <section id='intro'>
            <div className='intro-container'>
                <div className='introContent'>
                    <span className='hello'>Hello<span className="wave">👋</span></span>
                    <span className='introText'>I'm Aditi Solanki</span>
                    <div className="role-container">
                        <span className="role">UI Designer</span>
                    </div>
                    <p className='intropara'>I am a skilled web and app designer with experience in creating 
                        UI/UX and user-friendly websites.
                    </p>
                    <div className="button-container">
                        <Link to="contact" smooth={true} duration={500}>
                            <button className='btn primary-btn'>
                                <img src={btnImg} alt='hire me' className='btnImg'/>
                                Hire Me
                            </button>
                        </Link>
                        <Link to="works" smooth={true} duration={500}>
                            <button className='btn secondary-btn'>
                                See My Work
                            </button>
                        </Link>
                    </div>
                </div>
                
                <div className="profile-container">
                    <div className="profile-circle">
                        <img src={bg} alt='profile' className='profile-img' />
                    </div>
                    <div className="circle-decoration circle1"></div>
                    <div className="circle-decoration circle2"></div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
