import axios from 'axios';
import React, { ChangeEvent } from 'react';
import { TodoListProps, Todo, TodoState } from './types';
import HigherOrderComponent from './hoc';

class TodoList extends React.Component<TodoListProps, TodoState> {

  public render(): JSX.Element {
    const filteredList = this.props.data;
    return (
      <div>
        {
          filteredList?.map((todo: Todo, index: number): JSX.Element => {
            return <div key={index}>
              { todo.title }
            </div>
          })
        }
      </div>
    )
  }
};

const EnhancedTodoList = HigherOrderComponent<Todo>(TodoList, 'todos');
export default EnhancedTodoList;
