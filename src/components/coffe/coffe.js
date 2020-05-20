import React, { Component } from 'React';
import SideImage from '../../img/coffeeimg.jpg';

class Coffee extends Component{
    render(){
        return(
            <div className="coffee bg">
                <div className="container">
                    <div className="col-12">
                    <h2 className="coffee-main-text">Зерновой кофе собственной обжарки.</h2>
                    </div>
                <div className="col-6 coffee-text">
                    <p className="coffee-primary-text">Каждую минуту по всей России люди выпивают более 100 чашек чая и кофе от компании Tishincoff. Присоединяйтесь к более чем 300 довольных партнеров, которые выбирают нас за качество и вкус.
Мы имеем все для того, чтобы ваше заведение только процветало, ведь продажа кофе оптом – это то, чем мы занимаемся на протяжении 12 лет. Представляем широкий ассортимент: кофейных смесей, ароматизированного кофе, кофе без кофеина, моносорта, кофе класса премиум, ямайка блюмаунтин, копи лювуак.</p>
                </div>
                <div className="col-6 coffee-image">
                    <img src={SideImage} />
                </div>
                </div>
            </div>
        )
    }
}

export default Coffee;