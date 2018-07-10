import React from 'react';
import './Wall.css';

export class VWall extends React.Component {
  render() {
    return (
      <div data-row={this.props.row} data-col={this.props.col} className={this.props.class} onClick={() => this.props.gameOnClick()}>
      </div>
    );
  }
}

export class HWall extends React.Component {
  render() {
    return (
      <div data-row={this.props.row} data-col={this.props.col} className={this.props.class} onClick={() => this.props.gameOnClick()}>
      </div>
    );
  }
}
