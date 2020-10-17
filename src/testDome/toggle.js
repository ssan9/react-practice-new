The message component contains an anchor element and a paragraph below the anchor. Rendering the paragraph should be toggled by clicking on the 
anchor element using the following logic:

- At the start, the paragraph should not be rendered
- After a click, the paragraph should be rendered
- After another click, the paragraph should not be rendered

Finish the message component by implementing the logic
 



// React is loaded and is available as React and ReactDOM
// imports should NOT be used
class Message extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false
    };
    this.toggleDisplay = this.toggleDisplay.bind(this);
  }
  
  toggleDisplay() {
    this.setState({
      display: !this.state.display
    });
  }
  
  render() {
    if (this.state.display) {
      return (<React.Fragment>
          <a href="#" onClick={this.toggleDisplay}>Want to buy a new car?</a>
          <p>Call +11 22 33 44 now!</p>
        </React.Fragment>);
    } else {
      return (<React.Fragment>
          <a href="#" onClick={this.toggleDisplay}>Want to buy a new car?</a>
        </React.Fragment>);
    }
  }
}