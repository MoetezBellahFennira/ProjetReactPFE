import React from 'react';
import SidebarPartieAdmin from '../sideBar/SideBarPartieAdmin';
import Header from '../header/header';
import  './PageListeEnfantAdmin.css'
import ListeUser from './component/ListeUser';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button } from 'reactstrap';
import {Link} from "react-router-dom"
function PageListeUserAdmin() {
  return (
  
  <div className='PageContainer'>
  <div className="ContainerPartie1" >
    
  <SidebarPartieAdmin />
 </div>

 <div className="ContainerPartie2" >
      <Header role="Administrateur" />
      <Button className='divBtn' color="success" > <Link style={{textDecoration:'none',color:"white"}} to="/PageaddUserADMIN"><PersonAddIcon />Ajouter user</Link></Button>
      <br></br>
      <ListeUser />
       
</div>
</div>

);
}

export default PageListeUserAdmin;
