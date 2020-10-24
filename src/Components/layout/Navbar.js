import React, { Component } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'

class Navbar extends Component {

    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems, {});
        });
    }
    render() {
        return (
            <div>
                <div className="navbar-fixed">
                    <nav>
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo">Logo</a>
                            <a href="#" data-target="slide-out" className="sidenav-trigger">
                                <i className="material-icons">menu</i></a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><a href="sass.html">Menu1</a></li>
                                <li><a href="badges.html">Menu1</a></li>
                                <li><a href="collapsible.html">Menu1</a></li>
                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="container-image">
                    <ul id="slide-out" className="sidenav">
                        <li><div className="user-view">
                            <div className="background">
                                <img src="https://external-preview.redd.it/cDmvALl3j8VHCLaaic2cYtB6wqfFkJJSCGF2GdTvfj8.png?width=960&crop=smart&auto=webp&s=73c20ef316af7b15e315a36d6a8bcb6efad0c96d" width="450" alt="sidebar_image" />
                            </div>
                            <a href="#user"><img className="circle" src="logo" alt="logo_cliente" /></a>
                            <a href="#name"><span className="white-text name">Paulo Baltieri</span></a>
                            <a href="#email"><span className="white-text email">Baltieri_paulo</span></a>
                        </div></li>
                        <li><a className="subheader"><i className="material-icons">cloud</i>Menu Lateral</a></li>
                        <li><a className="waves-effect" href="#!">Menu 1</a></li>
                        <li><div className="divider"></div></li>
                        <li><a className="waves-effect" href="#!">Menu 2</a></li>
                        <li><div className="divider"></div></li>
                        <li><a className="waves-effect" href="#!">Menu 3</a></li>
                        <li><div className="divider"></div></li>
                        <li><a className="waves-effect" href="#!">Menu 4</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;
