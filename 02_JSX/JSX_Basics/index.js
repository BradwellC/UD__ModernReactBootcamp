class JSXDemo extends React.Component {
  render() {
    return(
      <div>
        <h1>My Image</h1>
        <img src="https://photutorial.com/wp-content/uploads/2023/04/Featured-image-AI-image-generators-by-Midjourney.png" />
      </div>
    )
  }
}

ReactDOM.render(<JSXDemo />, document.getElementById('root'));