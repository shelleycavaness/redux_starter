export const CHANGE_USER_SELECTED ="CHANGE_USER_SELECTED"

export const changeUserSelected = (user) => dispatch => {
    // console.log("action")
    dispatch({
        type : CHANGE_USER_SELECTED,
        payload: user
    })

}