import React, { Component } from 'react'
import "./apropos.css"
import cover from "./images/cover.jpg"
import img3 from "./images/img3.png"
import img4 from "./images/img4.png"
import tunisia from "./images/tunisia.png"
import leadership from "./images/leadership.png"
import vision from "./images/vision.png"
import history from "./images/history.png"
import Footer from "../footer/Footer"
import HomeNavbar from '../header/Header'

export default class apropos extends Component {
  render() {
    return (
        <div>
          <div><HomeNavbar/></div>
  <div className="overlap-group6">
    
    <img className="image-1" src={cover} alt='cover'/>
    <div className="rectangle-1"></div>
    <div className="rectangle-2">
    
    <img className="ellipse-3" src={img3} alt='img3'/>
    <div className="text-image3">
      La source de notre préoccupation pour les personnes ayant des besoins spéciaux est d'accorder à chaque individu de notre société
      l'attention et les soins qu'il mérite
    </div>
    <div style={{"margin-top":"-540px", "color":"white", "font-size":"80px","font-weight": "lighter"}}>À PROPOS DE NOUS</div>
  </div>

  </div>
  <div className="overlap-group">
    
    <div className="rectangle-3">
    <img className="ellipse-3-1" src={img4} alt='img4'/>
    <div className="text-image3-2">
      <span>
        <span style={{"font-weight":"bold", "font-size":"24px" }}>Dr Anouar JARRAYA
        <div style={{"font-size":"18px", "color":"#009017" }}>Fondateur</div></span><br />
        <span>Professeur Anouar JARRAYA<br />Enfants et Adulte<br />Sexologie – Training mental – Psychothérapie<br />D’inspiration analytique
          (PIP)<br /></span>
          <span></span>
      </span>
    
    
    </div>
    </div>
  </div>
  <div className="overlap-group2">
    <div className="overlap-group7">

      <div >
      <div style={{"font-weight":"bold", "font-size":"24px","color":"black" }}>Au début</div><br /><br />Il y a plusieurs années, un père avait du mal à trouver une réponse aux difficultés inexpliquées de son
        fils.<br /><br />Il est finalement arrivé lors d'un voyage en famille dans un centre commercial de Singapour où un stand a été
        installé dans le cadre d'une campagne de sensibilisation. C'est devenu son introduction à l'autisme.<br /><br />De retour en
        Tunisie, il a cherché une aide professionnelle pour les enfants diagnostiqués avec l'autisme, et n'en a trouvé aucune.<br /><br />Il
        a donc commencé sa campagne pour y remédier, consacrant ses compétences et son temps libre à rencontrer des représentants du
        gouvernement et à faire pression pour la cause de l'autisme. Ses efforts sont finalement récompensés en 2001 par un décret
        d'ouverture d'un centre spécialisé autisme, le Centre Tunisie Autisme.<br />L'expérience personnelle en tant que parent l'avait
        motivé à travailler sans relâche et à surmonter des obstacles sans fin, pour en savoir plus sur l'autisme et l'utiliser pour aider
        d'autres familles dans la même situation.<br /><br />C'est avec ce même esprit de détermination et de compassion que lui et tout le
        personnel et les membres du conseil d'administration du centre continuent de travailler, offrant les meilleurs services possibles
        aux enfants diagnostiqués avec l'autisme en Tunisie.
      </div>
    </div>
    <img className="line-1" src={tunisia} alt='tunisia' />
  </div>
  <div className="overlap-group-container">
    <div className="overlap-group1">
      <img className="leadership-1" src={leadership} alt='leadership'/>
      <div style={{"width": "360px", "margin-left":"30px" , "margin-top":"30px"}}>
        <span>
          <span style={{"font-weight":"bold", "font-size":"24px" }}>Mission<br /><br /></span>
          <span style={{"color":"black"}}>
            Intégrer avec succès les enfants autistes dans notre communauté grâce à des approches holistiques de leur éducation et de leurs
            interventions thérapeutiques&nbsp;; ainsi que nos efforts ciblés pour sensibiliser la société à l'autisme.<br /></span>
        </span>
      </div>

    </div>
    <div className="overlap-group5">
      <div className="rectangle-6">
      <img className="vision-1" src={vision} alt='vision.png'/>
      <div style={{"width": "360px", "margin-left":"30px" , "margin-top":"30px"}}>
        <span>
          <span style={{"font-weight":"bold", "font-size":"24px" }}>Vision<br /><br /></span>
          <span style={{"color":"black"}}>
            Un centre d'excellence disposant de professionnels hautement qualifiés pour fournir des programmes fondés sur des preuves
            et accrédités pour soutenir les personnes autistes et leurs familles.<br /></span>
            <span className="span2roboto-normal-black-20px"></span>
        </span>
      </div>

    </div>
    </div>
  </div>

  <div className="overlap-group3">
    <div className="rectangle-7">
    <img className="history-1" src={history} alt='history.png' />
    <div style={{"width": "860px", "margin-left":"30px" , "margin-top":"25px"}}>
      <span>
        <span style={{"font-weight":"bold", "font-size":"24px" }}>Histoire<br /><br /></span>
        <span style={{"color":"black"}}>
          Dubai Autism Centre (DAC) est une organisation à but non lucratif fondée par un décret émis par H.H. Sheikh Maktoum Bin Rashid Al
          Maktoum en 2001. Initialement, le centre fonctionnait comme un centre de ressources/conseils avec 3 membres du personnel et en
          janvier 2003 a été lancé comme centre d'intervention.<br />En 2017, le DAC a ouvert son nouveau bâtiment sur une superficie de
          91.000 mètres carrés avec une capacité d'environ 238 enfants. Le nouveau centre a été conçu sur la base des dernières normes
          internationales pour offrir un environnement éducatif spécial aux enfants autistes.</span>
      </span>
    </div>
    </div>
</div>


  <Footer/>
</div>
      
    )
  }
}
