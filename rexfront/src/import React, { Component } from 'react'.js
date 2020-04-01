import React, { Component } from 'react'
 
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class SignIn extends Component {
    render() {
        return ( 

            <div> 
            <SignInPage>  
             <div className="text-center-xs-down my-auto">
             {/* <div className="regular-container w-50 mx-auto">
                 <div className="box-about-intro"> */}


                 <div className="signInAbout box-about-intro col-md-5 mx-auto">
                         
                    </div>


                 {/* </div>
             </div> */}
         </div>
         </SignInPage>
    </div>     
        );
    }
}
export default SignIn;

const SignInPage = styled.div`
.signInAbout {
    margin-top: 3rem;
    margin-bottom: 5rem;
    position: relative;
    background-position: center 80%;
    background-size: cover;
    padding-top: 9rem;
    padding-right: 15rem;
    padding-bottom: 9rem;
    padding-left: 15rem;
    
    
}

 
.box-about-intro {
   
    padding: 50px 0;
    box-shadow: 0 24px 35px rgba(0, 0, 0, 0.1);
    // border-bottom: 1px solid rgba(0,0,0,0.1);
    position: relative;
    width: 60%
    background: #ffffff;
}`;