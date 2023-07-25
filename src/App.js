import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import ColorBlock from './ColorBlock';

function App(){
    let [colors, setColors] = useState ([
        'violet', 'blue',
        'lightblue', 'green',
        'greenYellow', 'yellow',
        'orange', 'red'
    ])

    return (
        <div className="App">

        </div>
    )
}


export default App;
