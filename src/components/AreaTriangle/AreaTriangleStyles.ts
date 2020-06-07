import styled from "styled-components";

export const Input = styled.input.attrs(props => ({
    type: "number",
}))``;

export const AreaTriangleBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 200px;
`;