import React, { Component } from 'react'
import { InfoConsumer } from '../context';
import { Link } from 'react-router-dom'
import homePicture from '../../homePage.PNG'
import styled from 'styled-components'
import Info from '../Info';

class Home extends Component {
    render() {
        return ( 
                <div>
                    <img src={homePicture} class="img-fluid"/>
                    <HomePageInfo className="container">
               <div className="row">
                   <div className="col-md-12">
                       <div className="main">
                           <h1>Close a House Faster!</h1>
                           <h3>90 Days -> 7 Days</h3>
                           <div className="row mt-5">
                           <InfoConsumer>
                            {value => {
                                return value.info.map(item => {
                                    return <Info key={item.id} item={item} />;
                                });
                            }}
                            </InfoConsumer>

                           </div>
                           <div className="sub-actions">
                               <Link className="btn btn-outline-secondary btn-lg" to="/contacts">
                                   <i className="fas fa-envelope"/>
                                   &nbsp; Contact Us
                               </Link>
                           </div>
                       </div>
                   </div>
               </div>
            </HomePageInfo>
                     
                </div>
             




             
        );
    }
}

export default Home;

const HomePageInfo = styled.div`
    .main {
        padding: 40px 15px;
        text-align: center;
    }

    .sub {
        margin-top: 15px;
        margin-bottom: 15px;
    }

    .btn {
        margin-right: 10px;
    }
`;