import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {txt: 'this is a Todo Item 1', completed: false},
                {txt: 'this is a Todo Item 2', completed: false},
                {txt: 'this is a Todo Item 3', completed: true},
                {txt: 'this is a Todo Item 4', completed: false},
                {txt: 'this is a Todo Item 5', completed: true},
            ],
            counter: 0,
            itemTxt: ""
        };
    }

    // handleChange(e) {
    //     this.setState({temperature: e.target.value});
    // }

    countUp = () => {
        console.log('counting up')
        let stateCopy = this.state;
        stateCopy.counter = stateCopy.counter + 1;
        this.setState(stateCopy)
    }

    render() {
        return (
            <div>

                <Button variant={'success'}>Click me!</Button>

                <h1 className={'tet-2xl'}>Counter: {this.state.counter}</h1>

                <button className={'p-2 bg-blue-200'} onClick={this.countUp}>Click me</button>

                <br/>
                <br/>
                <br/>
                <br/>
                <ul>
                    {this.state.items.map((item, index) => {
                        return <li key={index}>{item.txt}</li>
                    })}
                </ul>
            </div>
        );
    }
}

// function App() {
//
//     const [itemTxt, setItemTxt] = useState('');
//     const [items, setItems] = useState([
//         {txt: 'this is a Todo Item 1', completed: false},
//         {txt: 'this is a Todo Item 2', completed: false},
//         {txt: 'this is a Todo Item 3', completed: true},
//         {txt: 'this is a Todo Item 4', completed: false},
//         {txt: 'this is a Todo Item 5', completed: true},
//     ]);
//
//     const [currentFilter, setCurrentFilter] = useState('all');
//     // const [currentFilter, setCurrentFilter] = useState('completed');
//     // const [currentFilter, setCurrentFilter] = useState('active');
//
//
//
//     const updateItemTxt = async (event) => {
//         setItemTxt(event.currentTarget.value);
//     };
//
//     const addItem = async () => {
//         // Write code here to add the item to the array (Google up updating items in an array react hooks)
//
//     };
//
//   return (
//     <div>
//
//       <h1 className={'text-center text-4xl font-bold'}>Todo React Application</h1>
//
//
//         <br/>
//
//
//         <div className={'p-5'} style={{width: '100vw'}}>
//           <input value={itemTxt} onChange={updateItemTxt} type="text" className={'border-2 p-2 '} style={{width: '50vh'}}/>
//           <br/>
//           <br/>
//           <p>the value of the itemTxt is {itemTxt}</p>
//           <br/>
//           <br/>
//         </div>
//       <button className={'border p-2 bg-blue-400'} onClick={addItem}>Submit</button>
//
//
//       <br/>
//       <br/>
//
//       <ul>
//           {items.map((item, index) => {
//               if(currentFilter == 'completed'){
//                   if(item.completed) {
//                       return <li key={index}>{item.txt}</li>
//                   }
//               } else if(currentFilter == 'active'){
//                   if(!item.completed) {
//                       return <li key={index}>{item.txt}</li>
//                   }
//               } else if(currentFilter == 'all'){
//                   return <li key={index}>{item.txt}</li>
//               }
//           })}
//       </ul>
//
//
//         <br/>
//         <br/>
//         <br/>
//         <ul>
//             <li>All</li>
//             <li>Completed</li>
//             <li>Active</li>
//         </ul>
//
//
//
//     </div>
//   );
// }

export default App;
