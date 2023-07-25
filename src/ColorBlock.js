import React, { useState } from 'react'
import ColorBlock from './ColorBlock'

function App() {
    let colors = [
        'violet', 'blue',
        'lightblue', 'green',
        'greenyellow', 'yellow',
        'orange', 'red'
    ]

    let colorMap = colors.map((color, i) => {
        return (
            <ColorBlock color ={color} />
        )
    })

    return (
        <div className="App">
            {colorMap}
        </div>
    )
}

<div className="App">
    {colors.map((color, i) => 
        <ColorBlock key={i} color={color} />
    )}
</div>


function ColorBlock(props){
    return (
        <div className="colorBlock"
        style={{'backgroundColor': props.color}}>
            <p>{props.color}</p>
        </div>
    )
}

// Do not forget to export your component once you have built it!
export default ColorBlock
 