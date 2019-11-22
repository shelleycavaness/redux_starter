import React from 'react';
import { connect } from 'react-redux';


const UserDetails = (props) => {
    //console.log("detail", props)
    return (
      <div>  
        <h2>User detail</h2>
        <p>{props.user.name} </p>
      </div>  
    )
}

const mapStateToProps = store => ({
    user: store.importedKeyForSelect
})

export default connect(
    mapStateToProps,
    undefined
)(UserDetails)