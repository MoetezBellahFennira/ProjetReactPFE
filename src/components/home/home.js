import React, { Component } from 'react'
import HomeNavbar from '../header/Header'
import Footer from '../footer/Footer'
import "./app.css"
import Interior from './Interior_Specs/index'
import Specs from './Gen_Spec/index'
import CarouselContainer from '../homeSlider/CarouselContainer'
export default class home extends Component {
  render() {
    return (
      <div>
        <header> <HomeNavbar/></header>
          <div style={{"boxSizing": "border-box" }}> <CarouselContainer /></div>
          <div><Interior/></div>
          <div><Specs/></div>
          <div><Interior/></div>
         <footer style={{"margin-left":"17px"}}><Footer /></footer>
    </div>
    )
  }
}
