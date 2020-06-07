import styled from "styled-components";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
    Link
} from "react-router-dom";

export const FullScreenBox = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ModulesContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
`;

export const ModuleBox = styled.div`
    width: 400px;
    height: 150px;
    background-color: #bbdefb;
    display: flex;
    justify-content: center;
    align-items: center;
`;