// actions.ts
export const increment = () => ({
    type: 'INCREMENT' as const
  });
  
  export const decrement = () => ({
    type: 'DECREMENT' as const
  });
  
  export const reset = () => ({
    type: 'RESET' as const
  });
  
  export type CounterActionTypes = ReturnType<typeof increment | typeof decrement | typeof reset>;
  