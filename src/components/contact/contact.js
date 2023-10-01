import React, { useRef } from 'react'
import './contact.css';
import facebookicon from '../../assets/facebookicon.png';
import linkedinicon from '../../assets/linkedinicon.png';
import instaicon from '../../assets/instaicon.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5h6dw09', 'template_aatx3fu', form.current, 'OqN9krz8UWlTUwp0-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section className='contactPage'>
            {/* <div className='clients'>

  </div> */}
            <div id='contact'>
                <h1 className='contactpageTitle'>Contact Me</h1>
                <span className='contactDes'>Please fill out this form for further discussion on work.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='your_name'/>
                    <input type='email' className='email' placeholder='Your email' name='your_email'/>
                    <textarea className='msg' name='message' rows={5} placeholder='Your message'></textarea>
                    <button type='submit' value='send' className='submitbtn'>Submit</button>
                    <div className='links'>
                        <img src={facebookicon} alt='fb' className='link' />
                        <img src={instaicon} alt='insta' className='link' />
                        <img src={linkedinicon} alt='linkedin' className='link'/>


                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;