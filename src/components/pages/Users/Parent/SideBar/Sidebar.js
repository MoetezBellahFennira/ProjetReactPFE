import React, { Component } from 'react'
import Stack from '@mui/material/Stack';

import "./style.css"
const  Sidebar = () => {
   
const toggleMenu = ()=>{
   // navigation.classList.toggle('active');
    
  }
    return (
            <div className='SidebarRH'>
         <Stack direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={4}>

              <title>Sliding Action Menu</title>
              <div className="navigation">
                <div className="menu_toggle" />
                <div className="profile">
                  <div className="imgBx">
                  </div>
                </div>
                <ul className="menu">
                  <li>
                    <a href="#">
                      <span className="icon"><ion-icon name="person-outline" /></span>
                      <span className="text">Profile d'enfant</span> 
                    </a>
                  </li>
                  
                  <li>
                    <a href="#">
                      <span className="icon"><ion-icon name="settings-outline" /></span>
                      <span className="text">Parametre de compte</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon"><ion-icon name="help-circle-outline" /></span>
                      <span className="text">Support</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon"><ion-icon name="log-out-outline" /></span>
                      <span className="text">Logout</span>
                    </a>
                  </li>
                </ul>
              </div>
              </Stack>
            </div>
          );
        }
    

    export default Sidebar;