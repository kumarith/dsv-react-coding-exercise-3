import { INCREMENT, DECREMENT, RESET, DECREMENTBYUSERINPUT , MOVE_TO_NEXT_ODD_NO , INCREMENTBYRANDOMNO} from './counterActionTypes';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const decrementByUserInput = () => ({ type: DECREMENTBYUSERINPUT , payload: { userinput: Number }    });
export const incrementByRandomNo = () => ({ type: INCREMENTBYRANDOMNO  });
export const moveToNextOddNo = () => ({ type: MOVE_TO_NEXT_ODD_NO  });
export const reset = () => ({ type: RESET });