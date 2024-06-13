import { useState } from "react";
import { Container, ListItem } from "./styles";

interface Props {
    title?: string,
    name?: string,
    age?: number,
}

function Header({ title, name, age }: Props) {
    
    const [item, setItem] = useState(true);

    return (


        <Container>
            <ListItem active={true}>Home</ListItem>
            <ListItem active={false}>Contato</ListItem>
            <ListItem active={true}>Fotos</ListItem>
        </Container>
    )
}

export default Header;

