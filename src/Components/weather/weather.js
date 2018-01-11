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

    test(){
        DarkSkyApi.apiKey = 'a3a983d18a049644b9b78e850143c3f9';

        /*DarkSkyApi.loadCurrent()
            .then(result => console.log(result));*/

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
        this.test();
    }
    render(){
        var fullName = this.state.temp;
        var rainprobability = this.state.rain;
        var tomtemp1 = this.state.tomtemp;
        var tomrain1 = this.state.tomrain;
        return(
            <div>

                <h6> Today's Temparature : {fullName}</h6>

                <h6>Tomorrow's Temperature : {tomtemp1}</h6>

                <h6> Today's Rain Probability : {rainprobability} </h6>

                <h6> Tomorrow's Rain Probability : {tomrain1} </h6>
            </div>
        );
    }
}

export default weather;



