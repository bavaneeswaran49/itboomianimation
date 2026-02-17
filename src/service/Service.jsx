import React from 'react'
import './Services.css'
import { FaArrowRightLong } from "react-icons/fa6";
import social from '../assets/social.png'
import { motion } from 'framer-motion';
const Service = () => {
    const change = {
        initial: {
            color: "grey",
            transition: { duration: 0.8 , ease: "easeInOut" }

        },
        hover: {
            color: "#53389e",
            transition: { duration: 0.8, ease: "easeInOut" }

        }
    }
    return (
        <>
            <section className='service'>
                <div className='container ser-container'>
                    <div className='service-title'>
                        <p className='service-p'>OUR SERVICES</p>
                    </div>
                </div>
                <h3 className='service-h3'>We Provide Best Services For You</h3>
                <p className='service-p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias veniam expedita<br></br> dolorum velit accusantium fugit repudiandae placeat illum quisquam distinctio officiis.</p>
                <div className='container'>
                    <div className='row d-flex justify-content-center gap-4'>
                        <div className='col-lg-3 col-md-4 col-sm-12 service-card'>
                            <motion.div
                                initial="initial"
                                whileHover="hover"
                            >
                                <div className='card-contaent'>
                                    <img src={social} alt='service' className='service-image' />

                                    <motion.h3 className=' service-h3-1'
                                        variants={change}>
                                        Email Marketing
                                    </motion.h3>
                                    <p className='service-p2'>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam natus iure necessitatibus molestias
                                    </p>
                                    <motion.div className=' service-btn'
                                        variants={change}>
                                        <h3 className='service-h3-2'>Read More</h3>
                                        <div className='service-icon'>
                                            <FaArrowRightLong />
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-12 service-card'>
                            <motion.div
                                initial="initial"
                                whileHover="hover"
                            >
                                <div className='card-contaent'>
                                    <img src={social} alt='service' className='service-image' />

                                    <motion.h3 className=' service-h3-1'
                                        variants={change}>
                                        Email Marketing
                                    </motion.h3>
                                    <p className='service-p2'>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam natus iure necessitatibus molestias
                                    </p>
                                    <motion.div className=' service-btn'
                                        variants={change}>
                                        <h3 className='service-h3-2'>Read More</h3>
                                        <div className='service-icon'>
                                            <FaArrowRightLong />
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-12 service-card'>
                            <motion.div
                                initial="initial"
                                whileHover="hover"
                            >
                                <div className='card-contaent'>
                                    <img src={social} alt='service' className='service-image' />

                                    <motion.h3 className=' service-h3-1'
                                        variants={change}>
                                        Email Marketing
                                    </motion.h3>
                                    <p className='service-p2'>
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam natus iure necessitatibus molestias
                                    </p>
                                    <motion.div className=' service-btn'
                                        variants={change}>
                                        <h3 className='service-h3-2'>Read More</h3>
                                        <div className='service-icon'>
                                            <FaArrowRightLong />
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Service 