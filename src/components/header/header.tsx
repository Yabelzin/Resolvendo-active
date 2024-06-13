import  React from "react";
import { Container, ListItem } from "./styles";
import { Link, useNavigate } from "react-router-dom";

interface Props {
    title?: string,
    name?: string,
    age?: number,
}

function Header({ title, name, age }: Props) {
    
    const navigate = useNavigate();

    return (
        <div>
            <Container>
                <Link style={{textDecoration: 'none'}} to={"/"}>
                    <ListItem active={true}>Home</ListItem>
                </Link>
                <ListItem active={false}>Contact</ListItem>
                <ListItem active={false}>Fotos</ListItem>
                <Link style={{textDecoration: 'none'}} to={"/user-info"}>
                    <ListItem onClick={() => {navigate("/user-info")}} active={true}>User Info</ListItem>
                </Link>

            </Container>  
        </div>

    )
}

export default Header;

