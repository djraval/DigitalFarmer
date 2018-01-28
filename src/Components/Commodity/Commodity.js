import React, { Component } from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
class Commodity extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
              <Card>
                <CardHeader
                    title={this.props.CropName}
                    actAsExpander={true}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    {this.props.MarketName} ||
                    {this.props.Low}Rs <i class="material-icons">arrow_downward</i>
                    {this.props.High}Rs <i class="material-icons">arrow_upward</i> ||
                    {this.props.Qty} {this.props.Unit}  
                    
                </CardText>
            </Card>
        );
    }
}

export default Commodity;