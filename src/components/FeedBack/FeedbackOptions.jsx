import PropTypes from 'prop-types';

// import css from '.module.css';

const FeedbackOptions = ({ options, onClick }) => {
  return options.map(option => (
    <button
      key={option}
      type="button"
      onClick={() => {
        onClick(option);
      }}
    >
      {option}
    </button>
  ));
};

export default FeedbackOptions;
FeedbackOptions.propTypes = {
  option: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
