import React, { Component } from 'react'
import "./reserver.css"
import cover from "./images/cover.jpg"
import Footer from "../footer/Footer"
import Header from '../header/Header'
export default class apropos extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="desktop-1screen">
          <div className="overlap-group6">

            <img className="image-1" src={cover} alt='cover' />
            <div className="rectangle-1">
            </div>
            <div className="rectangle-2">

              <div style={{ "margin-top": "-470px", "margin-left": "50px", "color": "white", "font-size": "80px", "font-weight": "lighter", "text-align": "center", "weight": "2000px" }}>
                Réservez pour votre fils, et laissez-nous le reste
              </div>
              <div>
                <div className='labe2'>
                  <input type="text" id="Utilisateur" name="Nom" style={{ "height": "41px", "width": "720px", "opacity": "0.1" }} />
                </div>
                <div style={{ "margin-top": "350px", "margin-left": "180px", "font-size": "21px" }}>
                  Nom du parent
                </div>
              </div>

              <div>
                <div className='labe1'>
                  <input type="text" id="Utilisateur" name="Nom" style={{ "height": "41px", "width": "720px", "opacity": "0.1" }} />
                </div>
                <div style={{ "margin-top": "100px", "margin-left": "180px", "font-size": "21px" }}>
                  Prénom du parent
                </div >
              </div>

              <div>
                <div className='labe3'>
                  <input type="text" id="Utilisateur" name="Nom" style={{ "height": "41px", "width": "720px", "opacity": "0.1" }} />
                </div>
                <div style={{ "margin-top": "100px", "margin-left": "180px", "font-size": "21px" }}>
                  E-Mail
                </div >
              </div>

              <div>
                <div className='labe4'>
                  <input type="text" id="Utilisateur" name="Nom" style={{ "height": "41px", "width": "720px", "opacity": "0.1" }} />
                </div>
                <div style={{ "margin-top": "100px", "margin-left": "180px", "font-size": "21px" }}>
                  Numéro de téléphone
                </div >
              </div>
              <div style={{ "margin-top": "150px", "margin-left": "390px", "font-size": "21px" }}>
                Voulez-vous prendre rendez-vous ?
              </div >
              <div className='boutton' >
                <input class="favorite styled" type="button" value="Reserver" className='reserver' style={{ "font-size": "21px" }}></input>
              </div>
            </div>

          </div>
          
        </div>
        <div><Footer /></div>
      </div>

    )
  }
}
