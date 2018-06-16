import React, { Component } from 'react';
import './Square.css';

function Square(props) {
  return (
    <div className='square' onClick={() => props.gameOnClick()}>
      <div className={props.history}></div>
    </div>
  );
}

export default Square;
