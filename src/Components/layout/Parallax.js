import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js'

class Parallax extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.parallax');
            var instances = M.Parallax.init(elems, {});
        });
    }
    render() {
        return (
            <div>
                <div className="parallax-container">
                    <div className="parallax"><img src="https://mocah.org/uploads/posts/4532447-planet-flatdesign-digital-art-minimalism-space-art.png" alt="parallax1"/>
                    </div>
                </div>
                <div className="section white">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m4">
                                <div className="center-promo">
                                    <i className="large material-icons">add_shopping_cart</i>
                                    <p className="promo-caption">User Experience Focused</p>
                                    <p className="promo-caption2">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                                </div>
                            </div>
                            <div className="col s12 m4">
                                <div className="center-promo">
                                    <i className="large material-icons">group</i>
                                    <p className="promo-caption">User Experience Focused</p>
                                    <p className="promo-caption2">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                                </div>
                            </div>
                            <div className="col s12 m4">
                                <div className="center-promo">
                                    <i className=" large material-icons">perm_phone_msg</i>
                                    <p className="promo-caption">User Experience Focused</p>
                                    <p className="promo-caption2">By utilizing elements and principles of Material Design, we were able to create a framework that incorporates components and animations that provide more feedback to users. Additionally, a single underlying responsive system across all platforms allow for a more unified user experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="parallax-container">
                    <div className="parallax"><img src="https://wallup.net/wp-content/uploads/2017/03/27/401127-Flatdesign-digital_art-minimalism.jpg" alt="parallax2" /></div>
                </div>
            </div>
        );
    }
}

export default Parallax;