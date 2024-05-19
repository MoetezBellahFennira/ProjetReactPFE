import React from 'react';
import  EspaceAdmin from '../../../images/EspaceAdmin.svg'
import Header from "./header/header"
import  './EspaceWelcomeAdmin.css'
import SidebarPartieAdmin from './sideBar/SideBarPartieAdmin';

function EspaceWelcomeAdmin() {
  return (
      <div className='EspaceContainer'>

    <div className="ContainerPartie1" >
         <SidebarPartieAdmin />
    </div>

    <div className="ContainerPartie2" >
        <Header role="Administrateur"/>
        <img className="EspaceEmployePic" src={EspaceAdmin} alt="Logo" />
   </div>

      </div>
  );
}

export default EspaceWelcomeAdmin;
