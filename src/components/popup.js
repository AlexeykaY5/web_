import '../styles/popup.css';
import React from 'react';

const Popup = ({ onClose }) => {
  return (
    <div className="popup">
        <div className='title'>
            <h3>Заполните поля и мы с вами свяжемся</h3>
            <span onClick={onClose} className="close-btn">
                &times;
            </span>
        </div>
        <form action='form' className='form'>
            <div className='form_text'>
                <div className='form_block'>
                    <p>Имя</p>
                    <input type="text" placeholder='Ваше имя'/>
                </div>
                <div className='form_block'>
                    <p>Телефон</p>
                    <input type="telefon" placeholder='Ваш телефон'/>
                </div>
                <div className='form_block'>
                    <p>Дополнительная информация</p>
                    <input type="text" placeholder='Введите текст сюда'/>
                </div>
            </div>
            <div className='radioButton'>
                <p>Выберите :</p>
                <fieldset className='radio_block'>
                    <div>
                        <input id="brickwall" type="radio" name='drone' value="brickwall" />
                        <label htmlFor="brickwall">Обустройство скважин</label>
                    </div>
                    <div>
                        <input id="drill" type="radio" name='drone' value="drill" />
                        <label htmlFor="drill">Бурение скважины</label>
                    </div>
                    <div>
                        <input id="cons" type="radio" name='drone' value="cons" />
                        <label htmlFor="cons">Тампонаж и консервация</label>
                    </div>
                    <div>
                        <input id="heater" type="radio" name='drone' value="heater" />
                        <label htmlFor="heater">Монтаж отопления</label>
                    </div>
                </fieldset>
            </div>
            <div className='conf'>
                <input type="checkbox"/>
                <p>Отправляя свои данные вы соглашаетесь с&nbsp;
                    <a href="#!">политикой конфиденциальности</a>
                </p>
            </div>
            <button>Отправить</button>
        </form>
    </div>
  );
};

export default Popup;