import React from 'react'
import './index.css'
import Afaq from '../../img/afaq.png'
import Cert from '../../img/cert.png'

const About = () => {
    return (
        <div className="about">
            <div className="about-left">
                <div className="about-card bg"></div>
                <div className="about-card">
                    <img src={Afaq} alt="" className='about-img' />
                </div>
            </div>
            <div className="about-right">
                <h1 className="about-title">About Me</h1>
                <ul className='skills'>Skills
                    <li className='skill-list'>HTML</li>
                    <li className='skill-list'>CSS</li>
                    <li className='skill-list'>JAVASCRIPT</li>
                    <li className='skill-list'>REACTJS</li>
                    <li className='skill-list'>SAAS</li>
                    <li className='skill-list'>BOOTSTRAP</li>
                    <li className='skill-list'>GIT, GITHUB</li>
                </ul>
                <div className="about-certs">
                    <img src={Cert} alt="" className="about-cert-img" />
                    <div className="about-cert-texts">
                        <h3 className="about-cert-title">Certificate In Cyber Security</h3>
                        <p className="about-cert-desc">I got a Certificate in Cyber Security from NUMAL Islamabad.
                         It is six month training programe under the supervision of NAVTTC</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default About
