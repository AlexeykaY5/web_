import '../styles/footer.css';
import React, { Component } from 'react';
import inst from '../img/inst.svg';
import tiktok from '../img/tiktik.png';
import viber from '../img/viber.svg';


export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
        <p>© 2023 Бурение скважин</p>
        <div>
            <a href="#number3">
                <img src={inst} alt="ok"/>
            </a>
            <a href="#number3">
                <img src={tiktok} alt="ok"/>
            </a>
            <a href="#number3">
                <img src={viber} alt="ok"/>
            </a>
        </div>
      </div>
    )
  }
}
