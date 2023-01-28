const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feed back: {`${positivePercentage}%`}</p>
    </>
  );
};

export default Statistics;
