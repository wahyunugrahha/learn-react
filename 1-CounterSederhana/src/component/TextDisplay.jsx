function TextDisplay({ value }) {
  if (value < 0 || value > 10) {
    return <span>done</span>;
  }
  return <span>{value}</span>;
}

export default TextDisplay;
