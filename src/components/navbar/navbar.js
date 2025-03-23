import React , { useState } from 'react';
import './navbar.css';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';
import menu from '../../assets/menuicon.png';
 

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className='navbar'>
            <img src='logo.png' alt='logo' className='logo' />
            <div className='desktopMenu' >
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
                {/* <Link activeClass='active' to='https://drive.google.com/file/d/1N1HNpUQ0M8srJuwBPrxMXKP5tgBL6yWr/view?usp=sharing' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' >Resume</Link> */}
                {/* <Link  className='desktopMenuListItem'>Client</Link> */}
            </div>
            <button  className='desktopMenubtn' onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }
            }>
                <img src={contactImg} alt='img' className='desktopMenuImg' />contact me</button>
            <img src={menu} alt='menu' className='mobMenu' onClick={()=> setShowMenu(!showMenu)}/>
            <div className='navMenu' style={{display : showMenu? 'flex':'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Portfolio</Link>
                {/* <Link activeClass='active' to='https://drive.google.com/file/d/1N1HNpUQ0M8srJuwBPrxMXKP5tgBL6yWr/view?usp=sharing' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>Resume</Link> */}
                {/* <Link  className='desktopMenuListItem'>Client</Link> */}
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false)}>contact</Link>
                
            </div>

        </nav>
    )
}

export default Navbar;
