const immutableReducer = (state = [0,1,2,3,4,5], action) => {
  switch(action.type) {
    case 'REMOVE_ITEM':
      return [// either return this return statement or the the one commented out below. I am guessing this solution would work; not the below one 
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
      /*let newState = [...state];  // I am guessing this solution might not work
      newState.splice(action.index, 1);
      return newState;*/
    default:
      return state;
  }
};


// Explanation of first solution

I’m gonna try and explain because it took me a while to get it too. So let’s say you want to send an action to remove item 3, so the result is [0,1,2,4,5].

So with slice you slice up until 3: arr.slice(0, 3), which gives you [0,1,2]. Then you do arr.slice(4) which gives you [4,5] because it goes until the end of the array from where you tell it to start.

And the +1 you’re seeing is where it continues from, in this case 3+1 =4 (because we want to eliminate 3).

Finally you need destructuring to “glue” the arrays back together, hence the …state etc.

I hope this makes sense.

[0, 1, 2, 3, 4, 5]

1st part - > slice [0, 3] 
             sol -> [0, 1, 2]

2nd part -> slice(4) // how do we get 4?
            sol -> [4, 5]


this is how we get 4 ->
action.index = 3

we want to remove 3 from array so we will do + 1 that is 4
so slice(3+1) = slice(4)

that will return [4, 5]

