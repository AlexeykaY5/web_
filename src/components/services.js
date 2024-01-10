import '../styles/services.css'
import React, { Component } from 'react';
import drilling from '../img/drilling-rig.png';
import brickwall from '../img/brickwall.png';
import cons from '../img/cons.svg';
import heater from '../img/heater.png';

export default class Services extends Component {
  render() {
    return (
      <section className='services'>
        <div className='services_title'>
          <h3>Услуги</h3>
          <div></div>
        </div>

        <div className='services_blocks'>
          <div className='block'>
            <img src={drilling} alt="drilling"/>
            <h4>БУРЕНИЕ СКВАЖИН</h4>
            <p>Бурение скважин на воду проффесиональным оборудованием. Мы работаем с любыми грунтами и гарантируем быструю и качественную работу.</p>
          </div>
          <div className='block'>
            <img src={brickwall} alt="brickwall"/>
            <h4>ОБУСТРОЙСТВО СКВАЖИН</h4>
            <p>Комплекс работ, которые позволяют обустроить скважину для бесперебойной работы, для проведения в дом и ее комфортного использования.</p>
          </div>
          <div className='block'>
            <img src={cons} alt="cons"/>
            <h4>ТАМПОНАЖ И КОНСЕРВАЦИЯ</h4>
            <p>Процедуры, выполняемые для временной или постоянной остановки работы скважины.</p>
          </div>
          <div className='block'>
            <img src={heater} alt="heater"/>
            <h4>МОНТАЖ ОТОПЛЕНИЯ</h4>
            <p>Это процесс установки и подключения топительного оборудования в доме или другом здании для обеспечения тепла и комфорта в холодное время года.</p>
          </div>
        </div>
      </section>
    )
  }
}
