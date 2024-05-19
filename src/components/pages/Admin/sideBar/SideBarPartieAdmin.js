import React from 'react';
import Logo from '../../../../images/autism-logo2.png'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LogoutIcon from '@mui/icons-material/Logout';
import "./SideBarPartieAdmin.css"
import { Link, useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

function SidebarPartieAdmin() {

  const history = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    history("/");
  };

  return (

    <div className='SidebarRH'>


      <img className="LogoSide" src={Logo} alt="Logo" />

      <Stack direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={4}>

        <Button  className='btn'> <h5>  <Link  to="/listeEnfantADMIN"><SchoolIcon /> Liste des Enfants  </Link> </h5> </Button>
        <Button className='btn'> <h5>  <Link to="/PageListeUserAdmin"><PersonIcon /> Liste des User  </Link> </h5> </Button>
        <Button className='btn'> <h5>  <Link  to="/listeGroupe"><GroupIcon /> Liste des Groupes </Link> </h5>  </Button>
        <Button className='btn'> <h5>  <Link  to="/listeEvenementADMIN"><EventIcon /> Liste Evenements </Link> </h5> </Button>
        <Button className='btn'> <h5>  <Link  to="/ListeEmploisADMIN"><AccessTimeIcon /> Liste Emplois  </Link> </h5>  </Button>

      </Stack>

      <Button variant="outlined" startIcon={<LogoutIcon />} onClick={logout}>  Deconnecté
      </Button>

    </div>

  );
}

export default SidebarPartieAdmin;
