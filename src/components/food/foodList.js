import React from 'react';
import {connect} from 'react-redux'; //connect to store

const FoodList = (props) => {
  return(
    <div>
      <h2>Food List</h2>
      <ul>
      { 
       props.foods.map( food => {
          return <div>         
              <li key={ food.foodType}>
              {food.foodType} 
          </li>
          <li> {food.recipieTitle}</li>
          <img src={food.image} key={food.image}/>
          <br/>
          <br/>
          <hr/>
          
          </div>
 
        })  
      }
      </ul>  
    </div>  
  )  
}

const mapPropsToStore2 = (store) =>({
    foods: store.foods
})

export default connect(
    mapPropsToStore2,
    undefined
)(FoodList)