function FinishScreen({ points, maxPossiblePoints }) {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <p className="results">
      You Scored {points} out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
    </p>
  );
}

export default FinishScreen;
