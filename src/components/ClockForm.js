import React, { useState } from 'react';

/**
 * Компонент Форма Часов.
 *
 * @component
 * @param {Object} props - Свойства компонента.
 * @param {Function} props.addClock - Функция добавления часов.
 * @returns {JSX.Element} Компонент Форма Часов.
 */
const ClockForm = ({ addClock }) => {
  const [name, setName] = useState('');
  const [timezone, setTimezone] = useState('');

  /**
   * Обработчик изменения значения поля "Название".
   * @param {Object} e - Объект события изменения.
   */
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  /**
   * Обработчик изменения значения поля "Временная зона".
   * @param {Object} e - Объект события изменения.
   */
  const handleTimezoneChange = (e) => {
    setTimezone(e.target.value);
  };

  /**
   * Обработчик события отправки формы.
   * @param {Object} e - Объект события отправки.
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    addClock(name, timezone);
    setName('');
    setTimezone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Название:</label>
        <input type="text" id="name" value={name} onChange={handleNameChange} />
      </div>
      <div>
        <label htmlFor="timezone">Временная зона:</label>
        <input type="text" id="timezone" value={timezone} onChange={handleTimezoneChange} />
      </div>
      <button type="submit">Добавить</button>
    </form>
  );
};

export default ClockForm;
