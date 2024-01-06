import React, { Component } from 'react';
import ok from '../img/ok.svg'

export default class AboutUs extends Component {
  render() {
    return (
      <section className='aboutUs'>
        <div className='aboutUs_title'>
          <h3>О нас</h3>
          <div></div>
        </div>

        <div className='aboutUs_body'>
            <div className='block'>
                <img src={ok} alt="ok" style={{ width: "100px" }}/>
                Скважина с первой попытки в любом виде грунта, бурим профессиональными буровыми машинами
            </div>
            <div className='block'>
                <img src={ok} alt="ok" style={{ width: "100px" }}/>
                Помогаем сэкономить на глубине скважины, ведем контроль бурения и останавливаемся, если находим воду раньше оговоренной глубины
            </div>
            <div className='block'>
                <img src={ok} alt="ok" style={{ width: "100px" }}/>
                Самая чистая вода, бурим в любом виде грунта на глубину до 100 метров
            </div>
            <div className='block'>
                <img src={ok} alt="ok" style={{ width: "100px" }}/>
                Никаких проблем с водой - доверьтесь нашей команде профессионалов
            </div>
            <div className='block'>
                <img src={ok} alt="ok" style={{ width: "100px" }}/>
                Мы используем только современные материалы из качественного пищевого пластика, которые не выделяют никаких вредных веществ
            </div>
            <div className='block'>
                <img src={ok} alt="ok" style={{ width: "100px" }}/>
                Предоставляем гарантию сроком в 5 лет на скважину и год на обустройство скважины
            </div>
        </div>
        <div>
          <div className='abutUs_info'>
            <p className='title'>2014</p>            
            <p className='subTitle'>Год основания</p>
          </div>
          <div className='stick'></div>
          <div className='abutUs_info'>
            <p className='title'>1112</p>            
            <p className='subTitle'>Пробуренных скважин</p>
          </div>
          <div className='stick'></div>
          <div className='abutUs_info'>
            <p className='title'>112</p>            
            <p className='subTitle'>Ликвидированных скважин</p>
          </div>
        </div>
      </section>
    )
  }
}
