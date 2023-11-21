import React, { Component } from 'react';
import Header from './header';

export default class MainPage extends Component {
  render() {
    return (
        <div className='main_page'>
            <Header/>
            
            <p>Салон красоты «Delote-Beauty» на Крестовском</p>

            <div className='mouse_down'>
                scroll down
            </div>

        </div>
    );
  };
};
