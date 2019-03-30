import React, { Component } from 'react';

import Modal from 'react-modal';

import logo from '../../img/brand.png';
import back from '../../img/back.png';
import rBack from '../../img/r-back.png';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)' ,
      padding : "0" ,
      width : "50%" ,
      height : "450px" ,
      borderRadius : "10px" ,
      overflow : "none"
    } ,
    
    overlay: {
        backgroundColor: "rgba(0 , 0 , 0 , 0.6)"
    }
};

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            numberModalIsOpen: false ,
            passwordModalIsOpen: false 
        };

        this.openNumberModal = this.openNumberModal.bind(this);
        this.openPasswordModal = this.openPasswordModal.bind(this);
        /*this.afterOpenModal = this.afterOpenModal.bind(this);*/
        this.closeNumberModal = this.closeNumberModal.bind(this);
        this.closePasswordModal = this.closePasswordModal.bind(this);

        this.backButtonStyle = {
            backgroundColor : "#fff" ,
            border : "none" ,
            marginRight : "0px" ,
            marginTop : "10px" ,
            borderRadius : "10px"
        }
    }

    openNumberModal() {
        this.setState({numberModalIsOpen: true});
    }
    openPasswordModal() {
        this.setState({numberModalIsOpen: false});
        this.setState({passwordModalIsOpen: true});
    }

    
   /*afteropenNumberModal() {
    // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }*/

    closeNumberModal() {
        this.setState({numberModalIsOpen: false});
    }
    closePasswordModal() {
        this.setState({passwordModalIsOpen: false});
        this.setState({numberModalIsOpen : true});
    }

    render() {
        return (
            <div>
                <ul className="restaurant-navbar navbar bg-white navbar-expand-lg navbar-fixed-top" role="navigation">
                    <li><a onClick={this.openNumberModal} href="#"><span className="login">ورود</span></a></li>
                    <li><a onClick={this.openNumberModal} href="#"><span className="signup">ثبت نام</span></a></li>

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
                <Modal
                    isOpen={this.state.numberModalIsOpen}
                    // onAfterOpen={this.afterOpenModal} 
                    onRequestClose={this.closeNumberModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 modal-sidebar"></div>
                            <div className="col-sm-7">
                                <div className="row">
                                    <div className="col-sm-10"></div>
                                    <div className="col-sm-2"><button onClick={this.closeNumberModal} style={this.backButtonStyle} className="button"><img src={back}></img></button></div>
                                </div>
                                <div className="container">
                                        <div className="row text-center modal-title">
                                            <div className="col-sm-12">
                                                <h6>برای ورود یا ثبت نام شماره موبایلت رو وارد کن</h6>
                                            </div>
                                        </div>
                                        <div className="row text-center">
                                            <div className="col-sm-12">
                                                <input className="login-input" />
                                            </div>
                                        </div>
                                        <div className="row text-center">
                                            <div className="col-sm-12">
                                                <button onClick={this.openPasswordModal} className="button login-btn">
                                                    ادامه
                                                </button>
                                            </div>
                                        </div>
                                </div>                                 
                            </div>
                        </div>
                    </div>
                </Modal>

                
                <Modal
                    isOpen={this.state.passwordModalIsOpen}
                    // onAfterOpen={this.afterOpenModal} 
                    onRequestClose={this.closePasswordModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 modal-sidebar"></div>
                            <div className="col-sm-7">
                                <div className="row">
                                    <div className="col-sm-10"><button onClick={this.closePasswordModal} style={this.backButtonStyle} className="button"><img src={rBack}></img></button></div>
                                    <div className="col-sm-2"></div>
                                </div>
                                <div className="container">
                                        <div className="row text-center modal-title">
                                            <div className="col-sm-12">
                                                <h6>رمز عبورت رو وارد کن</h6>
                                            </div>
                                        </div>
                                        <div className="row text-center">
                                            <div className="col-sm-12">
                                                <input className="login-input" />
                                            </div>
                                        </div>
                                        <div className="row text-center">
                                            <div className="col-sm-12">
                                                <button className="button login-btn">
                                                    ورود به سایت
                                                </button>
                                            </div>
                                        </div>
                                </div>                                 
                            </div>
                        </div>
                    </div>
                </Modal>
                
            </div>
        )
    }
}

export default Navbar;