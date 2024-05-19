import React from 'react';
import SidebarPartieAdmin from '../sideBar/SideBarPartieAdmin';
import Header from '../header/header';
import  './PageListeEnfantAdmin.css'
import AddUser from './component/addUser';

function PageaddUserAdmin() {
  return (
  
  <div className='PageContainer'>
  <div className="ContainerPartie1" >
    
  <SidebarPartieAdmin />
 </div>

 <div className="ContainerPartie2" >
      <Header role="Administrateur" />
      <AddUser />
       
</div>
</div>

);
}

export default PageaddUserAdmin;
