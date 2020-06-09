import styled, {keyframes} from "styled-components";

export const FullScreenBox = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e0f7fa;
`;

export const ModulesContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
`;

export const move = keyframes`
    from {
        left: -400px;
        opacity: 0;
    }

    to {
        left: 0px;
        opacity: 1;
    }
`

export const ModuleBox = styled.div`
    position: relative;
    width: 400px;
    height: 150px;
    background-color: #80deea;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    transition: box-shadow 0.2s ease-out;
    @media screen and (max-width: 900px){
        width: 200px
    }
    &:hover {
        box-shadow: 3px 3px 5px rgba(0,0,0,0.5);
    }
    border-radius: 5px;
    animation: ${move} 0.6s 0.3s 1 both; 
`;