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
        squares: Array(64).fill('vwall'),
      }],
      historyHWalls: [{
        squares: Array(64).fill('hwall'),
      }],
      stepNumber: 0,
      nextPlayer: 'Player 1',
      player1Walls: 10,
      palyer2Walls: 10
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
    let currentHistoryPlayers = this.state.historyPlayers[this.state.stepNumber]['squares'].slice()

    currentHistoryPlayers[currentHistoryPlayers.findIndex((element) => {return element == player})] = null
    currentHistoryPlayers[i] = player

    const history = this.state.historyPlayers.slice(0, this.state.stepNumber + 1);
    const historyVWalls = this.state.historyVWalls.slice(0, this.state.stepNumber + 1);
    const historyHWalls = this.state.historyHWalls.slice(0, this.state.stepNumber + 1);

    this.setState({
      historyPlayers: history.concat([{
        squares: currentHistoryPlayers
      }]),
      historyVWalls: historyVWalls.concat([{
        squares: historyVWalls[historyVWalls.length - 1]['squares']
      }]),
      historyHWalls: historyHWalls.concat([{
        squares: historyHWalls[historyHWalls.length - 1]['squares']
      }]),
      stepNumber: nextStepNumber,
      nextPlayer: nextPlayer
    });
  }

  handleClickVWall(i) {
    let player = ''
    if (this.state.stepNumber % 2 == 0) {
      player = 'vwall-player1';
    } else {
      player = 'vwall-player2';
    }

    let nextPlayer = ''
    if (this.state.stepNumber % 2 == 1) {
      nextPlayer = 'Player 1';
    } else {
      nextPlayer = 'Player 2';
    }

    const nextStepNumber = this.state.stepNumber + 1
    let currentHistoryVWalls = this.state.historyVWalls[this.state.stepNumber]['squares'].slice()
    let currentHistoryHWalls = this.state.historyHWalls[this.state.stepNumber]['squares'].slice()

    currentHistoryVWalls[i] = player
    currentHistoryHWalls[i] = null

    if (i > 7) {
      currentHistoryVWalls[i - 8] = null
    }

    const historyPlayers = this.state.historyPlayers.slice(0, this.state.stepNumber + 1);
    const historyVWalls = this.state.historyVWalls.slice(0, this.state.stepNumber + 1);
    const historyHWalls = this.state.historyHWalls.slice(0, this.state.stepNumber + 1);

    this.setState({
      historyPlayers: historyPlayers.concat([{
        squares: historyPlayers[historyPlayers.length - 1]['squares']
      }]),
      historyVWalls: historyVWalls.concat([{
        squares: currentHistoryVWalls
      }]),
      historyHWalls: historyHWalls.concat([{
        squares: currentHistoryHWalls
      }]),
      stepNumber: nextStepNumber,
      nextPlayer: nextPlayer
    });
  }

  handleClickHWall(i) {
    let player = ''
    if (this.state.stepNumber % 2 == 0) {
      player = 'hwall-player1';
    } else {
      player = 'hwall-player2';
    }

    let nextPlayer = ''
    if (this.state.stepNumber % 2 == 1) {
      nextPlayer = 'Player 1';
    } else {
      nextPlayer = 'Player 2';
    }

    const nextStepNumber = this.state.stepNumber + 1
    let currentHistoryVWalls = this.state.historyVWalls[this.state.stepNumber]['squares'].slice()
    let currentHistoryHWalls = this.state.historyHWalls[this.state.stepNumber]['squares'].slice()

    currentHistoryVWalls[i] = null
    currentHistoryHWalls[i] = player

    if (i % 8 != 0) {
      currentHistoryHWalls[i - 1] = null
    }

    const historyPlayers = this.state.historyPlayers.slice(0, this.state.stepNumber + 1);
    const historyVWalls = this.state.historyVWalls.slice(0, this.state.stepNumber + 1);
    const historyHWalls = this.state.historyHWalls.slice(0, this.state.stepNumber + 1);

    this.setState({
      historyPlayers: historyPlayers.concat([{
        squares: historyPlayers[historyPlayers.length - 1]['squares']
      }]),
      historyVWalls: historyHWalls.concat([{
        squares: currentHistoryVWalls
      }]),
      historyHWalls: historyHWalls.concat([{
        squares: currentHistoryHWalls
      }]),
      stepNumber: nextStepNumber,
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
    const vWallClass = this.state.historyVWalls[this.state.stepNumber]['squares'][i]

    return <VWall
      number={i}
      history={vWallClass}
      gameOnClick={() => this.handleClickVWall(i)}
    />;
  }

  renderHWall(i) {
    const hWallClass = this.state.historyHWalls[this.state.stepNumber]['squares'][i]

    return <HWall
      number={i}
      history={hWallClass}
      gameOnClick={() => this.handleClickHWall(i)}
    />;
  }

  renderHWallRow(i) {
    const hWallRow = [...Array(8)].map((_, inner) => {
      return (
        <div className="hwall-wrapper">
          {this.renderHWall(i + inner)}
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
        {this.renderSquare(square + 1)}
        <div className="vwall-wrapper">
          {this.renderVWall(vWall + 1)}
        </div>
        {this.renderSquare(square + 2)}
        <div className="vwall-wrapper">
          {this.renderVWall(vWall + 2)}
        </div>
        {this.renderSquare(square + 3)}
        <div className="vwall-wrapper">
          {this.renderVWall(vWall + 3)}
        </div>
        {this.renderSquare(square + 4)}
        <div className="vwall-wrapper">
          {this.renderVWall(vWall + 4)}
        </div>
        {this.renderSquare(square + 5)}
        <div className="vwall-wrapper">
          {this.renderVWall(vWall + 5)}
        </div>
        {this.renderSquare(square + 6)}
        <div className="vwall-wrapper">
          {this.renderVWall(vWall + 6)}
        </div>
        {this.renderSquare(square + 7)}
        <div className="vwall-wrapper">
          {this.renderVWall(vWall + 7)}
        </div>
        {this.renderSquare(square + 8)}
      </div>
    );
  }

  render() {
    const firstRow = [...Array(9)].map((_, i) => {
      return (
        this.renderSquare(72 + i)
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
            {this.renderHWallRow(56)}
          </div>
          {this.renderSquareAndVWallRow(63, 56)}
          <div className="wall-row">
            {this.renderHWallRow(48)}
          </div>
          {this.renderSquareAndVWallRow(54, 48)}
          <div className="wall-row">
            {this.renderHWallRow(40)}
          </div>
          {this.renderSquareAndVWallRow(45, 40)}
          <div className="wall-row">
            {this.renderHWallRow(32)}
          </div>
          {this.renderSquareAndVWallRow(36, 32)}
          <div className="wall-row">
            {this.renderHWallRow(24)}
          </div>
          {this.renderSquareAndVWallRow(27, 24)}
          <div className="wall-row">
            {this.renderHWallRow(16)}
          </div>
          {this.renderSquareAndVWallRow(18, 16)}
          <div className="wall-row">
            {this.renderHWallRow(8)}
          </div>
          {this.renderSquareAndVWallRow(9, 8)}
          <div className="wall-row">
            {this.renderHWallRow(0)}
          </div>
          {this.renderSquareAndVWallRow(0, 0)}
        </div>
      </div>
    );
  }
}

export default Game;
