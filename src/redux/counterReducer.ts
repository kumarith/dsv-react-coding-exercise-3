import { INCREMENT, DECREMENT, RESET } from './counterActionsTypes';

interface CounterState {
  count: number;

}

const initialState: CounterState = {
  count: 0,

};

const getRandomNumber = () => {
  return Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10
};

function moveToNearestOdd(number: number) {
  if (number % 2 === 0) {  // Check if the number is even
      return number + 1;
  } else {
      return number + 2;
  }
}
export default function counterReducer(state = initialState, action: any) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: (state.count - 1 > 0 ? state.count - 1 : state.count) };
    case "DECREMENTBYUSERINPUT":
      return { ...state, count: (state.count - parseInt(action.payload.userinput) > 0 ? state.count - parseInt(action.payload.userinput) : state.count) };
    case "INCREMENTBYRANDOMNO":
      return { ...state, count: state.count + getRandomNumber() };
    case "MOVE_TO_NEXT_ODD_NO":
        return { ...state, count:  moveToNearestOdd(state.count) };
    case "RESET":
      return { ...state, count: 0 }
    default:

    //throw new Error();
  }
}
