import React from 'react';
import PropTypes from 'prop-types';


class App extends React.Component {
    
    constructor(props){
        super(props);
        console.log("hello");
    }
    state = {
        count : 10
    };
    
    add = () => {
        console.log("Add");
        this.setState(current => ({count:current.count+1}));
    };
    minus = () => {
        console.log("Minus");
        this.setState({count:this.state.count-1});
    };

    componentDidMount(){
        console.log("component rendered");
    }
    componentDidUpdate(){
        console.log("component Updated");
    }
    componentWillUnmount(){
        console.log("I'm finished");
    }
    render(){
        console.log("render");
        return <div>
            <h1>The number is :  {this.state.count}</h1>
            <button onClick={this.add}>Add</button>   
            <button onClick={this.minus}>Minus</button>
        </div>
    }
}

export default App;
