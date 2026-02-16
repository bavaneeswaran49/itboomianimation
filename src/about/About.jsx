import React from 'react'
import './About.css'
import { FaArrowCircleRight } from "react-icons/fa";
import card from '../assets/card.png';
import social from '../assets/social.png';
import send from '../assets/send.png';
import line from '../assets/line.png';
const About = () => {
    return (
        <>
            <div className='container about-container'>
                <div className='row about-row'>
                    <div className='col-lg-7 col-md-12 col-sm-12 about-col'>
                        <div className='about-content'>
                            <p className='about-p'>About Socialzy</p>
                        </div>
                        <h3 className='about-h3'>
                            Some Number Of Our Achievement
                        </h3>
                        <p className='about-p2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <div className='about-btn'>
                            <div className='about-btnmain'>
                                <div className='about-btn1'>Read More</div>
                                <div className='icon'>
                                    <FaArrowCircleRight /></div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-5 col-md-12 col-sm-12 about-col'>
                        <div className='about-col2'>

                        </div>
                        <div className='about-col3'>
                            <img src={card} alt='card' className='about-card' />
                            <h1>3460+</h1>
                            <p>Satisfied Clients</p>
                        </div>
                        <div className='about-col4'>
                            <img src={social} alt='social' className='about-card' />
                            <h1>3460+</h1>
                            <p>Satisfied Clients</p>
                        </div>
                        <div className='about-col5'>
                            <img src={send} alt='send' className='about-card' />
                            <h1>3460+</h1>
                            <p>Satisfied Clients</p>
                        </div>

                        <div className='about-col6'>
                            <img src={line} alt='line' className='about-card' />
                            <h1>3460+</h1>
                            <p>Satisfied Clients</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}
export default About;