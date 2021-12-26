import React, { Component } from 'react';
import './Home.css';
import { user } from "../Join/Join";
import Headerrr from "../Headerrr/Headerrr";
import Carouselll from "../Carouselll/Carouselll";
import BckGround from "../../Images/Ideate.png";

class Home extends Component {
render() {
    console.log(`Welcome ${user}`);
    return (
    <div className='chatPage'>
    <Headerrr />
    <Carouselll />
    <div className='divsec'>
        <img className='bckImg' src={BckGround} alt="" />
        <span className='bckspan'>Note:<br/> This website is created only for the author's education and learning purpose and makes no
            representation about the content and suitability of this information for any purpose.
            This site disclaims liability and takes no responsibility for any damages that arise from acting upon the information provided on this website. </span>
    </div>
    </div>)
}
}

export default Home;
