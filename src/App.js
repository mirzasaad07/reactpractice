import React, { Component } from 'react';
import './App.css';
import Seasondisplay from './components/seasondisplay';
import Spinner from './components/spinner'

class App extends Component {
   constructor(props){
     super(props);
     this.state={
       lat: null,
       errmessage: ''
     }

    };
    componentDidMount(){
      window.navigator.geolocation.getCurrentPosition(
        position => this.setState({lat: position.coords.latitude}),
        err => this.setState({errmessage: err.message})
      );
    }
   

  render() {
    if(this.state.lat && !this.state.errmessage){
      return <div><Seasondisplay lat={this.state.lat}/></div>
    }
    if(!this.state.lat && this.state.errmessage){
      return <h3>Error: {this.state.errmessage}</h3>
    }
     return <Spinner message = 'please allow the location request'/>
  }
}

export default App;
