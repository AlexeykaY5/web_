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
                <img src={inst} alt="ok" style={{ width: "100px" }}/>
            </a>
            <a href="#number3">
                <img src={tiktok} alt="ok" style={{ width: "100px" }}/>
            </a>
            <a href="#number3">
                <img src={viber} alt="ok" style={{ width: "100px" }}/>
            </a>
        </div>
      </div>
    )
  }
}
