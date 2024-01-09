import '../styles/main.css';
import React, { Component } from 'react';
import mainImage from '../img/main-image.png';

export default class Main extends Component {
  render() {
    return (
        <section className='main'>
          <div className='block'>
            <h2>
              Бурение скважин на воду
              <br/>
              Монтаж отопления
            </h2>
            <p>
              Чистая и вкусная вода у вас дома – это наша забота
              <br/>
              Мы работаем над тем, чтобы в вашем доме был постоянный 
              доступ к воде, в неограниченных количествах в любое время.
            </p>
            <div>
              Заказать звонок
            </div>
          </div>
          <div className='image'>
            <img src={mainImage} alt="logo"/>
          </div>
        </section>
    );
  };
};

