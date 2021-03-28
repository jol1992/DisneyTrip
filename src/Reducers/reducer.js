const reducer =(state,action)=>{
    switch(action.type){
        case('showUsers'):
            const displayUsers= state.showUsers == null?false:!state.showUsers;
            return {...state,showUsers:displayUsers};
        case('setCurrentUser'):
        return {...state,currentUser:action.payload};
        case('showDialog'):
        const dialog= action.payload === null?state.dialog:action.payload;
        return {...state,showDialog:!state.showDialog,dialog:dialog}
        default:
            return {...state,currentPage:action.type};
        
    }
}

export default reducer