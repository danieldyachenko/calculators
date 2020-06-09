import styled from "styled-components";
import {move} from "../../AppStyles";

export const Input = styled.input.attrs(props => ({
	type: "number",
}))`
	outline: none;
	width: 100%;
	box-sizing : border-box;
	font-size: 1.1em;
	border: none;
	border-radius: 5px;
	padding: 5px;
`;

export const CalculatorBox = styled.div`
	position: relative;
	background-color: #80deea;
	padding: 16px;
	width: 300px;
	box-sizing: border-box;
	transition: box-shadow 0.3s ease-out;
    &:hover {
        box-shadow: 3px 3px 5px rgba(0, 96, 100, 0.5);;
    }
    border-radius: 5px;
    animation: ${move} 0.6s 0.3s 1 both;
`;

export const Button = styled.button`
	outline: none;
	background-color: #0097a7;
	border: none;
	padding 8px 10px;
	color white;
	font-size: 1.1em;
	border-radius: 5px;
`;