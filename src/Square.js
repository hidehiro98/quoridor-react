import React, { Component } from 'react';
import './Square.css';

function Square(props) {
  const squareClass = props.number < 9 ? 'square-first-row' : 'square'
  const playerClass = 'player1'
  return (
    <div className={squareClass} onClick={() => props.onClick()}>
      <div className={playerClass}></div>
    </div>
  );
}

export default Square;
