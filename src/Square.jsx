import React from 'react';
import tapOrClick from 'react-tap-or-click'
import './Square.css';

export class Square extends React.Component {
    render() {
    return (
      <div className='square' {...tapOrClick(this.props.gameOnClick)}>
        <div data-row={this.props.row} data-col={this.props.col} className={this.props.class}></div>
      </div>
    );
  }
}
