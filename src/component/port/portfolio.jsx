import React from 'react'
import './portfolio.css'
import { IoMdMenu } from "react-icons/io";
import { FaCode } from "react-icons/fa";
import Myimage from '../assets/my img.jpg';
import Projectimage from '../assets/projectimg.jpg'
import { FaExternalLinkAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";




function portfolio() {
 
 

  return (
    <>
    {/* home page */}
    <header className="header">
      <a href="" className="logo">Portfolio</a>
      <IoMdMenu id='menu-icon' />

      <nav className="navbar">
        <a href="#home" className='active'>Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Porfolio</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <section className="home" id="home">
      <div className="home-content">
        <h3>Hello,I am</h3>
        <h1>S.Abilash</h1>
        <h3>And I'm a <span>Frontend developer</span></h3>
        <p>I create modern, responsive websites and web applications using HTML, CSS, JavaScript, and frameworks like React. I focus on building intuitive, user-friendly experiences.</p>
      </div>

      <div className='home-img'>
        <img src={Myimage} width={350} height={350} style={{borderRadius:"58%"}} alt="" />
      </div>

    </section>

    {/* about page */}

    <section className='about' id='about'>
      <div className="about-img">
      <img src={Myimage} width={350} height={350} style={{borderRadius:"58%"}} alt="" />
      </div>
      
      <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>Frontend Developer</h3>
        <p>Hi, I'm Abilash, a frontend developer eager to bring creative ideas to life. I’m passionate about building clean, efficient, and visually appealing websites. I have a solid foundation in HTML, CSS, and JavaScript, and I’m learning to work with modern frameworks like React and Vue. I’m dedicated to creating intuitive, responsive user interfaces that look great on any device. I enjoy solving challenges and finding simple, elegant solutions to problems. <br /> <br /> Skills : <br /> <br />
        <ul className='ulist'>
          <li>HTML, CSS, JavaScript</li>
          <li>React</li>
          <li>Responsive Design</li>
        </ul>
        </p>
        <a href="#contact" className="btn">Hire Me</a>
      </div>
    </section>

    {/* services page */}

    <section className="services" id="services">
      <h2 className="heading">Our <span>Services</span></h2>
      <div className="services-container">
        <div className="services-box">
        <FaCode className='bx-code-alt' />
        <h3>Web Development</h3>
        <p>As a passionate frontend developer, I offer a range of services aimed at creating engaging, responsive, and user-friendly websites. I focus on turning your ideas into reality, ensuring each project is crafted with care and attention to detail. <br /> <br /> Here’s what I can help you with:
        <br /> <br />I design and develop websites tailored to your needs, focusing on clean, modern design and seamless functionality. Whether you need a personal website or a small business page, I’ll ensure it’s built to impress.</p>
        <a href="#contact" className="btn">Connect With Us</a>
        </div>

        {/* <div className="services-box">
        <FaCode className='bx-code-alt' />
        <h3>Web Development</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat dicta earum quidem quibusdam reiciendis qui nulla beatae et laudantium quisquam sit aut necessitatibus nobis aliquam, non odit obcaecati mollitia optio!</p>
        <a href="#" className="btn">Read More</a>
        </div>

        <div className="services-box">
        <FaCode className='bx-code-alt' />
        <h3>Web Development</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat dicta earum quidem quibusdam reiciendis qui nulla beatae et laudantium quisquam sit aut necessitatibus nobis aliquam, non odit obcaecati mollitia optio!</p>
        <a href="#" className="btn">Read More</a>
        </div> */}
      </div>
    </section>

    {/* portfolio page */}

    <section className="portfolio" id="portfolio">
      <h2 className="heading">My<span>Project</span></h2>

      <div className="portfolio-container">
        <div className="portfolio-box">
          <img src={Projectimage}alt="" />
          <div className="portfolio-layer">
            <h4>Education Landing Page</h4>
            <p>Welcome to our dynamic learning platform, where your growth and success are our top priorities. Whether you’re a student aiming to build foundational knowledge, a professional seeking career advancement, or a lifelong learner exploring new passions, we provide a wide variety of courses designed to meet your needs. With guidance from expert instructors, interactive content, and the latest learning tools, you'll gain the skills and confidence to excel. Begin your educational journey with us today and unlock a world of endless possibilities!git</p>
            <a href="https://codeabi-07.github.io/Education-landing-page/" className="bx-link-external"><FaExternalLinkAlt className='link' />
            </a>
          </div>
        </div>
      </div>
    </section>

    {/* contact page */}

    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me!</span></h2>


      <div className='geomap'>
        <h2>Location <FaLocationDot /></h2>
    
       <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d6981.260749651817!2d80.05757282408082!3d12.86470581732265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1742192743901!5m2!1sen!2sin"></iframe>

      </div>

      <div className="details">
        <h3> <MdEmail className='mail' /> Email : <a href="mailto:abilashs2410@gmailcom">abilashs2410@gmail.com</a></h3>
        <h3> <FaPhoneAlt className='phone' /> Phone Number : <a href="tel:7305464851">7305464851</a></h3>
        <h3><FaWhatsapp className='whatsapp' /> Whatsapp : <a href="https://wa.me/7305464851">7305464851</a></h3>
      </div>

    </section>

    {/* footer page */}

    <footer className="footer">
      <div className="footer-text">
        <p>Copyright &copy;2025 by abilash | All Rights Reserved</p>
      </div>

      <div className="footericontop">
        <a href="#home"><FaArrowUp className='uparrow' />
        </a>
      </div>
    </footer>

    </>
  )

  // let  header=document.querySelector('header');

  // header.classList.toggle('sticky',window.scrollY>100);


  // let menuIcon=document.querySelector('#menu-icon');
  // let navbar=document.querySelector('.navbar');

  // menuIcon.onClick=()=>{
  //   menuIcon.classList.toggle(<IoMdClose />);
  //   navbar.classList.toggle('active');
  // };
}

export default portfolio;
