import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return ( 
    <div className = "App" >
        <header className = "App-header" >
        <img src = { logo }
        alt = "logo"
        className = "App-logo" / >
        <Count> </Count> 
        <Users></Users>
        <Person name = "sakib khan" person = "he is a good boy" > </Person> 
        <Person> </Person>  
        <Person> </Person> 
        </header>
        </div >
    )

}

function Users() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res =>res.json())
        .then(data => setUsers(data))
    })
    return ( 
    <div>
        <h1 >Users:{users.length}</h1> 
        <ul>
            {
                users.map(user => <li>{user.name}</li>)
            }
        </ul>
    </div>

    )
}

function Count() {
    const [count, setCount] = useState(10);
    const handler = () => {
        const newValue = count + 1;
        setCount(newValue);
    };
    const handlerdekres = () => {
        const newValue = count - 1;
        setCount(newValue);
    };
    return ( <div div >
        <h1 > Count: { count } </h1> 
        <button onClick = { handler } > Like </button> 
        <button onClick = { handlerdekres } > DisLike </button>
        </div >
    )
}

function Person(props) {
    return ( <
        div style = {
            { border: '2px solid red', backgroundColor: 'cyan', color: 'yellow', padding: '5px', margin: "5px" }
        } >
        <
        h1 > Name: { props.name } < /h1> <
        h3 > person { props.person } < /h3> < /
        div >
    )
}
export default App;