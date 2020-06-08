import styled from "styled-components";

export const Input = styled.input.attrs(props => ({
	type: "number",
	size: 70,
}))``;

export const CalculatorBox = styled.div`
	background-color: #bbdefb;
	padding: 16px;
	width: 300px;
`;