import React, { Component } from 'react';
import './Hello.css'
// OOP
class Hello extends Component {
    render() {
        return (
        <div className="f1 tc">
            <h1>Hello World</h1>
            {/* <p>Welcome to React!</p> */}
            <p>{ this.props.greeting }</p>
        </div>
        );
    }
}
// FP
// const Hello = (props) => {
//         return (
//         <div className="f1 tc">
//             <h1>Hello World</h1>
//             {/* <p>Welcome to React!</p> */}
//             <p>{ props.greeting }</p>
//         </div>
//         );
// }

export default Hello;