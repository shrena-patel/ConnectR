import React from 'react'

class Home extends React.Component {


    render() {
        return (
            <>
                <h1 className="header has-text-centered">Welcome to ConnectR!</h1>
                
                <div className="home-buttons">
                    <button className="button is-link is-light">
                        <span className="icon">
                            <i className="far fa-building"></i>
                        </span>
                        <span>Employers</span>
                    </button>
                    
                    <button className="button is-link is-light">
                        <span className="icon">
                            <i className="fas fa-search"></i>
                        </span>
                        <span>Job Seekers</span>
                    </button>
                </div>
            </>
        )

    }
}

export default Home