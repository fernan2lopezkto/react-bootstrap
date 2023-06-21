import React from "react";
import NavBar from "./NavBar";
import logo from '../images/t-imagen.jpg';


const Header = () => {
    return(
        <header className="App-header">
        <img src={ logo } alt="👍" width="30" height="24"></img>
        <h1> Header </h1>
        <h1>APP</h1>
        </header>
    )
}

export default Header;