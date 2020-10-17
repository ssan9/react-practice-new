The TextInput component renders an input element in the DOM and accepts a ref that is forwarded to that input element. Finish the FocusableInput 
omponent:

The component should accept a focused prop. When the focused prop is changed from false to true, and the input is not focused, it should receive
the focus. If on mounting the focused prop is true, the input should receive the focus.



// React is loaded and is available as React and ReactDOM
// imports should NOT be used
class Input extends React.PureComponent {
  render() {
    let {forwardedRef, ...otherProps} = this.props; 
    return <input {...otherProps} ref={forwardedRef} />;
  }
}

const TextInput = React.forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />
});

class FocusableInput extends React.Component {
  
  ref = React.createRef()

  render() {
    return <TextInput ref={this.ref} />;
  }

  // When the focused prop is changed from false to true, 
  // and the input is not focused, it should receive focus.
  // If focused prop is true, the input should receive the focus.
  // Implement your solution below:
  componentDidUpdate(prevProps) {
    if(prevProps.focused !== this.props.focused && this.props.focused) { // or if (!prevProps.focused && this.props.focused) {
      this.ref.current.focus();
    }
  }
  
  componentDidMount() {
    if(this.props.focused) {
      this.ref.current.focus();
    }
  }
}

FocusableInput.defaultProps = {
  focused: false
};

const App = (props) => <FocusableInput focused={props.focused} />;

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);