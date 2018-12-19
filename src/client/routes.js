import React from 'react'
import { Switch, Route, browserHistory } from 'react-router-dom'
import HomeScreen from './Screen/HomeScreen';
import AboutUsScreen from './Screen/AboutUsScreen';
import SupportScreen from './Screen/SupportScreen';
import CaseStudyScreen from './Screen/CaseStudyScreen';
import ContactUsScreen from './Screen/ContactUsScreen';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import PrivacyScreen from './Screen/PrivacyScreen';

const Routes = () => (

  <main>
    <Switch>
      <Route exact path='/' component={HomeScreen}/>
      <Route path='/about' component={AboutUsScreen}/>
      <Route path='/support' component={SupportScreen}/>
      <Route path='/casestudy' component={CaseStudyScreen}/>
      <Route path='/contact' component={ContactUsScreen}/>
      <Route path='/privacy' component={PrivacyScreen}/>
      <Route path='/login' component={LoginScreen}/>
      <Route path='/register' component={RegisterScreen}/>
      {/* <Route path='/terms' component={TermsScreen}/> */}
      <Route component={HomeScreen}/>
    </Switch>
  </main>

)

export default Routes;
