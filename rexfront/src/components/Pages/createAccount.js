import React, { Component } from 'react'
 
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SignIn from './SignIn';

class createAccount extends Component {
    render() {
        return ( 

            <div> 
            <SignInPage>  
             <div className="text-center xs-down mx-auto">
             {/* <div className="regular-container w-50 mx-auto">
                 <div className="box-about-intro"> */}


                 <div className="createAccountAbout box-about-intro col-md-5 mx-auto" style={{width: '400px'}}>
                 <form class="px-4 py-3 mx-auto">
                            <h4 className='mx-auto'>
                                <strong>
                                    Welcome
                                </strong>
                            </h4>
                            
                            <div class="form-group">
                                <label for="exampleFormControlSelect1">
                                    Select Role
                                </label>
                                <div class="dropdown show">
                                    <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Select role
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <a class="dropdown-item">Select</a>
                                        <Link class="dropdown-item" to="/createBuyer">Home Buyer</Link>
                                        <Link class="dropdown-item" to="/createSeller">Home Seller</Link>
                                        <Link class="dropdown-item" to="/createAgent">Agent</Link>
                                        <Link class="dropdown-item" to="/createAttorney">Attorney</Link>
                                        <Link class="dropdown-item" to="/createLoanOfficer">Loan Officer</Link>
                                    </div>
                                </div>
                            </div>
                            <button 
                                type="submit" 
                                class="btn btn-secondary"
                                >
                                    Next
                            </button>
                        </form>
                </div>


                 {/* </div>
             </div> */}
         </div>
         </SignInPage>
    </div>     
        );
    }
}
export default createAccount;

const SignInPage = styled.div`
.createAccountAbout {
    margin-top: 11rem;
    margin-bottom: 12rem;
    margin-left: 15rem;
    margin-right: 1rem;
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