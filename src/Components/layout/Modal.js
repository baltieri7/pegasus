import React, {Component} from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'materialize-css/sass/materialize.scss'

class Modal extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
        });
    }
    render() {
        return (
            <div>
                <div id="modal1" className="modal">
                    <div className="modal-content">
                        <h4>Modal Header</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close btn-flat">Agree</a>
                    </div>
                </div>
                <div>
                <div id="modal2" className="modal">
                    <div className="modal-content">
                        <h4>Modal Header 2</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close btn-flat">Agree</a>
                    </div>
                </div>
            </div>
            <div>
                <div id="modal2" className="modal">
                    <div className="modal-content">
                        <h4>Modal Header 3</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close btn-flat">Agree</a>
                    </div>
                </div>
            </div>
            <div>
                <div id="modal2" className="modal">
                    <div className="modal-content">
                        <h4>Modal Header 4</h4>
                        <p>A bunch of text</p>
                    </div>
                    <div className="modal-footer">
                        <a href="#!" className="modal-close btn-flat">Agree</a>
                    </div>
                </div>
            </div>
            </div>
            
        );
    }
}

export default Modal;