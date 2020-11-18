import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Candidates extends React.Component {

   
    render () {
        return (
            <>
            <div className="main">
            <div className="intro-content">
                    <p className="employer-subtitle">View companies that are hiring below</p>
                </div>
                <div className="card">
                    
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                            <i className="icon far fa-building fa-9x"></i>
                            </figure>
                        </div>
                    </div>
                    <div className="media-content">
                            <p className="title is-4">name</p>
                            <p className="subtitle is-6">size</p>
                            <p className="subtitle is-6">expertise</p>
                            <p className="subtitle is-6">location</p>
                            
                        </div>
                </div>

                        <div className="content">
                            
                       
                            <button className="contact-button button is-primary is-light is-rounded is-outlined">Get in contact</button>
                        </div>
                    
                </div>
                </div>
            </>
    
        )

    }
}

export default Candidates