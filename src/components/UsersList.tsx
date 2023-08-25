import axios from 'axios';
import React, { ChangeEvent } from 'react';
import { UsersListProps, User, UserState} from './types';
import HigherOrderComponent from './hoc';

class UsersList extends React.Component<UsersListProps, UserState> {

  public render(): JSX.Element {
    const filteredList = this.props.data;
    return (
      <div>
        {
          filteredList?.map((user: User, index: number): JSX.Element => {
            return <div key={index}>
              { user.name }
            </div>
          })
        }
      </div>
    )
  }

};

const EnhancedUsersList = HigherOrderComponent<User>(UsersList, 'users')
export default EnhancedUsersList;




