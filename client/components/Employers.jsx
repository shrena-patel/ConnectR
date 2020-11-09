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
        return (
            <>
            {console.log(this.props.candidates)}
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
                            <p className="title is-4">role seeking</p>
                            <p className="subtitle is-6">current role</p>
                            <p className="subtitle is-6">years experience</p>
                            <p className="subtitle is-6">location</p>
                            <p className="subtitle is-6">qualifications</p>
                            <p className="subtitle is-6">work rights</p>
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

function mapStateToProps(globalState) {
    return { candidates: globalState.candidates }
}

export default connect(mapStateToProps)(Employers)