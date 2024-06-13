import React from "react";
import Header from "../../components/header/header";
import "./styles.css"

function InfoScreen() {
    return (
        <>
            <Header/>
            <div className="info-screen">
                <h1 id="coisas">Coisas</h1>
            </div>
        </>
        
    )
}

export default InfoScreen;