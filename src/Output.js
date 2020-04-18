import React from 'react';
import './App.css';

class Output extends React.Component {
    render() {
        let {result} = this.props;
        return(
            <div className="result">
                <p>{result}</p>;
            </div>
        );
    }
}

export default Output;
