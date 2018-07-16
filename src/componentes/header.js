import React from "react";
import Menu from './mainMenu';
import Logo from '../images/logo.png';
const header = (props)=>{


    return (
        <div className="header">
            <div className="container">
            <div className="row">
                <a className="logo" href="index.html">
                <img alt="Logo" className="img-responsive" src={Logo} />
                </a>
            </div>
                <div className="row">
                    <Menu />
                </div>
            </div>
        </div>
    )
}

export default header;