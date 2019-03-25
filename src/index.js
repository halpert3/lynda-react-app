import React, { Component } from 'react';               //importing react library
// by "destructuring" Component above, you don't have to add "REACT"  in the "extends" part in the "render" section below

import ReactDOM from 'react-dom';                          //importing something allowing you to render it to the DOM
import Library from './Library'
// import { ReactComponent } from '*.svg';

import './index.css';

// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();

// let skiData = {
//     total: 50,
//     powder: 20,
//     backcountry: 10,
//     goal: 100
// }

// class SkiDayCounter extends Component {
//     getPercent = decimal => {
//         return decimal * 100 + "%";
//     }
//     calcGoalProgress = (total, goal) => {
//         return this.getPercent(total / goal)
//     }
//     render() {
//         const { total, powder, backcountry, goal } = this.props
//         return (
//             < section >
//                 <div>
//                     <p>Total Days: {total}</p>
//                 </div>
//                 <div>
//                     <p>Powder Days: {powder}</p>
//                 </div>
//                 <div>
//                     <p>Backcountry Days: {backcountry}</p>
//                 </div>
//                 <div>
//                     <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
//                 </div>
//                 <div>{console.log(this.props.backcountry)}</div>
//             </section >
//         )
//     }
// }



// ReactDOM.render(
//     <SkiDayCounter
//         total={skiData.total}
//         powder={skiData.powder}
//         backcountry={skiData.backcountry}
//         goal={skiData.goal}
//     />,
//     document.getElementById('root')
// )

// class Message extends React.Component {
//     render() {
//         console.log(this.props);
//         return (
//             <div>
//                 <h1 style={{ backgroundColor: this.props.color }}>
//                     {this.props.msg}<br />
//                     {this.props.color}
//                 </h1>
//                 <p>I'll check back in {this.props.minutes} minutes</p>
//             </div >
//         )
//     }
// }

// ReactDOM.render(
//     <Message
//         color="lightblue"
//         msg="How are you?"
//         minutes={10}
//     />,
//     document.getElementById('root')             //in the index.html file there's a preloaded div with the id of 'root'. Will render in that div
// )

// class FavoriteColorForm extends React.Component {
//     state = { value: '' }
//     newColor = e => {
//         this.setState({ value: e.target.value })
//     }
//     submit = e => {
//         console.log(`New Color: ${this.state.value}`) 
//         e.preventDefault()
//     }

//     render() {
//         return (
//             <div style={divStyle}>
//                 <form onSubmit={this.submit}>
//                     <label>Favorite Color:
//                     <input
//                             type="color"
//                             onChange={this.newColor} />
//                     </label>
//                     <button>Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

let bookList = [
    { "title": "A Farewell to Toes", "author": "Ernest Hemingway", "pages": 260 },
    { "title": "White Teeth", "author": "Zadie Smith", "pages": 300 },
    { "title": "White Noise", "author": "Don DeLillo", "pages": 199 },
    { "title": "V.", "author": "Thomas Pynchon", "pages": 456 }
]

ReactDOM.render(
    <Library books={bookList} />,
    document.getElementById('root')
)