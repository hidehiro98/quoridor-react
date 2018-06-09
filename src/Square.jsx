import React, { Component } from 'react';
import './Square.css';

function Square(props) {
  const squareClass = props.number > 71 ? 'square-first-row' : 'square'
  return (
    <div className={squareClass} onClick={() => props.gameOnClick()}>
      <div className={props.history}></div>
    </div>
  );
}

export default Square;
