
import {ACTIONS} from "./reducer";

const DigitButton = ({digit,dispatch}) => {
    return <button
    onClick={() => dispatch({type:ACTIONS.ADD_DIGIT,payload:{digit}})}
    >{digit}</button>
}

const OperationButton = ({operation,dispatch}) => {
    return <button
    onClick={() => dispatch({type:ACTIONS.CHOOSE_OPERATION,payload:{operation}})}
    >{operation}</button>
}

export {DigitButton,OperationButton};