import React from 'react';
import SidebarPartieAdmin from '../sideBar/SideBarPartieAdmin';
import Header from '../header/header';
import  './PageListeEnfantAdmin.css'
import ListeGroupe from './component/ListeGroupe';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button } from 'reactstrap';
import {Link} from "react-router-dom"
function PageListeEmployeAdmin() {
  return (
  
  <div className='PageContainer'>
  <div className="ContainerPartie1" >
    
  <SidebarPartieAdmin />
 </div>

 <div className="ContainerPartie2" >
      <Header role="Administrateur" />
      
      <Button className='divBtn' color="success" > <Link style={{textDecoration:'none',color:"white"}} to="/addEnfantADMIN"><PersonAddIcon />Ajouter Groupe</Link></Button>
      <ListeGroupe />
     <br/>
       
</div>
</div>

);
}

export default PageListeEmployeAdmin;
