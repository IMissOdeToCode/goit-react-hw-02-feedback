import React from 'react';
import PropTypes from 'prop-types';

import css from './Counter.module.css';

class Counter extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    ///
  };

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
        <span className="Counter__value">{this.state.value}</span>
        <div className="Counter__controls">
          <button type="button" onClick={this.handleIncrement}>
            increment by 1
          </button>
          <button type="button" onClick={this.handledDecrement}>
            decrement by 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
