import React from 'react'
import './works.css';
import weathering from '../../assets/weathering.png';
import website from '../../assets/website.png';
import musicUI from '../../assets/musicUI.png';
import ecommerce from '../../assets/ecommerce.png';

const Works = () => {
  return (
    <section id='works'>
      <h2 className='workTitle'>My Portfolio</h2>
      <span className='workPara'>My website design expertise combines captivating aesthetics with seamless functionality, delivering visually engaging and user-friendly interfaces. Proficient in responsive design, I ensure adaptability across devices. Data-driven decisions and user research enhance both aesthetics and performance for effective digital solutions.</span>
      <div className='workBars'>
        <div className='ecommerce'>
          <img src={ecommerce} alt='' className='ecommerceimg' />
          <div className='ecommerceText'>
            <h1>E-Commerce Website</h1>
            <p>Developed a attractive E-commerce clothing website using HTML and CSS.<br />
              Incorporated Intuitive navigation and responsive design demonstrating strong understanding ofuser experience
              design principles.
            </p>
          </div>
        </div>

        <div className='musicUI'>
          <img src={musicUI} alt='' className='musicimg' />
          <div className='musicText'>
            <h1>Music Website UI</h1>
            <p>Designed an engaging user interface for a music website , enhancing user experience throughintuitive layout and
              interactive elements.<br />
              Prioritized seamless navigation and aesthetic appeal, resulting in an exceptional user interface that elevates the
              overall user engagement on the platform.
            </p>
          </div>
        </div>
        <div className='website'>
          <img src={website} alt='' className='websiteimg' />
          <div className='websiteText'>
            <h1>NIFT WEBSITE UI</h1>
            <p>Developed a visually captivating and user-centric National Institutes of Fashion Technology (NIFT) website UI within Figma, demonstrating prowess in design and UX. Collaborated closely with development teams, while conducting rigorous usability testing to refine the user experience iteratively.</p>
          </div>
        </div>
        <div className='weathering'>
          <img src={weathering} alt='UIimage' className='weatheringimg' />
          <div className='weatheringText'>
            <h1>Weathering App UI</h1>
            <p>Revitalized Weather app UI with widgets by harmonious fusion of Glassmorphism and Neumorphism dark
              mode aesthetics.<br />
              Mastered 3D effect integration for application UI.
            </p>
          </div>
        </div>
      </div>
      <button className='workbtn'>See More</button>
    </section>
  )
}

export default Works;