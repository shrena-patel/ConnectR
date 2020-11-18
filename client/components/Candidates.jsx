import React from 'react'
import { connect } from 'react-redux'
import { initEmployer } from '../actions/employers'
import { getAllEmployers } from '../apis/employers'



class Candidates extends React.Component {

    componentDidMount() {
        getAllEmployers()
            .then(employer => 
                (this.props.dispatch(initEmployer(employer))))
    }

   
    render () {
        return (
            <>
                <div className="intro-content">
                    <p className="employer-subtitle">View companies that are hiring below</p>
                </div>

                {this.props.employers.map(employer => {

                    return (

                <div className="main">
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
                            <p className="title is-4">{employer.companyName}</p>
                            <p className="subtitle is-6">{employer.companySize}-sized consultancy</p>
                            <p className="subtitle is-6">They specialise in {employer.companyExpertise}</p>
                            <p className="subtitle is-6"> and are located in {employer.companyLocation}</p>
                            
                        </div>
                    </div>
                        <div className="content">
                    <div className="icon-buttons">
                                    <a href="mailto:tom@consciousrecruitment.co.nz?subject=I'm interested in this candidate">
                                        <button className="contact-button button is-primary is-light is-rounded is-outlined">
                                            <i className="far fa-paper-plane"></i>
                                        </button>
                                    </a>
                                        <button className="contact-button button is-primary is-light is-rounded is-outlined">
                                            <i className="far fa-star"></i>
                                        </button>
                                </div>
                                </div>
                    </div>
                </div>


                    )
                })}
            </>
        )
    }
}

function mapStateToProps(globalState) {
    return { employers: globalState.employers }
}
export default connect(mapStateToProps)(Candidates)