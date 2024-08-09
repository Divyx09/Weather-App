import React from "react";
import icon from "../assets/images/icon.png";

const Header = () => {
  return (
    <div>
      <nav className='navbar header'>
        <a className='navbar-brand mx-5' href='#'>
          <img src={icon} width='50' height='50' alt='logo' className='mx-3' />
          <span>KeyForecast</span>
        </a>
      </nav>
    </div>
  );
};

export default Header;
