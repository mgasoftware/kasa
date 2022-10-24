import React from "react";

import Header from "../Features/Header";
import Footer from "../Features/Footer";
import "../../styles/Error404.css";

function Error404() {
    return (
        <div className="App">
            <Header />
            <div className="kasa-error">
                <h1 className="kasa-error404">404</h1>
                <h2 className="kasa-errorInfo">
                    Oups! La page que vous demandez n'existe pas.
                </h2>
                <a href="/" className="kasa-errorLink">
                    <p>Retourner sur la page d’accueil</p>
                </a>
            </div>
            <Footer />
        </div>
    )
}

export default Error404;