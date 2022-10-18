import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewToDo = (todo) => {
    const action = {
      type: '[TODO] Add Item',
      payload: todo,
    };

    dispatch(action);
  };

  const handleRemoveToDo = (id) => {
    dispatch({
      type: '[TODO] Remove Item',
      payload: id,
    });
  };

  const handleToggleToDo = (id) => {
    dispatch({
      type: '[TODO] Toggle Item',
      payload: id,
    });
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleNewToDo,
    handleRemoveToDo,
    handleToggleToDo,
  };
};
