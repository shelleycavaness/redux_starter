import {CHANGE_USER_SELECTED} from '../actions/userAction'
const intitialState = {}


export default function (state = intitialState , action){
    switch(action.type){
        case CHANGE_USER_SELECTED:
            console.log('after  switch')
            return action.payload;
        default:
            return state;

    }
}