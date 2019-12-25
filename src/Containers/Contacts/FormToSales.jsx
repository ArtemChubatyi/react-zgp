import React, {Component} from 'react';

export class FormForSales extends Component  {
    render () {
        return (
            <>
                <div className="services-item-container__title mini">ХОТИТЕ СДЕЛАТЬ ЗАКАЗ?</div>
                <div className="services-item-container__description">Мы не можем жождаться, что бы поговорить об этом!</div>
                <div className="services-item-container__divider"/>
                <form action="">
                    <div className="inputs-group">
                        <input className='form-input' type="text" placeholder='Имя'/>
                        <input className='form-input' type="text" placeholder='Фамилия'/>
                    </div>
                    <div className="inputs-group">
                        <input className='form-input' type="text" placeholder='Эл. почта'/>
                        <input className='form-input' type="text" placeholder='Телефон'/>
                    </div>
                    <input className='form-input' type="text" placeholder='Доп. информация'/>
                    <button className="services-item-container__contect-button">ОТПРАВИТЬ</button>
                </form>
            </>
        );
    }
}