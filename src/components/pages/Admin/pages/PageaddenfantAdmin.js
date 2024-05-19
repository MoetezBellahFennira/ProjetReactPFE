import React from 'react';
import SidebarPartieAdmin from '../sideBar/SideBarPartieAdmin';
import Header from '../header/header';
import  './PageListeEnfantAdmin.css'
import AddEnfant from './component/addEnfant';

function PageaddenfantAdmin() {
  return (
  
  <div className='PageContainer'>
  <div className="ContainerPartie1" >
    
  <SidebarPartieAdmin />
 </div>

 <div className="ContainerPartie2" >
      <Header role="Administrateur" />
      <AddEnfant />
       
</div>
</div>

);
}

export default PageaddenfantAdmin;
