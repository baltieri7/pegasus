import React, { Component } from 'react'
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

class Slider extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, {height:550,indicators:true});
        });
    }
    render() {
        return (<div className="conatainer">
            <div className="slider" >
                <ul className="slides">
                    <li>
                        <img src="https://i.pinimg.com/originals/47/14/75/471475430e0eb43b532aabacc76e7554.jpg" alt="slider1"/>
                        <div className="caption center-align">
                            <h3 className="shadowtext">This is our big Tagline!</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src="https://wallpaperplay.com/walls/full/4/e/3/49329.jpg" alt="slider2"/>
                        <div className="caption left-align">
                            <h3 className="shadowtext">Left Aligned Caption</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src="https://wallpaperhd.wiki/wp-content/uploads/minimalist-wallpaper-1920x1080-25459.jpg" alt="slider3"/>
                        <div className="caption">
                            <h3 className="shadowtext">Right Aligned Caption</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src="https://images.wallpaperscraft.com/image/minimalism_style_color_sign_74398_1920x1080.jpg" alt="slider4"/>
                        <div className="caption">
                            <h3 className="shadowtext">This is our big Tagline!</h3>
                            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        );
    }
}

export default Slider;