// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Button from './components/Button';
import Header from './components/Header';
import ButtonDevice from './components/ButtonDevice';


const App = () => {
  const handleClick = () => {
    // alert('Button clicked!');
  };

  const pages = [
    { name: 'Главная', link: '/' },
    { name: 'О нас', link: '/about' },
    { name: 'Контакты', link: '/contacts' },
    { name: 'Сервисы', link: '/services' },
  ]


  return (
    <div className='body'>
      <Button title={"Click"} onClick={handleClick}></Button>
      <Header title={"Rooms"} pages={pages}/>
      <div className='grid'>
      <ButtonDevice title={"Light"} onClick={handleClick}></ButtonDevice>
      <ButtonDevice title={"Light"} onClick={handleClick}></ButtonDevice>
      </div>
    </div>
  );
};

export default App;



// import React, { useState } from "react";
// import "./App.css";

// const App = () => {
//   const [activeTab, setActiveTab] = useState("Кухня");

//   return (
//     <div className="app-container">
//       {/* Хедер */}
//       <header className="header">
//         <button className="menu-btn">⚠️</button>
//         <h1>Комнаты</h1>
//         <button className="menu-btn">≡</button>
//       </header>

//       {/* Кнопки управления */}
//       <div className="grid">
//         <div className="card">ТОРШЕР</div>
//         <div className="card">ЛАМПА</div>
//         <div className="card-gradient">ЛЮСТРА</div>
//       </div>

//       {/* Виджет увлажнителя */}
//       <div className="widget">
//         <div>
//           <p>УВЛАЖНИТЕЛЬ ВОЗДУХА</p>
//           <p className="value">800 RPM</p>
//         </div>
//         <div>
//           <p className="value">27.5°C</p>
//         </div>
//         <div>
//           <p>💧 56%</p>
//           <p>🌀 80%</p>
//         </div>
//       </div>

//       {/* Навигационный слайдер */}
//       <div className="nav-slider">
//         {["Гостиная", "Кухня", "Спальня"].map((tab) => (
//           <div
//             key={tab}
//             className={`nav-item ${activeTab === tab ? "active" : ""}`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default App;
