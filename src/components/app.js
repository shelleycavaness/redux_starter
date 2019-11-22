import React, { Component } from 'react';
import UserList from './user/userList';
import UserDetails from './user/userDetail';
import FoodList from './food/foodList';

export default class App extends Component {
  render() {
    return (
      <div>
        <div>React Redux ca marche</div>
        <UserList></UserList>
        <UserDetails></UserDetails>
        <FoodList></FoodList>  
      </div>
      
    );
  }
}
