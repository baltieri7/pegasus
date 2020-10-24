import React, { Component } from 'react';

class Card extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m3">
                        <div className="card hoverable">
                            <div className="card-image">
                                <img src="https://semantic-ui.com/images/avatar2/large/elyse.png" alt="card1"/>
                                <span className="card-title">Card Title</span>
                                <a className="btn-floating modal-trigger halfway-fab" href="#modal1"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m3">
                        <div className="card hoverable">
                            <div className="card-image">
                                <img src="https://semantic-ui.com/images/avatar/large/steve.jpg" alt="card2"/>
                                <span className="card-title">Card Title</span>
                                <a className="btn-floating modal-trigger halfway-fab" href="#modal2"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m3">
                        <div className="card hoverable">
                            <div className="card-image">
                                <img src="https://semantic-ui.com/images/avatar/large/elliot.jpg" alt="card3"/>
                                <span className="card-title">Card Title</span>
                                <a className="btn-floating modal-trigger halfway-fab" href="#modal1"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col s12 m3">
                        <div className="card hoverable">
                            <div className="card-image">
                                <img src="https://semantic-ui.com/images/avatar/large/stevie.jpg" alt="card4"/>
                                <span className="card-title">Card Title</span>
                                <a className="btn-floating modal-trigger halfway-fab" href="#modal1"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Card;  