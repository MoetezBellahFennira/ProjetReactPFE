import React, { Component } from 'react'
import './footer.css'
import facebook from "../Apropos/images/facebook.png"
import whatsapp from "../Apropos/images/whatsapp.png"
import instagram from "../Apropos/images/instagram.png"
import youtube from "../Apropos/images/youtube.png"
import pin from "../Apropos/images/pin.png"
import smartphone from "../Apropos/images/smartphone.png"
import fax from "../Apropos/images/fax.png"
import email from "../Apropos/images/email.png"
import clock from "../Apropos/images/clock.png"
import kid from "../Apropos/images/kid.jpg"

export default class Footer extends Component {
  render() {
    return (
      <div>
       
  <div style={{
            "content": "",
            "flex": "1 1",
            "border-bottom": "6px solid #009017",
            "margin": "auto",
            "margin-bottom":"-53px"
       }}>
  </div>
  <div className="overlap-group4"style={{"width":"auto"}}>
    <div className='rectangle-9' >
    <img  src={kid} alt='kid'/>
  </div>
    <div className="rectangle-9">
      <span style={{"width": "260px", "margin-left":"200px" , "margin-top":"30px","color":"white"}} className="p1">
          <span style={{"font-weight":"bold", "font-size":"24px" ,"color":"white"}}>Notre centre<br />
          </span>
          <span style={{"color":"white"}}>
            <br />Fondé en 2001, le Centre de l'Autisme de Nabeul est l'organisation à but non lucratif la plus grande, la plus innovante et
            la plus complète de Tunisie au service des enfants atteints de troubles du spectre autistique.
          </span>
      </span>

      <div >
        <span style={{"width": "400px", "margin-left":"595px" , "margin-top":"30px","color":"white"}} className="p2">
            <span style={{"font-weight":"bold", "font-size":"24px", "color":"white"}}>Contacts<br />
            </span>
            <span style={{"position": "absolute" , "margin-left":"30px","color":"white"}}>
            
              <br />R27 et Rte Périph. Nabeul - Hammamet<br />+216 55489 246<br />+216 54 487 257<br />
              autism.nabeul@gmail.com<br /> Lun - Jeu : 7h30 - 15h30
            </span>
        </span>

      </div>

      <div>
        <span style={{"width": "360px", "margin-left":"1050px" , "margin-top":"30px","color":"white"}} className="p3">
          <span style={{"font-weight":"bold", "font-size":"24px" ,"color":"white"}}>Services<br /></span>
          <span  style={{"color":"white"}}>       
            <br />Programmes éducatifs<br />Programme de sensibilisation<br />Training and outreach team<br />Séances régulières de
            psychothérapie<br />Activer et des événement
          </span>
        </span>
      </div>
      <div className='logos'>
        <img src={pin} alt='pin'/><br/>
        <img src={smartphone} alt='smartphone'/><br/>
        <img src={fax} alt='fax'/><br/>
        <img src={email} alt="email"/><br/>
        <img src={clock} alt="clock"/>
      </div>
      <div style={{"color":"white", "margin-top":"250px", "margin-left":"630px"}}>
      <p>Copyright © Autism Center</p>
      </div>
     
      <div style={{"margin-top":"-180px", "margin-left":"630px"}}>
        <img style={{"height":"35px", "Weight":"35px"}} src={facebook} alt='facebook'/>
        <img style={{"height":"35px", "Weight":"35px","margin-left":"20px"}} src={whatsapp} alt='whatsapp'/>
 
        <img style={{"height":"35px", "Weight":"35px","margin-left":"20px"}} src={instagram} alt='instagram' />
        <img style={{"height":"35px", "Weight":"35px","margin-left":"20px"}} src={youtube} alt='youtube'/>
      </div> <br/>
      <hr style={{ 
        "display": "block",
        "margin-left":"197px",
        "width":"1100px",
        "height": "1px",
        "border-top": "2px solid #ccc",
        }}/>
    </div>
  
  </div>
</div>
    )
  }
}
