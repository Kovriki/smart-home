// import logo from './logo.svg';
import './App.css';
import React from 'react';  
import Button from './components/Button';
import Header from './components/Header';
import ButtonDevice from './components/ButtonDevice';
import SensorWidget from './components/SensorWidget';
import DeviceCard from './components/DeviceCard';



const App = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  const pages = [
    { name: 'Главная', link: '/' },
    { name: 'О нас', link: '/about' },
    { name: 'Контакты', link: '/contacts' },
    { name: 'Сервисы', link: '/services' },
  ]


  return (
    <div className='body'>
      <Header title={'Rooms'} pages={pages} />
      <div className='itemsList'>
      <SensorWidget sensorName={'Humidifier'} cO2Level={'800'} tempreture={27.5} airHumidity={56} battery={80}></SensorWidget>
        <div className='grid'>
        {/* <ButtonDevice title={"Light"} onClick={handleClick} />
        <ButtonDevice title={"Light"} onClick={handleClick} /> */}
      <DeviceCard deviceName={'Light'} />
      <DeviceCard deviceName={'LED Strip'} />

        </div>
      <DeviceCard deviceName={'Lamp'} />
        
      </div>


    </div>
  );
};

export default App;
