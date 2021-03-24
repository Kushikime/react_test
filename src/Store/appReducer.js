const initialState = {
    userEarnings: {
        total: 4291.65,
        thisMonth: 8497.20
    },
    darkTheme: false,
    userState: 'offline'
};
  
  
export const appReducer = ( state = initialState, action ) =>{
    switch(action.type){
        //EXAMPLE
        // case "TASK_NAME":
        // return {
        //     ...state,
        //     data: state.data + action.payload
        // }

        case "SET_EARNINGS":
            return {
                ...state,
                userEarnings:  action.payload
            }

        case "CHANGE_THEME":
            return {
                ...state,
                darkTheme:  action.payload
            }

        case "CHANGE_USER_STATE":
            return {
                ...state,
                userState:  action.payload
            }
    
        default:
        return state
    }
}
