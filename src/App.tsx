import React from 'react';
import EnhancedUsersList from './components/UsersList';
import EnhancedTodoList from './components/TodoList';

class App extends React.Component {
  public render(): JSX.Element {
    return (
      <div className='main-container'>
        <EnhancedUsersList/>
        <EnhancedTodoList/>
      </div>
    )
  }
};

export default App;

