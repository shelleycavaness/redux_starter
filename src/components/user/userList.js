import React from 'react';
import {connect} from 'react-redux';  //connect to store
import {changeUserSelected} from '../../actions/userAction';

 const UserList = (props) => {
    // console.log(props)
    //onClick={()=> props.changeUser(user)} you need an anonomous function to keep it from rerendering
    return (
        <div>
            <h1>UserList</h1>
            <ul>
               {
               props.users.map( user => {
                 return <li key={user.name}  onClick={()=> props.changeUser(user)}>
                     {user.name} {user.email} {user.age}
                 </li>  
               })
               } 
            </ul>
        </div>
    )
 };

//read in the store
const mapStateToProps = (store) =>({
    users: store.users
})
//what does this dispatch do ?
const mapDispatchToProps = dispatch =>({
  changeUser : (user)=> dispatch(changeUserSelected(user))
})


 export default connect(
     mapStateToProps, //reading
     mapDispatchToProps //writing    
     //undefined  when you are not writing with a function
     )(UserList)
