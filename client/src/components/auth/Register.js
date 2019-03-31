import React, { Component } from 'react';
import classnames from 'classnames';
import axios from 'axios';

import Modal from 'react-modal';

import back from '../../img/back.png';

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

class Register_Login extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            email : '' ,
            password : '' ,
            password2 : '' ,
            errors : {}
        }

        this.backButtonStyle = {
            backgroundColor : "#fff" ,
            border : "none" ,
            marginRight : "0px" ,
            marginTop : "10px" ,
            borderRadius : "10px"
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            email : this.state.email ,
            password : this.state.password ,
            password2 : this.state.password2
        }

        axios.post('/api/users/register' , newUser)
             .then(res => console.log(res.data))
            .catch(err => this.setState({
                errors : err.response.data
            }));
        
        /**this.props.history is for redirecting to another page */
        /*this.props.registerUser(newUser , this.props.history);*/

    }

    onChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    render() {
        const {errors} = this.state;
        return (

            <Modal
                isOpen={this.props.signupModalIsOpen}
                // onAfterOpen={this.afterOpenModal} 
                onRequestClose={this.props.closeNumberModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5 modal-sidebar"></div>
                        <div className="col-sm-7">
                            <div className="row">
                                <div className="col-sm-10"></div>
                                <div className="col-sm-2">
                                    <button 
                                        onClick={this.props.closeSignupModal} 
                                        style={this.backButtonStyle} 
                                        className="button"
                                    >
                                        <img src={back}></img>
                                    </button></div>
                            </div>
                            <div className="container">
                                    <div className="row text-center register-modal-title">
                                        <div className="col-sm-12">
                                            <h6>برای ثبت نام شماره ایمیل و رمز عبورت رو وارد کن</h6>
                                        </div>
                                    </div>
                                    <form noValidate onSubmit={this.onSubmit}>
                                        <div className="row text-center">
                                            
                                            <div className="col-sm-12">
                                                <input 
                                                    className = {classnames('login-input form-control' , {
                                                        'is-invalid' : errors.email
                                                    })}
                                                    placeholder="ایمیل" 
                                                    name="email"
                                                    type="email"
                                                    value={this.state.email}
                                                    onChange = {this.onChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row text-center">
                                            <div className="col-sm-12">
                                                <input 
                                                    className={classnames('login-input form-control' , {
                                                        'is-invalid' : errors.password
                                                    })}
                                                    placeholder="پسورد"
                                                    name="password"
                                                    type="password"
                                                    value={this.state.password}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row text-center">
                                            <div className="col-sm-12">
                                                <input 
                                                    className={classnames('login-input form-control' , {
                                                        'is-invalid' : errors.password2
                                                    })}
                                                    placeholder="تایید پسورد"
                                                    name="password2"
                                                    type="password"
                                                    value={this.state.password2}
                                                    onChange={this.onChange}
                                                />
                                            </div>
                                        </div>
                                        <div className="row text-center">
                                            <div className="col-sm-12">
                                                <button 
                                                    // onClick={this.props.openLoginModal}
                                                    className="button login-btn"
                                                    type="submit"
                                                >
                                                    ثبت نام
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                            </div>                                 
                        </div>
                    </div>
                </div>
            </Modal>
    )
  }
}

export default Register_Login;

 {/* <Modal
                    isOpen={this.props.loginModalIsOpen}
                    // onAfterOpen={this.afterOpenModal} 
                    onRequestClose={this.props.closeLoginModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5 modal-sidebar"></div>
                            <div className="col-sm-7">
                                <div className="row">
                                    <div className="col-sm-10"><button onClick={this.props.closeLoginModal} style={this.backButtonStyle} className="button"><img src={rBack}></img></button></div>
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
                                                     ورود 
                                                </button>
                                            </div>
                                        </div>
                                </div>                                 
                            </div>
                        </div>
                    </div>
                </Modal> */}