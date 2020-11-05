import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'

import Login from './Login'
import Register from './Register'
import Nav from './Nav'
import Home from './Home'
import Employers from './Employers'
import Candidates from './Candidates'

import { checkAuth } from '../actions/auth'

export class App extends React.Component {
  componentDidMount() {
    const confirmSuccess = () => { }
    this.props.dispatch(checkAuth(confirmSuccess))
  }

  render() {
    const {auth} = this.props
    return (
      <Router>
        <div className="container has-text-centered">

          <div className="hero is-small is-primary">
            <div className="hero-body has-text-centered">
              <Link to='/' className="">
                <h1 className="title is-1">ConnectR</h1>
              </Link>
              <Route path="/" component={Nav} />
            </div>
          </div>

          <div className=''>
            {!auth.isAuthenticated &&
              <Route exact path="/" component={Login} />
            }
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            
          </div>

        </div>

        <div className="">
          {auth.isAuthenticated && (
            <>
          <Route path="/" component={Home} />
          <Route exact path="/employers" component={Employers} />
          <Route exact path="/candidates" component={Candidates} />
          </>
          )}
        </div>
      </Router>
     
    
    )
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
