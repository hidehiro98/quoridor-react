import React, { Component } from 'react';
import './Game.css';

import Square from './Square';
import {VWall, HWall} from './Wall';

class Game extends React.Component {
  renderSquare(i) {
    return <Square number={i}/>;
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
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
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
          {this.renderSquare(9)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(10)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(11)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(12)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(13)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(14)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(15)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(16)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(17)}
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
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
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
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
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
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
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
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
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
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
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
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
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
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
          <div className="vwall-wrapper">
            {this.renderVWall(0)}
          </div>
          {this.renderSquare(18)}
        </div>
      </div>
    );
  }
}

export default Game;
