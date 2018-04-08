import React, { Component } from 'react';

class FertDealers extends Component {

    constructor(props) {
        super(props);
        this.state = {
            stateId: "0",
            distId: "0",
            blockId: "0",
            distList: undefined,
            blockList: undefined,
            dealersList: "Select your Block to get the List of all Dealers",
            hide:""
        }
        this.handleChangeState = this.handleChangeState.bind(this);
        this.handleChangeDist = this.handleChangeDist.bind(this);
        this.handleChangeBlock = this.handleChangeBlock.bind(this);
    }

    handleChangeState(event){
        this.setState({stateId: event.target.value});
        var endpoint = "https://farmrise-farmrise.1d35.starter-us-east-1.openshiftapps.com";
        var endpoint = "http://localhost";
        fetch(endpoint + '/getDistList.php?SCode='+ event.target.value)
            .then(response => response.text())
            .then(data => {
                this.setState({distList: data});
            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });

    }
    handleChangeDist(event){
        this.setState({distId: event.target.value});
        var endpoint = "https://farmrise-farmrise.1d35.starter-us-east-1.openshiftapps.com";
        var endpoint = "http://localhost";
        fetch(endpoint + '/getBlockList.php?SCode='+ this.state.stateId + '&DCode='+ event.target.value)
            .then(response => response.text())
            .then(data => {
                this.setState({blockList: data});
            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });
    }

    handleChangeBlock(event){
        this.setState({blockId: event.target.value , hide : "hideElement" , dealersList: "Loading the list..."});
        console.log(this.state.stateId + this.state.distId + event.target.value);

        var endpoint = "https://farmrise-farmrise.1d35.starter-us-east-1.openshiftapps.com";
        var endpoint = "http://localhost";
        fetch(endpoint + '/dealers.php?Type=F&SCode='+ this.state.stateId + '&DCode='+ this.state.distId + '&BCode=' + event.target.value)
            .then(response => response.text())
            .then(data => {
                this.setState({dealersList: data});
            })
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });

    }


    render(){
        return(
            <div>
                <div className={this.state.hide}>
                    <label>Select State</label><br/>
                    <select id="stateSelect" onChange={this.handleChangeState} value={this.state.stateId}>
                    <option selected="selected" value="0">--All--</option>
                        <option value="35">ANDAMAN AND NICOBAR ISLANDS</option>
                        <option value="28">ANDHRA PRADESH</option>
                        <option value="12">ARUNACHAL PRADESH</option>
                        <option value="18">ASSAM</option>
                        <option value="10">BIHAR</option>
                        <option value="4">CHANDIGARH</option>
                        <option value="22">CHHATTISGARH</option>
                        <option value="26">DADRA AND NAGAR HAVELI</option>
                        <option value="25">DAMAN AND DIU</option>
                        <option value="7">DELHI</option>
                        <option value="30">GOA</option>
                        <option value="24">GUJARAT</option>
                        <option value="6">HARYANA</option>
                        <option value="2">HIMACHAL PRADESH</option>
                        <option value="1">JAMMU AND KASHMIR</option>
                        <option value="20">JHARKHAND</option>
                        <option value="29">KARNATAKA</option>
                        <option value="32">KERALA</option>
                        <option value="31">LAKSHADWEEP</option>
                        <option value="23">MADHYA PRADESH</option>
                        <option value="27">MAHARASHTRA</option>
                        <option value="14">MANIPUR</option>
                        <option value="17">MEGHALAYA</option>
                        <option value="15">MIZORAM</option>
                        <option value="13">NAGALAND</option>
                        <option value="21">ODISHA</option>
                        <option value="34">PUDUCHERRY</option>
                        <option value="3">PUNJAB</option>
                        <option value="8">RAJASTHAN</option>
                        <option value="11">SIKKIM</option>
                        <option value="33">TAMIL NADU</option>
                        <option value="36">TELANGANA</option>
                        <option value="16">TRIPURA</option>
                        <option value="5">UTTAR PRADESH</option>
                        <option value="9">UTTARAKHAND</option>
                        <option value="19">WEST BENGAL</option>
                    </select>
                    <br/>
                    <br/>
                    <label>Select District</label>
                    <br/>
                    <select id="distSelect" onChange={this.handleChangeDist} value={this.state.distId} dangerouslySetInnerHTML={{__html:this.state.distList}}/>
                    <br/>
                    <br/>
                    <label>Select Block</label>
                    <br/>
                    <select id="blockSelect" onChange={this.handleChangeBlock} value={this.state.blockId} dangerouslySetInnerHTML={{__html:this.state.blockList}}/>
                    <br/>
                </div>
                <br/>
                <br/>
                <br/>
                <div>
                    <div dangerouslySetInnerHTML={{__html:this.state.dealersList}}></div>
                </div>
            </div>
            );
    }
}

export default FertDealers;
