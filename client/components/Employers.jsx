import React from 'react'
import { connect } from 'react-redux'
import { initCandidate } from '../actions/candidates'
import { getAllCandidates } from '../apis/candidates'

class Employers extends React.Component {

    

    componentDidMount() {
        getAllCandidates()
            .then(candidate => 
                (this.props.dispatch(initCandidate(candidate))))
    }
  
    
    render () {
        const candidateOne = this.props.candidates[0]
        console.log(candidateOne)

        return (
            <>
            
            <div className="main">
            <div className="intro-content">
                <h1 className="title is-5">Employers</h1>
                <p className="subtitle is-6">Navigate left and right to view available candidates</p>
            </div>
                <div className="card">
                    
                <div className="card-content">
                    <div className="media">
                        <div className="media-left">
                            <figure className="image is-48x48">
                            <i className="icon far fa-user-circle fa-9x"></i>
                            </figure>
                        </div>
                    </div>

                    <div className="media-content">
                    
                        {/* <div className="card-text">
                            <p className="title is-4">{candidateOne.roleSeeking}</p>
                            <p className="subtitle is-6">{candidateOne.currentRole}</p>
                            <p className="subtitle is-6">{candidateOne.yearsExperience}</p>
                            <p className="subtitle is-6">{candidateOne.location}</p>
                            <p className="subtitle is-6">{candidateOne.qualifications}</p>
                            <p className="subtitle is-6">{candidateOne.workRights}</p>
                        </div> */}
                    </div>

                </div>

                        <div className="content">
                            
                        <div className="icon-buttons">
                            <a href="mailto:tom@consciousrecruitment.co.nz?subject=I'm interested in this candidate"><button className="contact-button button is-primary is-light is-rounded is-outlined"><i className="far fa-paper-plane"></i></button></a>
                            <button className="contact-button button is-primary is-light is-rounded is-outlined"><i className="far fa-star"></i></button>
                        </div>
                        </div>
                    
                </div>
                </div>
            </>
    
        )

    }
}

function mapStateToProps(globalState) {
    return { candidates: globalState.candidates }
}

export default connect(mapStateToProps)(Employers)