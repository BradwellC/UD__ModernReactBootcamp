function getNum() {
  return Math.floor(Math.random() * 10) + 1;
}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    return (
      <div>
        <h1>Your number is: {num}</h1>
        <p>{ num === 9 ? 'Congrations!!' : 'Unlucky ! Try Again' }</p>
      </div>
    )
  }
}

ReactDOM.render(<NumPicker />, document.getElementById('root'));