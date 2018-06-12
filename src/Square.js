import React, { Component } from 'react';
import ClassNames from 'classnames';
import './Square.css';

function Square(props) {
  const squareClass = 'square'
  const playerClass = 'player1'
  return (
    <div className={squareClass} onClick={() => props.onClick()}>
      <div className={playerClass}></div>
    </div>
  );
}

export default Square;
