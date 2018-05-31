import React, { Component } from 'react';
import './Square.css';

function Square(props) {
  const squareClass = props.number > 71 ? 'square-first-row' : 'square'
  const player1Class = props.number == 4 ? 'player1' : ''
  const player2Class = props.number == 76 ? 'player2' : ''
  const playerClasses = player1Class + player2Class
  return (
    <div className={squareClass} onClick={() => props.onClick()}>
      <div className={playerClasses}></div>
    </div>
  );
}

export default Square;
