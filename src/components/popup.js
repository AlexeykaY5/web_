import '../styles/popup.css';
import React, { Component } from 'react';
import close from '../img/close.png';

class Popup extends Component {
    render() {
        return (
            <div className='popup'>
                <div className='title'>
                    <h3>Заполните поля и мы с вами свяжемся</h3>
                    <span class="closebtn" onclick="this.parentElement.style.display='none';">
                        <img src={close} alt="" />
                    </span>
                </div>
                <form action='form'>
                    <div>
                        <div className='form_block'>
                            <p>Имя</p>
                            <input type="text" placeholder='Ваше имя'/>
                        </div>
                        <div className='form_block'>
                            <p>Телефон</p>
                            <input type="telefon" placeholder='Ваше телефон'/>
                        </div>
                        <div className='form_block'>
                            <p>Дополнительная информация</p>
                            <input type="text" placeholder='Введите текст сюда'/>
                        </div>
                    </div>
                    <div className='radioButton'>
                        <p>Выберите что нужно сделать</p>
                        <fieldset>
                            <div>
                                <input id="brickwall" type="radio" name='drone' value="brickwall" checked/>
                                <label for="brickwall">Обустройство скважин</label>
                            </div>
                            <div>
                                <input id="drill" type="radio" name='drone' value="drill"/>
                                <label for="drill">Бурение скважины</label>
                            </div>
                            <div>
                                <input id="cons" type="radio" name='drone' value="cons"/>
                                <label for="cons">Тампонаж и консервация</label>
                            </div>
                            <div>
                                <input id="heater" type="radio" name='drone' value="heater"/>
                                <label for="heater">Монтаж отопления</label>
                            </div>
                        </fieldset>
                        
                    </div>
                    <div>
                        <input type="check" checked/>
                        <p>Отправляя свои данные вы соглашаетесь с&nbsp;
                            <a href="#!">политикой конфиденциальности</a>
                        </p>
                    </div>
                    <button>Отправить</button>
                </form>
            </div>
        );
    }
}

export default Popup;
