import React from 'react';

export default class OnlyEvens extends React.Component {
	
	shouldComponentUpdate(nextProps, nextState) {
    console.log('Should I update?');
   	// change code below this line
		// return nextProps.value % 2 === 0; either add this code here and render this.props.value or comment this out here and render the conditioanl statement
   	// change code above this line
   	 		return true;
	};

	
	componentDidUpdate() {
		console.log('Component re-rendered.');
	}


  render() {
  	
	console.log(this.props.value-1);

  	return <h1>{this.props.value % 2 === 0 ? this.props.value : this.props.value-1}</h1>
  };
};

