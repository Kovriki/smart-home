import React from 'react';
import '../styles/SensorWidget.css'
import SeparatorVertical from './SeparatorVertical';

function SensorWidget({ sensorName, cO2Level, tempreture, airHumidity, battery }) {

    return (
        <section className='sensorWidget'>
            <header>
                <h4 className='widgetName'>{sensorName}</h4>
            </header>
            <div className='dataBox'>
                <div className='dataValue large'>
                    <p>{cO2Level}</p>
                    <p>CO2</p>
                </div>
                <SeparatorVertical></SeparatorVertical>

                <div className='dataValue large'>
                    <p>{tempreture}</p>
                    <p>°C</p>
                </div>
                <SeparatorVertical></SeparatorVertical>

                <div className='dataBoxExtra'>
                    <div className='dataValue small'>
                        <p>{airHumidity}</p>
                        <p>%</p>
                    </div>
                    <div className='dataValue small'>
                        <p>{battery}</p>
                        <p>%</p>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default SensorWidget;
