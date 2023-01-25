import PropTypes from 'prop-types';

const Controls = ({ onIncrement, onDecrement }) => (
  <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>
      increment by 1
    </button>
    <button type="button" onClick={onDecrement}>
      decrement by 1
    </button>
  </div>
);

export default Controls;
