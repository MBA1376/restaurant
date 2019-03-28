import React, { Component } from 'react';

import logo from '../../img/brand.png';

class Navbar extends Component {
    constructor() {
        super();
       
    }

    render() {
        return (
            <ul className="restaurant-navbar navbar bg-white navbar-expand-lg navbar-fixed-top" role="navigation">
            <li><a href="#"><span className="login">ورود</span></a></li>
            <li><a href="#"><span className="signup">ثبت نام</span></a></li>

            <li className="camera"><a href="#" className="nav-link navbar-brand"><img src={logo} /></a></li>

            {/* <li><form><input placeholder="search twitter"/><i className="fa fa-search"></i></form></li> */}
            <li><i className="fa fa-user-circle-o"></i></li>
            <li> 
                <a href="#">
                    <span className="fa-stack fa-2x has-badge" data-count="5">
                        <i className="fa fa-circle fa-stack-2x fa-inverse"></i>
                        <i className="fa fa-shopping-cart fa-stack-2x red-cart"></i>
                    </span>
                </a>
            </li>
        </ul>
        )
    }
}

export default Navbar;

{/*<nav className="navbar navbar-light bg-white navbar-expand-lg navbar-fixed-top ">
    <a className="navbar-brand col-xs-4" href="#">نام برند</a>

    <div className="collapse navbar-collapse" id="navbarMenu">
            <ul className="navbar-nav col-xs-4">
            <li className="nav-item">
                <a href="#" className="nav-link" >
                    <i className="fa" style={this.style}>&#xf07a;</i>
                    <span className='badge badge-warning' id='lblCartCount'>{0}</span>
                </a>
            </li>
        </ul>
        <ul className="navbar-nav ml-auto col-xs-4">
            <li className="nav-item"><a href="#" className="nav-link navbar-brand"><img src={logo} /></a></li>
        </ul> 
        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a href="#" className="nav-link">ثبت نام</a>
            </li>
            <li className="nav-item">
                <a href="#" className="nav-link">ورود</a>
            </li>
        </ul>
    </div>
</nav>*/}