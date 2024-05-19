import React from 'react';
import  EspaceParent from '../../../../../images/EspaceRH.svg'
import Header from '../Header/header';
import  './EspaceWelcomeParent.css'
import SidebarPartieParent from "../SideBar/Sidebar"

function EspaceWelcomeAdmin() {
  return (
      <div className='EspaceContainer'>

    <div className="ContainerPartie1" >
         <SidebarPartieParent/>
    </div>

    <div className="ContainerPartie2" >
        <Header role="Parent"/>
        <img className="EspaceEmployePic" src={EspaceParent} alt="Logo" />
   </div>

      </div>
  );
}

export default EspaceWelcomeAdmin;
