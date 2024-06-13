import React from "react";
import Header from "../../components/header/header";
import { HomeScreen } from "./styles";


function Home() {
    return (
        <div>
            <Header/>
            <HomeScreen className="home-screen"></HomeScreen>
        </div>
    )
};

export default Home;