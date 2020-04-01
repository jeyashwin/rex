import React, { Component }from 'react';
 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Layouts/Navbar';
import Footer from './components/Layouts/Footer';
//react router import
import { Switch, Route } from 'react-router-dom';
//import pages
import Home from './components/Pages/Home';
import AboutUs from './components/Pages/AboutUs';
import Contacts from './components/Pages/Contacts';
import Details from './components/Pages/Details';
import NotFoundPage from './components/Pages/NotFoundPage';
import BuyerInfo from './components/InfoPages/BuyerInfo';
import SellerInfo from './components/InfoPages/SellerInfo';
import AgentInfo from './components/InfoPages/AgentInfo';
import AttorneyInfo from './components/InfoPages/AttorneyInfo';
import LoanOfficerInfo from './components/InfoPages/LoanOfficerInfo';
import SignIn from './components/Pages/SignIn';
import createAccount from './components/Pages/createAccount';
import createBuyer from './components/createAccountPages/createBuyer'
import createSeller from './components/createAccountPages/createSeller'
import createAgent from './components/createAccountPages/createAgent'
import createAttorney from './components/createAccountPages/createAttorney'
import createLoanOfficer from './components/createAccountPages/createLoanOfficer'
import buyerDash from './components/dashboards/buyerDash';
import sellerDash from './components/dashboards/sellerDash';
import agentDash from './components/dashboards/agentDash';
import attorneyDash from './components/dashboards/attorneyDash';
import loanOfficerDash from './components/dashboards/loanOfficerDash';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/AboutUs" component={AboutUs}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/details" component={Details}/>
          <Route path="/BuyerInfo" component={BuyerInfo}/>
          <Route path="/SellerInfo" component={SellerInfo}/>
          <Route path="/AgentInfo" component={AgentInfo}/>
          <Route path="/AttorneyInfo" component={AttorneyInfo}/>
          <Route path="/LoanOfficerInfo" component={LoanOfficerInfo}/>
          <Route path="/SignIn" component={SignIn}/>
          <Route path="/createAccount" component={createAccount}/>
          <Route path="/createBuyer" component={createBuyer}/>
          <Route path="/createSeller" component={createSeller}/>
          <Route path="/createAgent" component={createAgent}/>
          <Route path="/createAttorney" component={createAttorney}/>
          <Route path="/createLoanOfficer" component={createLoanOfficer}/>
          <Route path="/buyerDash" component={buyerDash}/>
          <Route path="/sellerDash" component={sellerDash}/>
          <Route path="/agentDash" component={agentDash}/>
          <Route path="/attorneyDash" component={attorneyDash}/>
          <Route path="/loanOfficerDash" component={loanOfficerDash}/>
          <Route component={NotFoundPage}/>  
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default App;
