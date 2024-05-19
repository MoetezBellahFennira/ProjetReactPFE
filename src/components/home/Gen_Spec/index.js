import React,{ useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";
import img1 from '../../../images/enf7.jpg'
import img2 from '../../../images/enf8.jpg'
import img3 from '../../../images/enf9.jpg'

import { Wrapper,Content } from "./spec.style";

const Specs = () =>{

    useEffect(() => {
        AOS.init({duration: 1000});
        AOS.refresh();
    }, []);


    return(
        <Wrapper>
            <Content>
                <div className="row" >
                    <div className="col" data-aos='fade-right'> 
                        <img src={img3} alt="game"/>
                    </div>
                    <div className="col text" data-aos='fade-left'>
                        <h3> Game from Anywhere </h3>
                        <p> jouer durant ..... </p>
                    </div>
                </div>
                <div className="row" >
                    <div className="col text1" data-aos='fade-right'>
                        <h3> visite de docteur specialiste </h3>
                        <p> occupation avec les docteurs . </p>
                    </div>
                    <div className="col" data-aos='fade-left'> 
                        <img src={img2} alt="connected"/>
                    </div>
                </div>
                <div className="row" >
                    <div className="col" data-aos='fade-right'> 
                        <img src={img1} alt='enfant'/>
                    </div>
                    <div className="col text" data-aos='fade-left'>
                        <h3> Your Best Audio System </h3>
                        <p> Transformez l'avenir de votre enfant avec nous </p>
                    </div>
                </div>
                
            </Content>
        </Wrapper>
    )
}

export default Specs;