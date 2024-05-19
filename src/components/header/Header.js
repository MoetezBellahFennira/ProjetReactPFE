import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import logo from '../../images/autism-logo3.png'


const Header = () => {
  return (
    <>
      <Nav>
        
        <NavLink to='/'><div className='logo'>
        <img src={logo} alt='logo'/></div>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activestyle="true">
            Acceuil
          </NavLink>
          <NavLink to='/apropos' activestyle="true">
            Apropos
          </NavLink>
          <NavLink to='/contact' activestyle="true">
            Contact
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Header;
