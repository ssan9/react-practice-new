This challenge requires you to move the position of a provided box upwards, downwards, left and right whenever a button is clicked.

The tasks in this challenge are:

Create a state variable to hold the value of the transformation points.
Handle an event which increments or decrements the transformation points.
Bind the transformation using inline CSS to the created box.

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

function App() {
  const [move, setMove] = useState(false);
  const [up, setUp] = useState(false);
  const [down, setDown] = useState(false);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);

  const moveUp = () => {
    setMove(move - 50);
    setUp(true);
    setDown(false);
    setLeft(false);
    setRight(false);
  }

  const moveDown = () => {
    setMove(move + 50);
    setUp(false);
    setDown(true);
    setLeft(false);
    setRight(false);
  }

  const moveLeft = () => {
    setMove(move - 50);
    setUp(false);
    setDown(false);
    setLeft(true);
    setRight(false);
  }

  const moveRight = () => {
    setMove(move + 50);
    setUp(false);
    setDown(false);
    setLeft(false);
    setRight(true);
  }

  return (
    <div className="App">
      <h1>Move the Box!</h1>

      {/* handle the click event on this button */}
      <button onClick={moveUp}>👆 Move Up 👆</button>

      <button onClick={moveDown}>👆 Move Down 👆</button>

      <button onClick={moveLeft}>👆 Move Left 👆</button>

      <button onClick={moveRight}>👆 Move Right 👆</button>

      {/* move this box using inline styles */}
      { up || down ? 
          <div className="box" style={{transform: `translateY(${move}px)`}} /> :
          <div className="box" style={{transform: `translateX(${move}px)`}} /> 
      }

      <ScotchInfoBar />
    </div> 
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);


If only moving the box up and down is required, then no need to add other states - up, down, lef, right like below:

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ScotchInfoBar from './ScotchInfoBar';
import './styles.css';

function App() {
  const [move, setMove] = useState(false);
 
  const moveUp = () => {
    setMove(move - 50);
  }

  const moveDown = () => {
    setMove(move + 50);
  }

  return (
    <div className="App">
      <h1>Move the Box!</h1>

      {/* handle the click event on this button */}
      <button onClick={moveUp}>👆 Move Up 👆</button>

      <button onClick={moveDown}>👆 Move Down 👆</button>

      {/* move this box using inline styles */}
          <div className="box" style={{transform: `translateY(${move}px)`}} /> 

      <ScotchInfoBar />
    </div> 
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
