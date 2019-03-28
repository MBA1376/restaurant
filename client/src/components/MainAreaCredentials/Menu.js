import React, { Component } from 'react';

import SearchFieldGroup from '../common/SearchFieldGroup';
import Food from './Food';

class Menu extends Component {
    constructor(props) {
         super(props);
        this.state = {
            searchValue : '' ,
            errors : {}
        }

        this.style = {
            backgroundColor : "#f8f8f8" ,
            marginRight : "-30px" ,
            marginBottom : "-20px" ,
            padding : "35px 100px 130px 100px"
        }
        this.onChange = this.onChange.bind(this);
    }
    onChange(e) {
        this.setState({
            [e.target.name] : e.target.value
        });
    }


    render() {
        
        return (
        <div className="menu" style={this.style}>
            <div className="row">
                <div className="col-md-3">
                    <SearchFieldGroup 
                        placeholder = "جستجوی در منو"
                        type="text" 
                        name="searchValue"
                        value={this.state.searchValue}
                        onChange={this.onChange}
                    />
                </div>
            </div>
            <div className="row">
                <Food />
                <Food />
                <Food />
                <Food />
                <Food />
                <Food />
                <Food />
                <Food />
                <Food />
                <Food />
                <Food />
                <Food />
                <Food />
                <Food />
                <Food />
                <Food />
            </div>
        </div>
        )
    }
    }

export default Menu;