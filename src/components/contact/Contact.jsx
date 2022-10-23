import React from 'react'
import './contact.css'
import {AiOutlineMail} from "react-icons/ai"
import { useRef } from 'react';
import emailjs, { send } from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4561nr5', 'template_8oi6jv7', form.current, 'CJSNACCKbR7CVDsjM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id = 'contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className = "contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>kaydenlea@gmail.com</h5>
            <a href="mailto:kaydenlea@gmail.com" target ="_blank">Send a Message</a>
          </article>
        </div>
      <div className='fill'>
        <form ref={form} onSubmit ={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' color= '#fff' required/>
          <input type="email" name = 'email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        </div>
      </div>
    </section>
  )
}

export default Contact