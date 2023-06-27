import React, { useState } from 'react';
import ClockForm from './ClockForm';
import Clock from './Clock';

/**
 * Компонент Просмотр Часов.
 *
 * @component
 * @returns {JSX.Element} Компонент Просмотр Часов.
 */
function ClockView() {
  const [clocks, setClocks] = useState([]);

  /**
   * Функция добавления часов.
   * @param {string} name - Название часов.
   * @param {string} timezone - Временная зона часов.
   */
  const addClock = (name, timezone) => {
    setClocks([...clocks, { name, timezone }]);
  };

  /**
   * Функция удаления часов.
   * @param {number} index - Индекс часов в списке.
   */
  const deleteClock = (index) => {
    const updatedClocks = [...clocks];
    updatedClocks.splice(index, 1);
    setClocks(updatedClocks);
  };

  return (
    <div>
      <ClockForm addClock={addClock} />
      {clocks.map((clock, index) => (
        <Clock key={index} name={clock.name} timezone={clock.timezone} onDelete={() => deleteClock(index)} />
      ))}
    </div>
  );
};

export default ClockView;
