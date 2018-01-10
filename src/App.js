import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Menu from './Components/Menu/Menu';
import Home from './Pages/Home/Home';
import PriceList from './Pages/PriceList/PriceList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
          <Router>
            <div>
              <Route exact path="/" component={Home}/>
              <Route exact path="/prices" component={PriceList}/>
            </div>  
          </Router>
      </div>
    );
  }
}

export default App;
