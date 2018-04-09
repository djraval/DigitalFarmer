import React from "react";
import ReactDOM from "react-dom";
import CircularProgress from 'material-ui/CircularProgress';
import Commodity from '../../Components/Commodity/Commodity';

class PriceList extends React.Component{

    constructor(){
        super();
        this.state = {
            'data' : [],
            isLoading: true,
            lat: undefined,
            long: undefined
        }
        this.getLocationList = this.getLocationList.bind(this);
    }

    getList(){
        var endpoint = "https://farmrise-farmrise.1d35.starter-us-east-1.openshiftapps.com";
        fetch(endpoint + '/prices.php?lat='+this.state.lat+'&long='+this.state.long)
            .then(response => response.json())
            .then(response => this.setState({'data':response.data ,isLoading: false}))
            .catch(function(err) {
                console.log('Fetch Error :-S', err);
            });    
    }

    getLocationList() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position)=>{
                this.setState({lat:position.coords.latitude, long:position.coords.longitude});
                this.getList();
            });
        } else { 
            console.log("Geolocation is not supported by this browser.");
        }
    }
    

    componentDidMount(){
        //this.getList()
        this.getLocationList()
    }

    list(){
        return(
        <ul>
            {this.state.data.map(function(item,i){
                return(
                    <div>                    
                        {item.commodityMarketBOList.map(function(market,){
                            return(
                                <div>
                                <Commodity
                                    CropName = {item.commodityName}
                                    MarketName = {market.marketName}
                                    Low = {market.commodityPriceBOList[0].minPrice}
                                    High = {market.commodityPriceBOList[0].maxPrice}
                                    Qty = {market.commodityPriceBOList[0].quantity}
                                    Unit = {market.commodityPriceBOList[0].unit}
                                />
                                </div>
                            )
                        })}
                        <hr/>
                    </div>
                )   
            })}
        </ul>)
    }

    render(){
        var content = this.state.isLoading? <CircularProgress size={80} thickness={5} /> : this.list();
        return(content);
    }
}

export default PriceList;