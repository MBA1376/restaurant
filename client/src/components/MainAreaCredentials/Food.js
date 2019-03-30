import React, { Component } from 'react'

class Food extends Component {
    constructor(props) {
         super(props);
         this.style = {
             backgroundColor : "white" ,
             padding : "20px 30px 20px 30px" ,
             borderRadius : "10px" ,
             marginBottom : "10px"
            //  width : "500px"
         }
        this.buttonStyle = {
            borderRadius : "50px" ,
            color : "red" ,
            border : "1px solid red" ,
            backgroundColor : "white"
        }
    }
  render() {
    return (
      <div className="food col-md-6 card" style={this.style}>
        <div className="row">
            <h6>پیتزا مخصوص</h6>
        </div>
        <div className="row">
            <small>مغز ران گوساله، جعفری، پپرونی، قارچ، سس خامه، فلفل دلمه</small>
        </div>
        <div className="row">
            <div className="col-md-11 price">39000 تومان</div>
            <div className="col-md-1">
                <button className="button" style={this.buttonStyle}>+</button>
            </div>
        </div>
      </div>
    )
  }
}

export default Food;