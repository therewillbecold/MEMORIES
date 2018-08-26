import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React from 'react'
import Home from './pages/home'
import Manage from './pages/manage'
import SignIn from './pages/sign-in'
import SignUp from './pages/sign-up'


const route = () => (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/manage" component={Manage} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
      </div>
    </Router>
  );



export default route