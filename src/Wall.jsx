import React, { Component } from 'react';
import './Wall.css';

export class VWall extends React.Component {
  render() {
    return (
      <div className={this.props.history} onClick={() => this.props.gameOnClick()}>
      </div>
    );
  }
}

export class HWall extends React.Component {
  render() {
    return (
      <div className={this.props.history} onClick={() => this.props.gameOnClick()}>
      </div>
    );
  }
}
