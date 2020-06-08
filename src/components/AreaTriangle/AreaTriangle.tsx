import React, {useReducer} from "react";
import {CalculatorBox, Input} from "../common/styles";

interface IState {
    sideA: number | null
    sideB: number | null
    sideC : number | null
    result: number | null | string
}

const initialState: IState = {
    sideA: null,
    sideB: null,
    sideC : null,
    result: null
};

const reducer = (state, action): IState => {
    switch (action.type) {
        case 'SIDE_A':
            return {...state, sideA: action.sideA}
        case 'SIDE_B':
            return {...state, sideB: action.sideB}
        case 'SIDE_C':
            return {...state, sideC: action.sideC}
        case 'CALCULATE':
            return {...state, result: action.result}
        default:
            return state
    }
}

export const AreaTriangle = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const calculate = (a, b, c) => {
        const p = (a + b + c)/2
        const s = Math.sqrt(p * (p - a) * (p - b) * (p - c))
        let result
        isNaN(s) ? result = 'There is no such triangle' : result = s
        dispatch({type: 'CALCULATE', result: result})
    }

    const setSideA = sideA => dispatch({type: 'SIDE_A', sideA: Number(sideA)})

    const setSideB = sideB => dispatch({type: 'SIDE_B', sideB: Number(sideB)})

    const setSideC = sideC => dispatch({type: 'SIDE_C', sideC: Number(sideC)})


    return (
        <CalculatorBox>
            <p>side (a)</p>
            <Input onChange={event => setSideA(event.target.value)} />
            <p>side (b)</p>
            <Input onChange={event => setSideB(event.target.value)} />
            <p>side (c)</p>
            <Input onChange={event => setSideC(event.target.value)} /><br/>
            <p><button onClick={() => calculate(state.sideA, state.sideB, state.sideC)}>Calculate</button></p>
            <span>result: {state.result}</span>
        </CalculatorBox>
    )
}