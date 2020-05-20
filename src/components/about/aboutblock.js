import React, { Component } from 'React';

class Aboutblock extends Component{
    render(){
        return(
            <div className="about">
                <div className="container">
                    
                    <h2 className="about-main col-12">Немного о нашей компании</h2>
                    <div className="about-image col-6">
                        <img src="./src/img/mainbg.jpg" className="about-image-content" />
                    </div>
                    <div className="container container-text col-6">
                    <div className="about-text col-12">
                        <p>
						    У каждого уважающего себя ресторана, кафе или бара должен быть «свой» поставщик чая и кофе. Такая компания, где рады вашему звонку. Где счастливы, когда вы получаете прибыль, и готовы вам в этом помогать.Такой поставщик знает ваш бизнес и вас лично, живёт вашими интересами, относится к работе более ответственно. Свой поставщик — это как личный врач, автомеханик, портной, адвокат, тренер…
						</p>
                    </div>
                    <div className="about-text col-12">
                        <p>Компания TISHINCOFF уже 12 лет делает все, чтобы стать для вас своей. Мы ориентированы на долгосрочное партнерство, изучаем рынок, на котором вы работаете, мы используем свой опыт на благо сотрудничества и не практикуем формальный подход. Мы конвертируем нашу продукцию в прибыль и совмещаем эффективное с эффектным. Педантичны, полны идей и не успокаиваемся, пока не добьемся достойного результата.</p>
                    </div>
                    <div className="about-text col-12">
                        <p>Мы работаем через эмоции, становимся надежным помощником в вашем бизнесе. Не только поставим вам продукцию, мы посоветуем как использовать ее для получения максимальной прибыли, разработаем для вас индивидуальное меню и обучим ваш персонал грамотной работе с использованием одних из лучших оборудований, который мы также предоставим для вас.</p>
                    </div>
                </div>
                </div>
            </div>
        );
    }
} 
export default Aboutblock;