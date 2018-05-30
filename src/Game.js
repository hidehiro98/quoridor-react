import React, { Component } from 'react';
import './Game.css';

import Square from './Square';
import {VWall, HWall} from './Wall';

class Game extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  renderVWall() {
    return <VWall />;
  }

  renderHWall() {
    return <HWall />;
  }

  render() {
    return (
      <div>
        <div className="square-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
        </div>
        <div className="wall-row">
          <div className="hwall-wrapper">
            {this.renderHWall(0)}
          </div>
          <div className="hwall-wrapper">
            {this.renderHWall(0)}
          </div>
          <div className="hwall-wrapper">
            {this.renderHWall(0)}
          </div>
          <div className="hwall-wrapper">
            {this.renderHWall(0)}
          </div>
          <div className="hwall-wrapper">
            {this.renderHWall(0)}
          </div>
          <div className="hwall-wrapper">
            {this.renderHWall(0)}
          </div>
          <div className="hwall-wrapper">
            {this.renderHWall(0)}
          </div>
          <div className="hwall-wrapper">
            {this.renderHWall(0)}
          </div>
        </div>
        <div className="square-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
        </div>
        <div className="square-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
        </div>
        <div className="square-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
        </div>
        <div className="square-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
        </div>
        <div className="square-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
        </div>
        <div className="square-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
        </div>
        <div className="square-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
        </div>
        <div className="square-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
          {this.renderSquare(2)}
        </div>
      </div>
    );
  }
}

export default Game;
