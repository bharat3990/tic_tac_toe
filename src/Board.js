import React from "react";
import Square from './square'

class Board extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <Square onClick={this.handleClick} />
                    <Square onClick={this.handleClick} />
                    <Square onClick={this.handleClick} />
                </div>
                <div>
                    <Square onClick={this.handleClick} />
                    <Square onClick={this.handleClick} />
                    <Square onClick={this.handleClick} />
                </div>
                <div>
                    <Square onClick={this.handleClick} />
                    <Square onClick={this.handleClick} />
                    <Square onClick={this.handleClick} />
                </div>
                
            </div>
            

        )
    }
}
export default Board;