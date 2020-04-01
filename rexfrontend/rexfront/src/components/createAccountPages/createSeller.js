import React, { Component } from 'react'
 
import { Link } from 'react-router-dom'
import styled from 'styled-components'

class createSeller extends Component {
    render() {
        return ( 
            <div> 
            <CreateSellerPage>  
             <div className="text-center-xs-down my-auto">
             {/* <div className="regular-container w-50 mx-auto">
                 <div className="box-about-intro"> */}


                 <div className="signInAbout box-about-intro col-md-5 mx-auto" style={{width: '400px'}}>
                        <form class="px-4 py-3">
                            <h4  className="text-center">
                                <strong >
                                    Hi Seller!
                                </strong>
                            </h4>
                            
                            <div class="form-group">
                                <label for="exampleDropdownFormFirstName">
                                    First name
                                </label>
                                <input 
                                    type="first name" 
                                    class="form-control" 
                                    id="exampleDropdownFormFirstName" 
                                    placeholder="first name"
                                />
                            </div>
                            <div class="form-group">
                                <label for="exampleDropdownFormLastName">
                                    Last name
                                </label>
                                <input 
                                    type="last name" 
                                    class="form-control" 
                                    id="exampleDropdownFormLastName" 
                                    placeholder="Last name"
                                />
                            </div>
                            <div class="form-group">
                                <label for="exampleDropdownFormPhone">
                                    Phone number
                                </label>
                                <input 
                                    type="phone" 
                                    class="form-control" 
                                    id="exampleDropdownFormPhone" 
                                    placeholder="(111)-234-5678"
                                />
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
                            <div class="form-group">
                                <label for="exampleDropdownFormPassword2">
                                    Confirm Password
                                </label>
                                <input 
                                    type="password" 
                                    class="form-control" 
                                    id="exampleDropdownFormPassword2" 
                                    placeholder="Password"
                                />
                            </div>
                             
                            <button 
                                type="submit" 
                                class="btn btn-primary">
                                    Submit
                            </button>
                        </form>
                             
                    </div>


                 {/* </div>
             </div> */}
         </div>
         </CreateSellerPage>
    </div>
                    
        );
    }
}
export default createSeller;

const CreateSellerPage = styled.div`
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