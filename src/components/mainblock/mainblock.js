import React, { Component } from "react";

import './mainblock.css'
class Mainblock extends Component {
    render(){
        return(
            <div className="bg main">
                <div className="container main">
                    <div className="col-6 main-text">
                        <h1>Все, что нужно</h1>
                        <p>из одних рук для ведения чайно-кофейного бизнеса в кафе, кофейнях, ресторанах и чайных магазинах.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mainblock;