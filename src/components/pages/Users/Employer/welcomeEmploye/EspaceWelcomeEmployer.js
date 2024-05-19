import React from 'react';
import  EspaceParent from '../../../../../images/EmployeEspace.svg'
import Header from '../Header/header';
import  './EspaceWelcomeEmploye.css'
import SidebarPartieEmploye from "../SideBar/Sidebar"

function EspaceWelcomeEmploye() {
  return (
      <div className='EspaceContainer'>

    <div className="ContainerPartie1" >
         <SidebarPartieEmploye/>
    </div>

    <div className="ContainerPartie2" >
        <Header role="Educatrice"/>
        <img className="EspaceEmployePic" src={EspaceParent} alt="Logo" />
   </div>

      </div>
  );
}

export default EspaceWelcomeEmploye;
