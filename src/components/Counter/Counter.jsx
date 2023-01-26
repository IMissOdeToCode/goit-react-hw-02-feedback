import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import Value from './Value';
import Controls from './Control';

import css from './Counter.module.css';

class Counter extends Component {
  static defaultProps = {
    initialValue: 40,
  };

  // static propTypes = {
  //   ///
  // };

  state = { value: this.props.initialValue };

  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  handledDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    return (
      <div className={css.wrapper}>
        <Value value={this.state.value} />

        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handledDecrement}
        />
      </div>
    );
  }
}

export default Counter;

// Counter.propTypes = {};
