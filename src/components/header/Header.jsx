
import React  from 'react';
import './header.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import 'animate.css';
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <div className="container header__container" >
        <img src="/images/logo.png" className='logo wow animate__backInDown '  data-wow-duration="2s" data-wow-delay="0.1s" alt="logo" style={{ width: '350px', height: '350px', }} />
         <NavLink to="/Signin"><h5 className='wow animate__bounceInLeft' data-wow-duration="2s" data-wow-delay="0.2s"  >Hello I'm</h5></NavLink>
        <h1 className='wow animate__bounceInRight ' data-wow-duration="2s" data-wow-delay="0.3s">Ahmed Tag Eldwal</h1>
        <h5 className="text-light wow animate__fadeInUp" data-wow-duration="2s" data-wow-delay="0.4s">Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" className='wow animate__fadeInUp' data-wow-duration="2s" data-wow-delay="0.5s" />
        </div>

        <a href="#contact" className='scroll__down wow animate__fadeInRight' data-wow-duration="2s" data-wow-delay="0.1s" >Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;