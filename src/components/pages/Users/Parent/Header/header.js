import React from 'react';
import Employe from "./../../../../../images/Parent_img.png"

import  './header.css'

function HeaderPartieEmploye(props) {
  return (
     <div className='HeaderEmploye'>
         <h2 className='TxtHeaderEmploye'> Bienvenue dans votre espace <span>{props.role}</span> ... </h2>
        <img className="EmployeIcon" src={Employe} alt="IconEmploye" />
     </div>
  );
}

export default HeaderPartieEmploye;
