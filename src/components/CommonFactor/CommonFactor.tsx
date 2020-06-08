import React, {useReducer} from "react";
import {CalculatorBox, Input} from "../common/styles";

interface IState {
    argument1: number | null
    argument2: number | null
    result: number | null | string
}

const initialState: IState = {
    argument1: null,
    argument2: null,
    result: null
};

const reducer = (state, action): IState => {
    switch (action.type) {
        case 'SET_ARGUMENT_1':
            return {...state, argument1: action.argument1}
        case 'SET_ARGUMENT_2':
            return {...state, argument2: action.argument2}
        case 'CALCULATE':
            return {...state, result: action.result}
        default:
            return state
    }
}

export const CommonFactor = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const setArgument1 = arg => dispatch({type: 'SET_ARGUMENT_1', argument1: Number(arg)})

    const setArgument2 = arg => dispatch({type: 'SET_ARGUMENT_2', argument2: Number(arg)})

    const calculate = (x, y) => {
        if (y > x) return calculate(y, x);
        if (!y) return x;
        dispatch({type: 'CALCULATE', result: calculate(y, x % y)})
    }

    return (
      <CalculatorBox>
        <p>argument 1</p>
        <Input onChange={event => setArgument1(event.target.value)} />
        <p>argument 2</p>
        <Input onChange={event => setArgument2(event.target.value)} />
        <p><button onClick={() => calculate(state.argument1, state.argument2)}>Calculate</button></p>
        <span>result: {state.result}</span>
      </CalculatorBox>
    )
}