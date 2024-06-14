import React from 'react';
import CustomSlider from './CustomSlider';

const App = () => {
  const handleSliderChange = (value) => {
    console.log('Slider value changed:', value);
  };

  return (
    <div>
      <h1>Custom Slider Example</h1>
      <CustomSlider
        type="Continuous"
        subtype="Single"
        handleSize="Size_24"
        onChange={handleSliderChange}
      />
      <CustomSlider
        type="Discrete"
        subtype="Range"
        steps={10}
        handleSize="Size_32"
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default App;
