import React from 'react'
import './works.css';
// import { Link } from 'react-router-dom';
import kriptees from '../../assets/kriptees.png';
import hacheries from '../../assets/shiv shakti hacheries.png';
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
      {/* <Link to ="/https://achats.netlify.app//"> */}
        <div className='hatcheries'>
          <img src={hacheries} alt='' className='hacheriesimg' />
          <div className='hacheriesText'>
            <h1>Shiv Shakti Hatcheries</h1>
            <p>Designed a modern and interactive website for <a href='https://ubiquitous-monstera-f06bea.netlify.app/' className='netlify'>Shiv Shakti Hatcheries</a> using Figma, incorporating smooth animations to enhance user engagement. <br /> Focused on a clean, professional layout with a blend of informative content, intuitive navigation, and visually appealing elements. Ensured a seamless user experience by integrating responsive design principles and dynamic UI components for a polished digital presence.
            </p>
          </div>
        </div>
        <div className='kriptees'>
          <img src={kriptees} alt='' className='kripteesimg' />
          <div className='kripteesText'>
            <h1>Kriptees</h1>
            <p>Designed an intuitive and visually compelling T-shirt e-commerce platform <a href='https://www.figma.com/proto/mC2TPOwG5CGIcnIgBs865Y/kriptees?node-id=15-2&p=f&t=7gGn32m8CBhQTQHj-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=188%3A2' className='netlify'>Kriptees</a> that enhances user engagement and shopping experience. <br/> Focused on seamless navigation, modern aesthetics, and responsive design, ensuring accessibility across all devices. Implemented filtering options, detailed product pages, and an interactive cart system to optimize user flow.
            </p>
          </div>
        </div>
        <div className='ecommerce'>
          <img src={ecommerce} alt='' className='ecommerceimg' />
          <div className='ecommerceText'>
            <h1>E-Commerce Website</h1>
            <p>Developed a attractive <a href='http://achats.netlify.app' className='netlify'>E-commerce</a> clothing website using HTML and CSS.<br />
              Incorporated Intuitive navigation and responsive design demonstrating strong understanding ofuser experience
              design principles.
            </p>
          </div>
        </div>
        {/* </Link> */}

        <div className='musicUI'>
          <img src={musicUI} alt='' className='musicimg' />
          <div className='musicText'>
            <h1>Music Website UI</h1>
            <p>Designed an engaging user interface for a music website <a href='https://www.figma.com/file/OVcUDi15YCTP3bWLssGfuK/Harmony?type=design&node-id=0-1&mode=design&t=YLEbogIJRfI0VAkR-0' className='netlify'>Harmony</a>, enhancing user experience throughintuitive layout and
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
            <p>Developed a visually captivating and user-centric National Institutes of Fashion Technology <a href='https://www.figma.com/proto/acvhD4XZUIf1lxZizEpaKd/web-site?type=design&node-id=1-2&t=lV8OF20nqiSfXrt0-0&scaling=min-zoom&page-id=0%3A1' className='netlify'>(NIFT) website UI</a> within Figma, demonstrating prowess in design and UX. Collaborated closely with development teams, while conducting rigorous usability testing to refine the user experience iteratively.</p>
          </div>
        </div>
        <div className='weathering'>
          <img src={weathering} alt='UIimage' className='weatheringimg' />
          <div className='weatheringText'>
            <h1>Weathering App UI</h1>
            <p>Revitalized <a href='https://www.figma.com/file/Djqi00eI4UORGIZnKDbOtP/Weathering-app?type=design&mode=design&t=jEqVuXiSdSkU7sP3-0' className='netlify'>Weather app UI</a>with widgets by harmonious fusion of Glassmorphism and Neumorphism dark
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
