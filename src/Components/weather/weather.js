import React from 'react';
import DarkSkyApi from "dark-sky-api";

class weather extends React.Component{

    constructor(){
        super();
        this.state = {
            'temp' : '',
            'rain' : '' ,
            'tomtemp' :'',
            'tomrain' :''
        }
    }

    getData(){
        DarkSkyApi.apiKey = 'a3a983d18a049644b9b78e850143c3f9';
        DarkSkyApi.loadCurrent()
            .then((datas) => {
                this.setState({'temp' : datas.temperature})
                this.setState({'rain' : datas.precipProbability})
            });

        DarkSkyApi.loadForecast()
            .then(result => {
                this.setState ({'tomtemp' : result.daily.data[0].temperatureMax})
                this.setState({'tomrain' : result.daily.data[0].precipProbability})
            })
        ;
    }

    componentDidMount(){
        this.getData();
    }
    render(){
        return(
            <div>
                <h6>Temparature Now: {this.state.temp} F</h6>   
                <h6>Tomorrow's Estimated Temperature : {this.state.tomtemp} F</h6>
                <h6>Today's Rain Probability : {this.state.rain} %</h6>
                <h6>Tomorrow's Rain Probability : {this.state.tomrain} %</h6>
            </div>
        );
    }
}

export default weather;



