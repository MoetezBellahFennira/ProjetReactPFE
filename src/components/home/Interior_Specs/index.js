import React,{useEffect} from "react";
import AOS from 'aos'
import "aos/dist/aos.css";

import { Wrapper } from "./interior.style";

const Interior = () =>{

    useEffect(() => {
        AOS.init({duration: 1400});
    }, []);

    return(
        <Wrapper>
            <div className="title" >
                <h1 data-aos='fade-up' >All-News</h1>
            </div>
        </Wrapper>
    )
}

export default Interior;