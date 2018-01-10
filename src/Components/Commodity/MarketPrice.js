import React, { Component } from 'react';

class MarketPrice extends Component {

    constructor(props) {
        super(props);
    }
    
    render(){
        return(
            <div>
                {this.props.MarketName} ||
                {this.props.Low}Rs <i class="material-icons">arrow_downward</i>
                {this.props.High}Rs <i class="material-icons">arrow_upward</i> ||
                {this.props.Qty} {this.props.Unit}  
            </div>
        );
    }

}

export default MarketPrice;