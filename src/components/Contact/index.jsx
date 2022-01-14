import React from 'react'
import './index.css'
import Phone from '../../img/phone.png'
import Email from '../../img/email.png'
import Address from '../../img/address.png'
import emailjs from '@emailjs/browser'
import { useRef,useState } from 'react'

const Contact = () => {

    const formRef = useRef()
    const [done,setDone]=useState(false)
    const handleSubmit = (e) =>{
        e.preventDefault();

    emailjs.sendForm('service_dzf5049', 
    'template_teitnd9', 
    formRef.current, 
    'user_Cjvhy3OuVo8ePLW4dLlrd')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };
    return (
        <div className='contact'>
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="cntact-left">
                    <h1 className="contact-title"> Let's discuss your project</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={Phone} alt="" className="contact-icon" />
                            <span>+92 307 6792785</span>
                        </div>
                        <div className="contact-info-item">
                            <img src={Email} alt="" className="contact-icon" />
                            <span> zegham.afaq@gmail.com</span>
                        </div>
                        <div className="contact-info-item">
                            <img src={Address} alt="" className="contact-icon" />
                            <span> House718, Street23, G11/1, Islamabad</span>
                        </div>
                    </div>
            </div>
                <div className="contact-right">
                    <p className="contact-desc">
                        <h5>What's your story?</h5>Get in touch.
                        Always available for freelancing if the 
                        right project comes along me. 
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder='Name...' name='user-name' />
                        <input type="text" placeholder='Subject...' name='user-subject' />
                        <input type="text" placeholder='Email...' name='user-email' />
                        <textarea rows="5" placeholder='Message' name='message' />
                        <button type="submit" value="send">Submit</button>
                        {done && 'Thank you...'}
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Contact
