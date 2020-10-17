import React from 'react';
import OnlyEvens from './OnlyEvens';

export default class Controller extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: 0
		};
	}
	addValue = () => {
		this.setState({
			value: this.state.value + 1
		});
	}
  render() {
    return (
			<div>
				<button onClick={this.addValue}>Add</button>
				<OnlyEvens value={this.state.value} />
			</div>
    );
  }
};
