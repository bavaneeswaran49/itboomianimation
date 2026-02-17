import React from 'react'
import './social.css'
import social from '../assets/social.png'
import { FaArrowCircleRight } from "react-icons/fa";
import { MdOutlineArrowRightAlt } from "react-icons/md";
const Social = () => {
    return (
        <>
            <section className='social'>
                <div className='container social-container'>
                    <div className='social-main'>
                        <div className='social-title'>
                            <p className='social-p'>About Socialzy</p>
                        </div>
                    </div>
                </div>
                <h3 className='social-h3'>The Best Price Just For You</h3>
                <p className='social-p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias veniam expedita<br></br> dolorum velit accusantium fugit repudiandae placeat illum quisquam distinctio officiis.</p>
                <div className='container'>
                    <div className='row social-row gap-4'>
                        <div className='col-lg-4 col-md-4 col-sm-12 social-card'>
                            <img src={social} alt='social' className='social-img' />
                            <h3 className='scard-h3'>Personal Plan</h3>
                            <h2 className='price-h2'>$49,9</h2>
                            < p className='social-para'>Billed Annually</p>
                            <div className='social-btn'>
                                <h4 className='social-h4'>Read More</h4>
                                <FaArrowCircleRight className='social-icon' />

                            </div>
                            <div className='social-arr'>
                                <div className='sicon'><MdOutlineArrowRightAlt /></div>
                                <p>25 Analytics Campaigns</p>
                            </div>
                            <div className='social-arr'>
                                <div className='sicon'><MdOutlineArrowRightAlt /></div>
                                <p>25 Analytics Campaigns</p>
                            </div>
                            <div className='social-arr'>
                                <div className='sicon'><MdOutlineArrowRightAlt /></div>
                                <p>25 Analytics Campaigns</p>
                            </div>
                            <div className='social-arr'>
                                <div className='sicon'><MdOutlineArrowRightAlt /></div>
                                <p>25 Analytics Campaigns</p>
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-4 col-sm-12 social-card card2'>
                            <img src={social} alt='social' className='social-img' />
                            <h3 className='scard-h3'>Personal Plan</h3>
                            <h2 className='price-h2'>$49,9</h2>
                            < p className='social-para'>Billed Annually</p>
                            <div className='social-btn'>
                                <h4 className='social-h4'>Read More</h4>
                                <FaArrowCircleRight className='social-icon' />

                            </div>
                            <div className='social-arr'>
                                <div className='sicon'><MdOutlineArrowRightAlt /></div>
                                <p>25 Analytics Campaigns</p>
                            </div>
                            <div className='social-arr'>
                                <div className='sicon'><MdOutlineArrowRightAlt /></div>
                                <p>25 Analytics Campaigns</p>
                            </div>
                            <div className='social-arr'>
                                <div className='sicon'><MdOutlineArrowRightAlt /></div>
                                <p>25 Analytics Campaigns</p>
                            </div>
                            <div className='social-arr'>
                                <div className='sicon'><MdOutlineArrowRightAlt /></div>
                                <p>25 Analytics Campaigns</p>
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-4 col-sm-12 social-card'>
                            <img src={social} alt='social' className='social-img' />
                            <h3 className='scard-h3'>Personal Plan</h3>
                            <h2 className='price-h2'>$49,9</h2>
                            < p className='social-para'>Billed Annually</p>
                            <div className='social-btn'>
                                <h4 className='social-h4'>Read More</h4>
                                <FaArrowCircleRight className='social-icon' />

                            </div>
                            <div className='social-arr'>
                                <div className='sicon'><MdOutlineArrowRightAlt /></div>
                                <p>25 Analytics Campaigns</p>
                            </div>
                            <div className='social-arr'>
                                <div className='sicon'><MdOutlineArrowRightAlt /></div>
                                <p>25 Analytics Campaigns</p>
                            </div>
                            <div className='social-arr'>
                                <div className='sicon'><MdOutlineArrowRightAlt /></div>
                                <p>25 Analytics Campaigns</p>
                            </div>
                            <div className='social-arr'>
                                <div className='sicon'><MdOutlineArrowRightAlt /></div>
                                <p>25 Analytics Campaigns</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Social;