import React, { Component } from 'react';
import './Game.css';

import Square from './Square';
import {VWall, HWall} from './Wall';

class Game extends React.Component {
  static get BOARD_WIDTH() {
    return 9;
  }

  static get BOARD_HEIGHT() {
    return 9;
  }

  static get VWALL_COUNT() {
    return Game.BOARD_WIDTH - 1;
  }

  static get HWALL_COUNT() {
    return Game.BOARD_HEIGHT -1;
  }

  constructor() {
    super();
    this.state = {
      historyPlayers: [{
        squares: Array(Game.BOARD_WIDTH * Game.BOARD_HEIGHT).fill(null),
      }],
      historyVWalls: [{
        squares: Array(Game.VWALL_COUNT * Game.HWALL_COUNT).fill('vwall'),
      }],
      historyHWalls: [{
        squares: Array(Game.VWALL_COUNT * Game.HWALL_COUNT).fill('hwall'),
      }],
      stepNumber: 0,
      nextPlayer: 'Player 1'
    };
    this.state.historyPlayers[0]['squares'][Math.floor(Game.BOARD_WIDTH / 2)] = 'player1';
    this.state.historyPlayers[0]['squares'][Game.BOARD_WIDTH * Game.BOARD_HEIGHT - Math.ceil(Game.BOARD_WIDTH / 2)] = 'player2';
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
      player = 'vwall player1';
    } else {
      player = 'vwall player2';
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
      player = 'hwall player1';
    } else {
      player = 'hwall player2';
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
        playerClass += ' player1 playerNext';
      } else if (i == (currentPlayer1 - 1)) {
        playerClass += ' player1 playerNext';
      } else if (i == (currentPlayer1 + 9)) {
        playerClass += ' player1 playerNext';
      } else if (i == (currentPlayer1 - 9)) {
        playerClass += ' player1 playerNext';
      }
    }

    if (this.state.nextPlayer == 'Player 2') {
      if (i == (currentPlayer2 + 1)) {
        playerClass += ' player2 playerNext';
      } else if (i == (currentPlayer2 - 1)) {
        playerClass += ' player2 playerNext';
      } else if (i == (currentPlayer2 + 9)) {
        playerClass += ' player2 playerNext';
      } else if (i == (currentPlayer2 - 9)) {
        playerClass += ' player2 playerNext';
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
    const hWallRow = [...Array(Game.VWALL_COUNT)].map((_, inner) => {
      return (
        <div className="hwall-wrapper">
          {this.renderHWall(i + inner)}
        </div>
      );
    });
    return hWallRow;
  }

  renderSquareAndVWallRow(square, vWall) {
    const squareRow = [...Array(Game.BOARD_WIDTH + Game.VWALL_COUNT)].map((_, inner) => {
      var col = parseInt(inner / 2, 10);
      if (inner % 2 === 0) {
        return (this.renderSquare(square + col));
      } else {
        if (square >= Game.BOARD_WIDTH * Game.HWALL_COUNT) {
          // 最初の行は縦壁を設置しない
          return null;
        } else {
          // それ以降は設置
          return (<div className="vwall-wrapper">{this.renderVWall(vWall + col)}</div>);
        }
      }
    });

    return (
      <div className="square-row">{squareRow}</div>
    );
  }

  render() {
    const board = [...Array(Game.BOARD_HEIGHT + Game.HWALL_COUNT)].map((_, inner) => {
      var row = parseInt(inner / 2, 10);
      if (inner % 2 === 0) {
        return (this.renderSquareAndVWallRow(row * Game.BOARD_WIDTH, row * Game.VWALL_COUNT));
      } else {
        return (<div className="wall-row">{this.renderHWallRow(row * Game.VWALL_COUNT)}</div>);
      }
    });

    return (
      <div>
        <div className='game-info'>
          The move: {this.state.nextPlayer}
        </div>
        <div className='game-board'>
          {board.reverse()}
        </div>
      </div>
    );
  }
}

export default Game;
