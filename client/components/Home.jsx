import React from 'react'
import { Link } from 'react-router-dom'
import Employers from './Employers'
import Candidates from './Candidates'

class Home extends React.Component {


    render() {
        return (
            <>
                <h1 className="header has-text-centered">Welcome to ConnectR!</h1>
                
                <div className="home-buttons">

                    <Link to="/employers">
                        <button className="button home-button is-rounded is-outlined">
                            <span className="icon">
                                <i className="far fa-building"></i>
                            </span>
                            <span>Employers</span>
                        </button>
                    </Link>
                    
                    <Link to="/candidates">
                        <button className="button home-button is-rounded is-outlined">
                            <span className="icon">
                                <i className="fas fa-search"></i>
                            </span>
                            <span>Job Seekers</span>
                        </button>
                    </Link>

                </div>
            </>
        )

    }
}

export default Home