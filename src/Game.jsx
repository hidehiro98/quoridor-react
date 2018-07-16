import React from 'react';
import './Game.css';

import {Square} from './Square';
import {VWall, HWall} from './Wall';

import {Point} from './Point'

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
    super()

    this.hand = 0
    this.players = {
      player1: {
        wallCount: 10,
        pawn: new Point()
      },
      player2: {
        wallCount: 10,
        pawn: new Point()
      }
    }
    this.vWalls = [...Array(Game.BOARD_HEIGHT)].map(() => Array(Game.BOARD_WIDTH).fill(null))
    this.hWalls = [...Array(Game.BOARD_HEIGHT)].map(() => Array(Game.BOARD_WIDTH).fill(null))
    this.distanceMap = []
    
    this.players['player1'].pawn.set(0, Math.floor(Game.BOARD_WIDTH / 2))
    this.players['player2'].pawn.set(Game.BOARD_HEIGHT - 1, Math.floor(Game.BOARD_WIDTH / 2))

    this.calcDistanceMap(this.getCurrentPlayer())

    this.state = {
      history: [],
      hand: this.hand,
      players: this.players,
      vWalls: this.vWalls,
      hWalls: this.hWalls,
      distanceMap: this.distanceMap
    }
  }

  isPlayer1Hand() {
    return (this.hand % 2 === 0)
  }

  getCurrentPlayer() {
    return this.isPlayer1Hand() ? 'player1' : 'player2'
  }

  getNextPlayer() {
    return this.isPlayer1Hand() ? 'player2' : 'player1'
  }

  startTurn() {
  }

  endTurn() {
    this.hand++

    this.setState({
      hand: this.hand,
      players: this.players,
      vWalls: this.vWalls,
      hWalls: this.hWalls,
      distanceMap: this.distanceMap
    });
  }

  // Not included jump move
  canMove(pos, dir) {
    let ret = false
    let destPos = pos.add(dir)
    if (destPos.row >= 0 && destPos.row < Game.BOARD_HEIGHT &&
        destPos.col >= 0 && destPos.col < Game.BOARD_WIDTH) {
      if (dir.col === 0) {
        let row = pos.row + (dir.row - 1) / 2
        let col = pos.col
        ret =
          row < Game.BOARD_HEIGHT && col < Game.BOARD_WIDTH &&
          (col === 0 || this.hWalls[row][col - 1] == null) &&
          this.hWalls[row][col] == null
      } else if (dir.row === 0) {
        let row = pos.row
        let col = pos.col + (dir.col - 1) / 2
        ret =
          row < Game.BOARD_HEIGHT && col < Game.BOARD_WIDTH &&
          (row === 0 || this.vWalls[row - 1][col] == null) &&
          this.vWalls[row][col] == null
      }
    }
    return ret;
  }

  // How to use?
  tryMove(pos, dir, dist) {
    if(this.canMove(pos, dir)) {
      this.searchDistance(pos.add(dir), dist)
      return true
    }
    return false
  }

  canJump(pos, dir) {
    return this.existPawn(pos.add(dir))
  }

  existPawn(pos) {
    let bExistPawn = false
    for(let player in this.players) {
      bExistPawn |= this.players[player].pawn.equals(pos)
    }
    return bExistPawn
  }

  searchDistance(pos, dist) {
    if (dist <= 30) {
      this.distanceMap[pos.row][pos.col] = dist
      let dir = new Point(-1, 0)
      for (let i = 0; i < 4; i++) {
        if (this.canMove(pos, dir)) {
          let pos2 = pos.add(dir)
          if (this.distanceMap[pos2.row][pos2.col] > (dist + 1)) {
            this.searchDistance(pos2, dist + 1)
          }
        } else if (dist === 0 && this.canJump(pos, dir)) {
          
        }
        dir = dir.rotateClockwise()
      }

    }
  }

  calcDistanceMap(player) {
    this.distanceMap = [...Array(Game.BOARD_HEIGHT)].map(() => Array(Game.BOARD_WIDTH).fill(99))
    this.searchDistance(this.players[player].pawn, 0)
  }

  handleClickSquare(row, col) {
    this.startTurn()
    this.players[this.getCurrentPlayer()].pawn.set(row, col)
    this.calcDistanceMap(this.getNextPlayer())
    this.endTurn()
  }

  handleClickVWall(row, col) {
    this.startTurn()
    this.vWalls[row][col] = this.getCurrentPlayer()
    this.players[this.getCurrentPlayer()].wallCount--
    this.calcDistanceMap(this.getNextPlayer())
    this.endTurn()
  }

  handleClickHWall(row, col) {
    this.startTurn()
    this.hWalls[row][col] = this.getCurrentPlayer()
    this.players[this.getCurrentPlayer()].wallCount--
    this.calcDistanceMap(this.getNextPlayer())
    this.endTurn()
  }

  renderSquare(row, col) {
    let squareClass
    for(let player in this.state.players){
      if (this.state.players[player].pawn.equals(new Point(row, col))) {
        squareClass = player
      }
    }

    if (this.state.distanceMap[row][col] === 1 && !this.state.players[this.getNextPlayer()].pawn.equals(new Point(row, col))) {
      squareClass = this.getCurrentPlayer() + ' pending'
    }
    
    let dist = this.state.distanceMap[row][col]

    return <Square
      key={'square' + row + ':' + col}
      row={row}
      col={col}
      dist={dist}
      class={squareClass + ' font-white'}
      gameOnClick={() => {if(dist === 1){this.handleClickSquare(row, col)}}}
    />
  }

  renderVWall(row, col) {
    let wallClass = 'vwall vacant'
    if (this.state.vWalls[row][col] != null) {
      wallClass = 'vwall occupied'
    } else if (this.state.vWalls[row + 1][col] != null) {
      wallClass = ''
    }
    if (this.state.hWalls[row][col] != null) {
      wallClass = ''
    }

    return <VWall
      row={row}
      col={col} 
      class={wallClass}
      gameOnClick={() => this.handleClickVWall(row, col)}
    />;
  }

  renderHWall(row, col) {
    let wallClass = 'hwall vacant'
    if (this.state.hWalls[row][col] != null) {
      wallClass = 'hwall occupied'
    } else if (this.state.hWalls[row][col + 1] != null) {
      wallClass = ''
    }
    if (this.state.vWalls[row][col] != null) {
      wallClass = ''
    }

    return <HWall
      row={row}
      col={col} 
      class={wallClass}
      gameOnClick={() => this.handleClickHWall(row, col)}
    />;
  }

  renderHWallRow(row) {
    const hWallRow = [...Array(Game.VWALL_COUNT)].map((_, col) => {
      return (
        <div key={'hwall' + row + ':' + col} className="hwall-wrapper">
          {this.renderHWall(row, col)}
        </div>
      );
    });
    return hWallRow;
  }

  renderSquareAndVWallRow(row) {
    const squareRow = [...Array(Game.BOARD_WIDTH + Game.VWALL_COUNT)].map((_, inner) => {
      var col = parseInt(inner / 2, 10);
      if (inner % 2 === 0) {
        // マスを描画
        return (this.renderSquare(row, col));
      } else {
        // 壁を描画
        if (row < Game.VWALL_COUNT) {
          return (<div key={'vwall' + row + ':' + col} className="vwall-wrapper">{this.renderVWall(row, col)}</div>);
        } else {
          // 最初の行は縦壁を設置しない
          return null;
        }
      }
    });

    return (
      <div key={'square-row' + row} className="square-row">{squareRow}</div>
    );
  }

  render() {
    const board = [...Array(Game.BOARD_HEIGHT + Game.HWALL_COUNT)].map((_, inner) => {
      var row = parseInt(inner / 2, 10);
      if (inner % 2 === 0) {
        return (this.renderSquareAndVWallRow(row));
      } else {
        return (<div key={'wall-row' + row} className="wall-row">{this.renderHWallRow(row)}</div>);
      }
    });

    return (
      <div>
        <div className='game-info'>
          <div className={this.getCurrentPlayer()} >
            The move: {this.isPlayer1Hand() ? 'Player 1' : 'Player 2'}
          </div>
          <div className='player1'>
            Player 1 Wall: {this.state.players.player1.wallCount}
          </div>
          <div className='player2'>
            Player 2 Wall: {this.state.players.player2.wallCount}
          </div>
        </div>
        <div className='game-board'>
          {board.reverse()}
        </div>
      </div>
    );
  }
}

export default Game;
