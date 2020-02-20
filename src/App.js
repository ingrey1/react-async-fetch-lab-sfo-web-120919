// create your App component here
import React, { Component } from 'react';

class App extends Component {
    
    state = {

        people: []
    }


    componentDidMount() {
        fetch("http://api.open-notify.org/astros.json").then(data => data.json())
        .then(data => this.setState((state) => {
            return {
                 people: data.people
            }
        }))
        
    }
    
    render() {
        console.log(this.state.people)
        return <div></div>
    }
}


export default App