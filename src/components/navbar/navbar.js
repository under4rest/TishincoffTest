import React, { Component } from "react";
import Logo from '../../img/LOGO_tis.png';
import './navbar.css';

class Navbar extends Component {
    render(){
        return(
            <div className="navbar">
                <div className="container navigation">
                <div className="navigaion-logo">
                    <img src={Logo} alt="Тишинкофф"></img>
                </div>
                <div className="navigaion-items">
                    <div className="navigation-item">О нас</div>
                    <div className="navigation-item">Кофе</div>
                    <div className="navigation-item">Чай</div>
                    <div className="navigation-item">Контакты</div>
                </div>
                </div>
            </div>
        );
    }
}
export default Navbar;