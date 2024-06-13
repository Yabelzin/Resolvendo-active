import styled from "styled-components";

interface State {
    active?: boolean;
}

export const Container = styled.div `
    width: 100%;
    height: 50px;
    background-color: aliceblue;
    color: black;
    border-bottom: solid #2b5dc7 2px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const ListItem = styled.li<State> `
    list-style: none;
    color: ${props => props.active ? '#2b5dc7' : '#d4d8e4'};
    &:hover {
        cursor: ${props => props.active ? '' : 'default'}    
    }
`;
