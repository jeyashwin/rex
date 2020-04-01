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


                 <div className="signInAbout box-about-intro col-md-5 mx-auto" style={{width: '400px'}}>
                        <form class="px-4 py-3">
                            <h4  className="text-center">
                                <strong >
                                    Sign In
                                </strong>
                            </h4>
                            <h5 className="text-center">    
                                to continue                           
                            </h5>

                            <div class="form-group">
                                <label for="exampleFormControlSelect1">
                                    Select Role
                                </label>
                                <select 
                                class="form-control" 
                                id="exampleFormControlSelect1">
                                    <option>Select</option>
                                    <option>Home Buyer</option>
                                    <option>Home Seller</option>
                                    <option>Agent</option>
                                    <option>Attorney</option>
                                    <option>Loan Officer</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="exampleDropdownFormEmail1">
                                    Email address
                                </label>
                                <input 
                                    type="email" 
                                    class="form-control" 
                                    id="exampleDropdownFormEmail1" 
                                    placeholder="email@example.com"
                                />
                            </div>
                            <div class="form-group">
                                <label for="exampleDropdownFormPassword1">
                                    Password
                                </label>
                                <input 
                                    type="password" 
                                    class="form-control" 
                                    id="exampleDropdownFormPassword1" 
                                    placeholder="Password"
                                />
                            </div>
                            <div class="form-check">
                                <input 
                                    type="checkbox" 
                                    class="form-check-input" 
                                    id="dropdownCheck"
                                />
                                <label 
                                    class="form-check-label" 
                                    for="dropdownCheck">
                                        Remember me
                                </label>
                            </div>
                            <button 
                                type="submit" 
                                class="btn btn-primary">
                                    Next
                            </button>
                        </form>
                            <div class="dropdown-divider"></div>
                                <Link 
                                    class="dropdown-item" 
                                    to="/createAccount">
                                        Create account
                                </Link>
                                <a 
                                    class="dropdown-item" 
                                    href="#">
                                        Forgot password?
                                </a>
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