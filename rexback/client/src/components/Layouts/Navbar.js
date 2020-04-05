import React from 'react'
import logo from '../../logo.PNG'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
 
function Navbar() {
  return (
    <navDetails className="navbar sticky-top navbar-expand-lg navbar-light navbar-custom-color">
      <Link className="navbar-brand" to="./">
        <img src={logo} alt="logo" style={{ width:'290px' }}/>
      </Link>
      <button 
        className="navbar-toggler" 
        type="button" 
        data-toggle="collapse" 
        data-target="#navbarSupportedContent" 
        aria-controls="navbarSupportedContent" 
        aria-expanded="false" 
        aria-label="Toggle navigation"
      >
        <span>
          <i className="fas fa-bars" style={{ color: '#fff' }}></i>
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">

          <li className="nav-item active">
            <Link className="nav-link text-white text-uppercase m-l ml-5" to="/">
                Home&nbsp;
                <i class="fas fa-home"></i> 
                <span class="sr-only">(current)</span>
            </Link>
          </li>

          <li className="nav-item">
              <Link className="nav-link  text-white text-uppercase m-l ml-5" to="/contacts">
                Contact us
              </Link>
          </li>

          
          <li className="nav-item">
              <Link className="nav-link  text-white text-uppercase m-l ml-5" to="/AboutUs">
                apple
              </Link>
          </li>

          <li className="nav-item">
              <Link className="nav-link  text-white text-uppercase m-l ml-5" to="/AboutUs">
                FAQ
              </Link>
          </li>

          <dropDown class="dropdown show ">
            <a 
              class="btn btn-primary dropdown-toggle m-l ml-5" 
              href="#" 
              role="button" 
              id="dropdownMenuLink" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false">
              Select Role
            </a>
              <div class="dropdown-menu m-l ml-4" aria-labelledby="dropdownMenuLink">
                <Link class="dropdown-item text-center" to="/BuyerInfo">Buyer</Link>
                <Link class="dropdown-item text-center" to="/SellerInfo">Seller</Link>
                <Link class="dropdown-item text-center" to="/AgentInfo">Agent</Link>
                <Link class="dropdown-item text-center" to="/AttorneyInfo">Attorney</Link>
                <Link class="dropdown-item text-center" to="/LoanOfficerInfo">Loan Officer</Link>
              </div>
          </dropDown>

          <dropDown class="dropdown show ">
            <a 
              class="btn btn-danger dropdown-toggle m-l ml-5" 
              href="#" 
              role="button" 
              id="dropdownMenuLink" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false">
              !!dashboard tester!!
            </a>
              <div class="dropdown-menu m-l ml-4" aria-labelledby="dropdownMenuLink">
                <Link class="dropdown-item text-center" to="/buyerDash">Buyer dashboard</Link>
                <Link class="dropdown-item text-center" to="/sellerDash">Seller dashboard</Link>
                <Link class="dropdown-item text-center" to="/agentDash">Agent dashboard</Link>
                <Link class="dropdown-item text-center" to="/attorneyDash">Attorney dashboard</Link>
                <Link class="dropdown-item text-center" to="/loanOfficerDash">Loan Officer dashboard</Link>
              </div>
          </dropDown>

        </ul>
        
          <button className="btn btn-outline-primary ml-auto" type="submit">
            <Link to='/SignIn'> 
            Sign In
            </Link>
          </button>
          
      </div>
</navDetails>
)
}

export default Navbar;
 
