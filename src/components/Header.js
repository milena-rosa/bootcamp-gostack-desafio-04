import React from 'react';

import './Header.css';
import logo from '../assets/facebook.png';
import profile from '../assets/profile.png';

function Header() {
  return (
    <div className="header_box">
      <img src={logo} width="121" height="24" alt="facebook logo" />
      <div className="profile">
        <p className="profile_title">Meu perfil</p>
        <img src={profile} width="24" height="24" alt="profile icon" />
      </div>
    </div>
  );
}

export default Header;
