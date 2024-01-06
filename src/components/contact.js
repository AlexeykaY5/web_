import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <section className='contact'>
        <div className='contact_title'>
          <h3>Контакты</h3>
          <div></div>
        </div>
        <div className='contact_info'>
          <h4>
            Остались вопросы ?
          </h4>
          <p>
            С удовольствем ответим на все ваши вопросы по 
            телефону +375(29)555-58-16 . Или оставьте нам сообщение 
            и мы вам перезвоним. Также мы есть в Viber по данному номеру.
          </p>
          <div className='contact_button'>Заказать звонок</div>
        </div>
        <div>
            
        </div>
      </section>
    )
  }
}
