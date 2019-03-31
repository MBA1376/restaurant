import React, { Component } from 'react';

import Register from '../auth/Register';
import Login from '../auth/Login';

import logo from '../../img/brand.png';


class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            signupModalIsOpen: false ,
            loginModalIsOpen: false ,
            error : ''
        };

        this.openSignupModal = this.openSignupModal.bind(this);
        this.openLoginModal = this.openLoginModal.bind(this);
        this.closeSignupModal = this.closeSignupModal.bind(this);
        this.closeLoginModal = this.closeLoginModal.bind(this);

       
    }

    openSignupModal() {
        this.setState({loginModalIsOpen: false});
        this.setState({signupModalIsOpen: true});
    }
    openLoginModal() {
        this.setState({signupModalIsOpen: false});
        this.setState({loginModalIsOpen: true});
    }

    closeSignupModal() {
        this.setState({signupModalIsOpen: false});
    }
    closeLoginModal() {
        this.setState({loginModalIsOpen: false});
        // this.setState({signupModalIsOpen : true});
    }

    render() {
        return (
            <div>
                <ul className="restaurant-navbar navbar bg-white navbar-expand-lg navbar-fixed-top" role="navigation">
                    <li><a onClick={this.openLoginModal} href="#"><span className="login">ورود</span></a></li>
                    <li><a onClick={this.openSignupModal} href="#"><span className="signup">ثبت نام</span></a></li>

                    <li className="camera"><a href="#" className="nav-link navbar-brand"><img src={logo} /></a></li>

                    {/* <li><form><input placeholder="search twitter"/><i className="fa fa-search"></i></form></li> */}
                    <li><i className="fa fa-user-circle-o"></i></li>
                    <li> 
                        <a href="#">
                            <span className="fa-stack fa-2x has-badge" data-count="1">
                                <i className="fa fa-circle fa-stack-2x fa-inverse"></i>
                                <i className="fa fa-shopping-cart fa-stack-2x red-cart"></i>
                            </span>
                        </a>
                    </li>
                </ul>
               
                <Register
                    signupModalIsOpen={this.state.signupModalIsOpen} 
                    closeSignupModal={this.closeSignupModal}
                    openLoginModal={this.openLoginModal}
                />
                 <Login
                    loginModalIsOpen={this.state.loginModalIsOpen}
                    closeLoginModal={this.closeLoginModal}
                />
                
            </div>
        )
    }
}

export default Navbar;