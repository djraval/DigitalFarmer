import React from "react";
import ReactDOM from "react-dom";

class MSP extends React.Component{

    constructor(){
        super();
        this.state = {
            'data' : [],
            isLoading: true,
            MSP:""
        }
    }

    getMSP(){

        var endpoint = "https://farmrise-farmrise.1d35.starter-us-east-1.openshiftapps.com";
        //var endpoint = "http://localhost";
        fetch(endpoint + '/msp.php')
        .then(response => response.text())
        .then(data => {
            this.setState({MSP: data});
        })
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
        
    }

    componentDidMount(){
        this.getMSP()
    }

    

    render(){
        //var content = this.state.isLoading? <CircularProgress size={80} thickness={5} /> : this.list();
        return(<div dangerouslySetInnerHTML={{__html:this.state.MSP}}></div>);
    }
}

export default MSP;