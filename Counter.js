import React, {Component} from 'react';
import { connect } from 'react-redux';
import './App.css';

class Counter extends Component {
    
    increment = () => {
       this.props.dispatch({ type: 'INCREMENT' });
    }

    decrement = () => {
       this.props.dispatch ({ type: 'DECREMENT' });
    }

    render () {
        return (
            <div className='App'>
                <h2>Counter</h2>
                <div>
                    <span>{this.props.count}</span><br/>
                    <button onClick={this.increment}>Increment</button>
                    <button onClick={this.decrement}>Decrement</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({  
    count: state.count
}); 

//export default connect()(Counter);
export default connect(mapStateToProps)(Counter);