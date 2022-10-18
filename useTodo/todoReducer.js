export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case '[TODO] Add Item':
      return [...initialState, action.payload];
    case '[TODO] Remove Item':
      return initialState.filter((todo) => todo.id !== action.payload);
    case '[TODO] Toggle Item':
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        }

        return todo;
      });
    default:
      return initialState;
  }
};
