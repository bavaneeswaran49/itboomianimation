import React from 'react'
import './Footer.css'
import { FaLocationDot } from "react-icons/fa6";
import { MdForwardToInbox } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import Footeri from '../assets/footer.png';
const Footer = () => {
    return (
        <>
            <section className='footer'>
                <div className='container footer-container'>
                    <div className='row footer-row'>
                        <div className='col-lg-3 col-md-6 col-sm-12 footer-col'>
                            <div className='footer-col1'>
                                <img src={Footeri} alt="Footer Logo" className='footerimg' />
                                <div className='details-main'>
                                    <div className='details'>
                                        <div className='onei'>
                                            <FaLocationDot className='ficon' />
                                        </div>
                                        <p className='font-p'>Gautam Buddha Uttar Pradesh</p>
                                    </div>
                                    <div className='detail'>
                                        <div className='onei'>
                                            <MdForwardToInbox className='ficon' />
                                        </div>
                                        <p className='font-p'>info@gmail.com</p>
                                    </div>
                                    <div className='detail'>
                                        <div className='onei'>
                                            <IoMdCall className='ficon' />
                                        </div>
                                        <p className='font-p'>+91 9876543210</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 footer-col'>
                            <div className='footer2'>
                                <h4 className='footer-head'>Other Pages</h4>
                                <p className='footer-p'>Home</p>
                                <p className='footer-p'>About Us</p>
                                <p className='footer-p'>Services</p>
                                <p className='footer-p'>Projects</p>
                                <p className='footer-p'>Contact</p>
                            </div>

                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 footer-col'>
                            <div className='footer3'>
                                <h4 className='footer-head'>Quick Links</h4>
                                <p className='footer-p'>Privacy Policy </p>
                                <p className='footer-p'>Term of Service</p>
                                <p className='footer-p'>Disclimar</p>
                                <p className='footer-p'>Credits</p>
                                <p className='footer-p'>FAQ</p>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 col-sm-12 footer-col'>
                            <div className='footer3'>
                                <h4 className='footer-head'>
                                    Newsletter
                                </h4>
                                <div className='newsletter'>
                                    <input type="email" placeholder='Email' className='newsletter-input' />
                                    <div className='newsletter-btn'>Subscribe</div>
                                </div>
                                <p className='content'>Get the latest news & updates</p>
                                <div className='social-icons'>
                                    <div className='soc-icon'><FaInstagram /></div>
                                    <div className='soc-icon'><FaFacebookF /></div>
                                    <div className='soc-icon'><FaTwitter /></div>
                                    <div className='soc-icon'><FaLinkedin /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section className='footer-bottom'>
                <div className='container'>
                    <div className='footer-copyright'>
                         <p className='footer-bottom-p'>Copyright © 2024 Socialzy. All rights reserved.</p>
                          <p className='footer-bottom-p'>Copyright © 2022 All rights reserved</p>
                    </div>
                   
                </div>
            </section>
        </>
    )
}
export default Footer;