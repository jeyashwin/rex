import React, { Component } from 'react';
import NewsCard from '../NewsCard';
import aboutUsPicture from '../../AboutUs.PNG'
import Info from '../Info';
// import { Link } from 'react-router-dom'
import styled from 'styled-components'
import backImage from '../../AboutUs.PNG'

class AboutUs extends Component {
    render() {
        return (
            <div> 
            <HomePageInfo> 
            <div className="hero-about">
           <div className="small-container text-center">
                    <h1 className="big-headline hero-headline">
                         About us
                    </h1>
                </div>
             </div>
              
             <div className="text-center-xs-down my-auto">
             <div className="regular-container">
                 <div className="box-about-intro">
                     <div className="chapeau-story">OUR STORY</div>
                     <h2>A service to close your home faster and hassle free</h2>
                     <p 
                     className="medium-margin-top wow fadeInUp" 
                     // style="visibility: visible, animation-name: fadeInUp"
                     >
                         Sunt incididunt minim culpa ut est ad id ex. Mollit eu aliqua eu occaecat mollit labore est enim culpa ullamco exercitation reprehenderit est. Do cupidatat qui ullamco laborum cupidatat enim ipsum occaecat nisi eu veniam exercitation fugiat. Proident veniam pariatur dolor aute ipsum et in irure commodo aliquip ipsum. Magna velit sunt nisi et dolor tempor sunt veniam dolor laboris. Do elit irure esse fugiat cupidatat magna aliqua reprehenderit Lorem.
                         <br/>
                         <br/>
                         Sunt incididunt minim culpa ut est ad id ex. Mollit eu aliqua eu occaecat mollit labore est enim culpa ullamco exercitation reprehenderit est. Do cupidatat qui ullamco laborum cupidatat enim ipsum occaecat nisi eu veniam exercitation fugiat. Proident veniam pariatur dolor aute ipsum et in irure commodo aliquip ipsum. Magna velit sunt nisi et dolor tempor sunt veniam dolor laboris. Do elit irure esse fugiat cupidatat magna aliqua reprehenderit Lorem.
                     </p>
                 </div>
             </div>
         </div>
         </HomePageInfo>
         </div>

            

            
        );
    }
}

export default AboutUs;

const HomePageInfo = styled.div`
.hero-about {
 
    position: relative;
    background-position: center 80%;
    background-size: cover;
    padding: 9rem 0 11rem;
}

.big-headline {
    font-size: 50px;
}

.box-about-intro {
    margin-top: -70px;
    padding: 50px 0;
    box-shadow: none;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    position: relative;
    z-index: 5;
    background: #ffffff;
}
.chapeau-story {
    color: #1C85E8;
    font-size: 38px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
}

.box-about-intro h2 {
    
    margin-bottom: 50px;
    font-size: 50px;
    line-height: 1.2;
    text-align: center;
    margin-left: 20%;
    margin-right: 20%;
    box-sizing: border-box;

}

.box-about-intro p {
     
    font-size: 30px;    
    position: relative;
    z-index: 5;
    background: #ffffff;
    padding: 70px 100px;
    box-shadow: 0 24px 35px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
}

.text-center-xs-down {
    max-width: 70%;
    margin-left: 15%;
    margin-right: 15%;
}`;