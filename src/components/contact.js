import '../styles/conatct.css';
import React, { Component } from 'react';
import image from '../img/contact.png';
import Popup from './popup';

export default class Contact extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isPopupOpen: false,
    };
  }

  togglePopup = () => {
    this.setState((prevState) => ({
      isPopupOpen: !prevState.isPopupOpen,
    }));
  };

  render() {
    return (
      <section className='contact'>
        <div className='contact_title'>
          <h3>Контакты</h3>
          <div></div>
        </div>
        <div className='wrap'>
          <div className='contact_info'>
            <h4>
              Остались вопросы ?
            </h4>
            <p>
              С удовольствем ответим на все ваши вопросы по 
              телефону  
              <a href="tel:+375(29)555-58-16"> +375(29)555-58-16</a>
              . Или оставьте нам сообщение 
              и мы вам перезвоним. Также мы есть в Viber по данному номеру.
            </p>
            <div className='contact_button' onClick={this.togglePopup}>Заказать звонок</div>
          </div>
          <div className='contact_block'>
            <img src={image} alt="people-with-drillmachine"/>
          </div>
        </div>
        {this.state.isPopupOpen && <Popup onClose={this.togglePopup} />}
      </section>
    )
  }
}
