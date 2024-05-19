import React from 'react';
import { useState } from 'react';
import Axios from 'axios';
import Logo from '../../images/login.jpg'
import { useNavigate } from "react-router-dom";
import Nav from "../header/Header"

import { Button,FormGroup,Form,Input,Label, Navbar } from 'reactstrap';
import EmailIcon from '@mui/icons-material/Email';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import  './login.css'


function LoginPage() {

  const history = useNavigate();
  const [ email, SetEmail ]  = useState('');
  const [ motDePasse, SetPassword ]  = useState('');

  

  const login = () => {
    Axios.post("http://localhost:4000/auth/login", {
      email : email,
      motDePasse : motDePasse
    }).then((response) => {
      console.log(response.data);

      if (response.data.token) {
        localStorage.setItem("token", JSON.stringify(response.data.token))
        localStorage.setItem("user", JSON.stringify(response.data.user));
        if(response.data.user.type=== "Admin"){
          history("/espaceAdmin");
        }
        else if(response.data.user.type==="Employer" ){
          history("/espaceEmployer");
        }else{
          history("/espaceParent");
        }
      }
     
  
    }).catch (error => {
      console.log(error)
      window.alert("Verifier l'email ou le mot de passe !!")
  });
  }; 


  return (
            <div>
              <Nav/>
         <div className='LoginContainer'>
              
             <div className='LoginContainer1'>

                <div/><img className="Logo" src={Logo} alt="Logo" />
                 <h2 className='textInscri'> Votre plateforme pour simplifier la gestion . </h2> <br /><br />
                   <div className="ImageLoginPagePosition">
                    </div>

             </div>

             <div className='LoginContainer2'>

             <h1 > Connectez-vous à  <span> Notre plateforme ! </span> </h1>
             <Form>
             <FormGroup floating>
                       <Input  id="Email" name="Email" placeholder="Email@email.com" type="email" onChange = {(e) =>{
                               SetEmail(e.target.value);
                            }}/>
                         <Label for="Email">
                            <div className="input">  <EmailIcon  /> <p className="txtInput"> Email..  </p> </div>
                        </Label>
                     </FormGroup>
    
                     <FormGroup floating>
                       <Input  id="motDePasse" name="motDePasse" placeholder="*********" type="password" onChange = {(e) =>{
                               SetPassword(e.target.value);
                            }} />
                          <Label for="Password">
                              <div className="input">  <VpnKeyIcon/> <p className="txtInput" > Mot de passe.. </p> </div>
                          </Label>
                     </FormGroup>

                <Button block color="primary" size="lg" onClick={login} > Se Connecter </Button>

             </Form>
              
             </div>
         </div></div>
  )
}

export default LoginPage;
