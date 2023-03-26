
const ACTIONS = {
    ADD_DIGIT:"add-digit",
    CHOOSE_OPERATION:"choose-operation",
    CLEAR:"clear",
    DELETE_DIGIT:"delete-digit",
    EVALUATE:"evaluate",
}

const reducer = (state,action) => {
    const {currentOperand,previousOperand,operation} = state;
    const {type,payload} = action;

    switch(type){
        case ACTIONS.ADD_DIGIT:

        case ACTIONS.CHOOSE_OPERATION:

        case ACTIONS.CLEAR:

        case ACTIONS.DELETE_DIGIT:

        case ACTIONS.EVALUATE:

        default:
            return state;
    }
}

export {reducer,ACTIONS};