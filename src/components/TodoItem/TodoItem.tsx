/* eslint-disable jsx-a11y/label-has-associated-control */
import classNames from 'classnames';
import { Todo } from '../../types/Todo';
import React from 'react';

type Props = {
  todo: Todo;
  //tempTodo: Todo | null;
  onDelete: (todoId: number) => void;
  isTodoLoading: boolean;
  isTodoDeleting: boolean;
  isProcessed: boolean;
  creatingTodo: boolean;
};

export const TodoItem: React.FC<Props> = props => {
  const {
    todo,
    //tempTodo,
    onDelete,
    isTodoLoading,
    isTodoDeleting,
    isProcessed,
    //creatingTodo,
  } = props;
  const { title, id } = todo;

  return (
    <div
      data-cy="Todo"
      className={classNames('todo', 'item-enter-done', {
        completed: todo.completed,
      })}
    >
      <label className="todo__status-label">
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          checked={todo.completed}
          onClick={() => {}}
        />
      </label>

      <span data-cy="TodoTitle" className="todo__title">
        {title}
      </span>
      {!isTodoDeleting && (
        <button
          type="button"
          className="todo__remove"
          data-cy="TodoDelete"
          disabled={isTodoLoading || isProcessed}
          onClick={() => onDelete(id)}
        >
          ×
        </button>
      )}
      {/*{(id === 0 || isProcessed) && (*/}
      <div
        data-cy="TodoLoader"
        className={classNames('modal overlay', {
          'is-active': isProcessed || id === 0,
        })}
      >
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
      {/*})}*/}
    </div>
  );
};
