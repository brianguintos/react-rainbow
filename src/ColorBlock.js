import React from 'react';

function ColorBlock(props) {
  return (
    <div className="colorBlock" style={{ backgroundColor: props.color }}>
      <p>{props.color}</p>
    </div>
  );
}

function App() {
  let colors = [
    'violet', 'blue',
    'lightblue', 'green',
    'greenyellow', 'yellow',
    'orange', 'red'
  ];

  let colorMap = colors.map((color, i) => {
    return <ColorBlock key={i} color={color} />;
  });

  return (
    <div className="App">
      {colorMap}
    </div>
  );
}

export default ColorBlock