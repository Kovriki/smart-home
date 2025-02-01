// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './components/Button';
import Header from './components/Header';


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
      <Header title={"Rooms"} pages={pages} />

    </div>
  );
};

export default App;
