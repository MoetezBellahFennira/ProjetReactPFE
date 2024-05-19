import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/home/home";
import Login from "./components/login/login.js";
import Apropos from "./components/Apropos/apropos"
import Contact from "./components/contact/reserver"

import EspaceWelcomeAdmin from "./components/pages/Admin/EspaceWelcomeAdmin";
import ListeEnfantADMIN from "./components/pages/Admin/pages/PageListeEnfantAdmin"
import AddEnfantADMIN from "./components/pages/Admin/pages/PageaddenfantAdmin"
import ListeUserADMIN from "./components/pages/Admin/pages/PageListeUserAdmin"
import AddUserADMIN from "./components/pages/Admin/pages/PageadduserAdmin"
import UpdateEnfantAdmin from "./components/pages/Admin/pages/PageupdateenfantAdmin"
import EspaceWelcomeParent from "./components/pages/Users/Parent/welcomeParent/EspaceWelcomeParent"
import EspaceWelcomeEmploye from "./components/pages/Users/Employer/welcomeEmploye/EspaceWelcomeEmployer"
import ListeGroupe from "./components/pages/Admin/pages/PageListeGroupeAdmin"
function App() {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/apropos' element={<Apropos />} />
          <Route exact path='/contact' element={<Contact />} />

          <Route exact path='/espaceAdmin' element={<EspaceWelcomeAdmin />} />
          <Route exact path='/listeEnfantADMIN' element={<ListeEnfantADMIN />} />
          <Route exact path='/addEnfantADMIN' element={<AddEnfantADMIN />} />
          <Route exact path='/PageListeUserAdmin' element={<ListeUserADMIN />} />
          <Route exact path='/PageaddUserADMIN' element={<AddUserADMIN />} />
          <Route exact path='/UpdateEnfant/:id' element={<UpdateEnfantAdmin />} />
          <Route exact path='/ListeGroupe' element={<ListeGroupe />} />

          <Route exact path='/espaceParent' element={<EspaceWelcomeParent />} />

          <Route exact path='/espaceEmploye' element={<EspaceWelcomeEmploye />} />



        </Routes>
      </BrowserRouter>

    </div>



  )
}

export default App;
