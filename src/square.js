import React from "react";
import "./css/square.css"

class Square extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : null,
        }
    }

    render(){
        return(
            <button value={this.state.value} className="square" onClick={()=>this.handleClick}>
                {this.state.value}
            </button>
        )
    }
}
export default Square;