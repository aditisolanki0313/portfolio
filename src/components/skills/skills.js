import React from 'react'
import './skills.css';
import webdesignimg from '../../assets/webdesign.png';
import appdesignimg from '../../assets/appdesign.png';
import UIUXimg from '../../assets/UIUX.png';

const skills = () => {
  return (
    <section id='skills'>
      <span className='skillTitle'>What I do?</span>
      <span className='skillpara'>I specialize in Website, App and UI design, crafting visually appealing and user-friendly websites. My expertise includes responsive web design, seamless collaboration with developers, and SEO optimization. I create websites that not only look great but also drive results. Let's work together to elevate your digital presence.</span>
      <div className='skillBars'>
        <div className='skillBar'>
          <img src={UIUXimg} alt='UIimage' className='skillbarimg1'/>
          <div className='skillbarText'>
            <h1>UI/UX Design</h1>
            <p>I have a keen eye for aesthetics and user experience. I create intuitive and visually appealing user interfaces that resonate with your brand and engage your audience effectively.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={webdesignimg} alt='' className='skillbarimg1'/>
          <div className='skillbarText'>
            <h1>Website Design</h1>
            <p>In today's mobile-first world, I ensure that your website looks and functions perfectly on all devices. I prioritize responsive design to reach a wider audience.</p>
          </div>
        </div>
        <div className='skillBar'>
          <img src={appdesignimg} alt='' className='skillbarimg2'/>
          <div className='skillbarText'>
            <h1>App Design</h1>
            <p>I excel in crafting intuitive and visually pleasing user interfaces (UI) for mobile apps, ensuring a seamless and enjoyable user experience (UX).</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default skills;