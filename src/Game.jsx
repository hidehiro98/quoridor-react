import React, { Component } from 'react';
import './Game.css';

import Square from './Square';
import {VWall, HWall} from './Wall';

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
      historyPlayers: [{
        squares: Array(81).fill(null),
      }],
      historyVWalls: [{
        squares: Array(64).fill(null),
      }],
      historyHWalls: [{
        squares: Array(64).fill(null),
      }],
      stepNumber: 0,
      nextPlayer: 'Player 1'
    };
    this.state.historyPlayers[0]['squares'][4] = 'player1';
    this.state.historyPlayers[0]['squares'][76] = 'player2';
  }

  handleClick(i) {
    let player = ''
    if (this.state.stepNumber % 2 == 0) {
      player = 'player1';
    } else {
      player = 'player2';
    }

    let nextPlayer = ''
    if (this.state.stepNumber % 2 == 1) {
      nextPlayer = 'Player 1';
    } else {
      nextPlayer = 'Player 2';
    }

    const nextStepNumber = this.state.stepNumber + 1
    let currentHistoryPlayers = this.state.historyPlayers[0]['squares']

    currentHistoryPlayers[currentHistoryPlayers.findIndex((element) => {return element == player})] = null
    currentHistoryPlayers[i] = player

    const history = this.state.historyPlayers.slice(0, this.state.stepNumber + 1);

    this.setState({
      stepNumber: nextStepNumber,
      historyPlayers: history.concat([{
        squares: currentHistoryPlayers
      }]),
      nextPlayer: nextPlayer
    });
  }

  renderSquare(i) {
    let playerClass = this.state.historyPlayers[this.state.stepNumber]['squares'][i]
    const currentPlayer1 = this.state.historyPlayers[this.state.stepNumber]['squares'].findIndex((element) => {return element == 'player1'})
    const currentPlayer2 = this.state.historyPlayers[this.state.stepNumber]['squares'].findIndex((element) => {return element == 'player2'})

    if (this.state.nextPlayer == 'Player 1') {
      if (i == (currentPlayer1 + 1)) {
        playerClass += ' player1Next';
      } else if (i == (currentPlayer1 - 1)) {
        playerClass += ' player1Next';
      } else if (i == (currentPlayer1 + 9)) {
        playerClass += ' player1Next';
      } else if (i == (currentPlayer1 - 9)) {
        playerClass += ' player1Next';
      }
    }

    if (this.state.nextPlayer == 'Player 2') {
      if (i == (currentPlayer2 + 1)) {
        playerClass += ' player2Next';
      } else if (i == (currentPlayer2 - 1)) {
        playerClass += ' player2Next';
      } else if (i == (currentPlayer2 + 9)) {
        playerClass += ' player2Next';
      } else if (i == (currentPlayer2 - 9)) {
        playerClass += ' player2Next';
      }
    }

    return <Square
      number={i}
      history={playerClass}
      gameOnClick={() => this.handleClick(i)}
    />;
  }

  renderVWall(i) {
    return <VWall number={i} />;
  }

  renderHWall(i) {
    return <HWall number={i} />;
  }

  renderHWallRow(i) {
    const hWallRow = [...Array(8)].map((_, inner) => {
      return (
        <div className="hwall-wrapper">
          {this.renderHWall(i - inner)}
        </div>
      );
    });
    return hWallRow;
  }

  renderSquareAndVWallRow(square, vWall) {
    return (
      <div className="square-row">
        {this.renderSquare(square)}
        <div className="vwall-wrapper">
          {this.renderVWall(vWall)}
        </div>
        {this.renderSquare(square - 1)}
        <div className="vwall-wrapper">
          {this.renderVWall(vWall - 1)}
        </div>
        {this.renderSquare(square - 2)}
        <div className="vwall-wrapper">
          {this.renderVWall(vWall - 2)}
        </div>
        {this.renderSquare(square - 3)}
        <div className="vwall-wrapper">
          {this.renderVWall(vWall - 3)}
        </div>
        {this.renderSquare(square - 4)}
        <div className="vwall-wrapper">
          {this.renderVWall(vWall - 4)}
        </div>
        {this.renderSquare(square - 5)}
        <div className="vwall-wrapper">
          {this.renderVWall(vWall - 5)}
        </div>
        {this.renderSquare(square - 6)}
        <div className="vwall-wrapper">
          {this.renderVWall(vWall - 6)}
        </div>
        {this.renderSquare(square - 7)}
        <div className="vwall-wrapper">
          {this.renderVWall(vWall - 7)}
        </div>
        {this.renderSquare(square - 8)}
      </div>
    );
  }

  render() {
    const firstRow = [...Array(9)].map((_, i) => {
      return (
        this.renderSquare(80 - i)
      );
    });

    return (
      <div>
        <div className='game-info'>
          The move: {this.state.nextPlayer}
        </div>
        <div>
          <div className="square-row">
            {firstRow}
          </div>
          <div className="wall-row">
            {this.renderHWallRow(63)}
          </div>
          <div>
            {this.renderSquareAndVWallRow(71, 63)}
          </div>
          <div className="wall-row">
            {this.renderHWallRow(55)}
          </div>
          <div>
            {this.renderSquareAndVWallRow(62, 55)}
          </div>
          <div className="wall-row">
            {this.renderHWallRow(47)}
          </div>
          <div>
            {this.renderSquareAndVWallRow(53, 47)}
          </div>
          <div className="wall-row">
            {this.renderHWallRow(39)}
          </div>
          <div>
            {this.renderSquareAndVWallRow(44, 39)}
          </div>
          <div className="wall-row">
            {this.renderHWallRow(31)}
          </div>
          <div>
            {this.renderSquareAndVWallRow(35, 31)}
          </div>
          <div className="wall-row">
            {this.renderHWallRow(23)}
          </div>
          <div>
            {this.renderSquareAndVWallRow(26, 23)}
          </div>
          <div className="wall-row">
            {this.renderHWallRow(15)}
          </div>
          <div>
            {this.renderSquareAndVWallRow(17, 15)}
          </div>
          <div className="wall-row">
            {this.renderHWallRow(7)}
          </div>
          <div>
            {this.renderSquareAndVWallRow(8, 7)}
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
