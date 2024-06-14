import React, { useState } from 'react';
import './CustomSlider.css';

const CustomSlider = ({ type, subtype, steps, handleSize, onChange }) => {
  const [value, setValue] = useState(subtype === 'Range' ? [20, 80] : 50);

  const handleChange = (event) => {
    let newValue;
    if (subtype === 'Range') {
      newValue = [...value];
      if (event.target.name === 'min') {
        newValue[0] = Math.min(event.target.value, value[1] - 1);
      } else {
        newValue[1] = Math.max(event.target.value, value[0] + 1);
      }
    } else {
      newValue = event.target.value;
    }
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="slider-container">
      {subtype === 'Single' ? (
        <input
          type="range"
          min="0"
          max={type === 'Continuous' ? 100 : steps}
          step={type === 'Continuous' ? 0.1 : 1}
          value={value}
          onChange={handleChange}
          className={`slider slider-${handleSize.toLowerCase()}`}
        />
      ) : (
        <div className="range-slider">
          <input
            type="range"
            name="min"
            min="0"
            max={type === 'Continuous' ? 100 : steps}
            step={type === 'Continuous' ? 0.1 : 1}
            value={value[0]}
            onChange={handleChange}
            className={`slider slider-${handleSize.toLowerCase()}`}
          />
          <input
            type="range"
            name="max"
            min="0"
            max={type === 'Continuous' ? 100 : steps}
            step={type === 'Continuous' ? 0.1 : 1}
            value={value[1]}
            onChange={handleChange}
            className={`slider slider-${handleSize.toLowerCase()}`}
          />
        </div>
      )}
      <div className="slider-values">
        {subtype === 'Range' ? `${value[0]} - ${value[1]}` : value}
      </div>
    </div>
  );
};

export default CustomSlider;
