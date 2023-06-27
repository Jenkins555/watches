import React, { useState, useEffect } from 'react';
import moment from 'moment';
import '../css/Clock.css';

/**
 * Компонент Часы.
 *
 * @component
 * @param {Object} props - Свойства компонента.
 * @param {string} props.name - Название города.
 * @param {number} props.timezone - Часовой пояс (смещение относительно Гринвича в часах).
 * @param {Function} props.onDelete - Обработчик события удаления часов.
 * @returns {JSX.Element} Компонент Часы.
 */
const Clock = ({ name, timezone, onDelete }) => {
  const [time, setTime] = useState(moment().utcOffset(Number(timezone)).format('HH:mm:ss'));

  /**
   * Обновляет время каждую секунду.
   */
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(moment().utcOffset(Number(timezone)).format('HH:mm:ss'));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [timezone]);

  return (
    <div className="clock">
      <div className="clock-face">
        <div className="hour-hand" style={{ transform: `rotate(${moment().utcOffset(Number(timezone)).hours() * 30}deg)` }}></div>
        <div className="minute-hand" style={{ transform: `rotate(${moment().utcOffset(Number(timezone)).minutes() * 6}deg)` }}></div>
        <div className="second-hand" style={{ transform: `rotate(${moment().utcOffset(Number(timezone)).seconds() * 6}deg)` }}></div>
      </div>
      <div className="clock-info">
        <div className="clock-name">{name}</div>
        <div className="clock-time">{time}</div>
        <button onClick={onDelete}>Удалить</button>
      </div>
    </div>
  );
};

export default Clock;
