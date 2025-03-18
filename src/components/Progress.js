function Progress({ index, numQuestion }) {
  return (
    <header className="progress">
      <p>
        Question {index}/{numQuestion}
      </p>
    </header>
  );
}

export default Progress;
