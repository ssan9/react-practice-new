class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
  }
  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage = () => {
    const currentMessage = this.state.input;
    this.setState({
      input: '',
      messages: this.state.messages.concat(currentMessage)
    });
    //or
    // this.setState({
    //   input: '',
    //   messages: this.state.messages.concat(this.state.input)
    // });
  }
  render() {
    const renderMessages = this.state.messages.map( (message, i) => {
              return <li key={i}>{message}</li>
            });
          }
          
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          // {this.state.messages.map( (message, idx) => { // either directly ad the map function here or add it in the render method
          //     return (
          //        <li key={idx}>{message}</li>
          //     )
          //   })
          // }
          {renderMessages}
        </ul>
      </div>
    );
  }
};