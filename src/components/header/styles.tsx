import styled from "styled-components";

interface State {
    active?: boolean;
}

export const Container = styled.div `
    width: 100%;
    height: 50px;
    background-color: red;
    display: flex;
    justify-content: space-around;
`;

export const ListItem = styled.li<State> `
    list-style: none;
    color: ${props => props.active ? '#20E129' : '#BBC5E1'};
`;