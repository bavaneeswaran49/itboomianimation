import React from 'react'
import './Project.css'
import prj1 from '../assets/project1.jpg'
import prj2 from '../assets/project2.jpg'
import prj3 from '../assets/project3.jpg'
import prj4 from '../assets/project4.png'
const Project = () => {
    return (
        <>
            <section className='project'>
                <div className='container project_container'>
                    <div className='project-title'>
                        <div className='project-image'>
                            <p className='social-p'>Our Projects</p>
                        </div>
                    </div>
                    <h3 className='project-title'>Project We Have Done</h3>
                    <p className='project-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='row project-row'>
                        <div className='col-lg-3 col-md-4 col-sm-12 project-col'>
                           <img src={prj1} alt='project' className='project-image1' />
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-12 project-col'>
                           <img src={prj2} alt='project' className='project-image1' />
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-12 project-col'>
                            <img src={prj3} alt='project' className='project-image1' />
                        </div>
                        <div className='col-lg-3 col-md-4 col-sm-12 project-col'>
                            <img src={prj4} alt='project' className='project-image1' />
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}
export default Project