import React from 'react';
import { action } from '@storybook/addon-actions';
import CustomSlider from '../CustomSlider';

export default {
  title: 'CustomSlider',
  component: CustomSlider,
  argTypes: {
    type: {
      control: { type: 'radio' },
      options: ['Continuous', 'Discrete'],
    },
    subtype: {
      control: { type: 'radio' },
      options: ['Single', 'Range'],
    },
    steps: {
      control: { type: 'number', min: 1, max: 10 },
    },
    handleSize: {
      control: { type: 'radio' },
      options: ['Size_24', 'Size_32'],
    },
    onChange: { action: 'slider-changed' },
  },
};

const Template = (args) => <CustomSlider {...args} />;

export const ContinuousSingle = Template.bind({});
ContinuousSingle.args = {
  type: 'Continuous',
  subtype: 'Single',
  handleSize: 'Size_24',
  onChange: action('slider-changed'),
};

export const DiscreteRange = Template.bind({});
DiscreteRange.args = {
  type: 'Discrete',
  subtype: 'Range',
  steps: 10,
  handleSize: 'Size_32',
  onChange: action('slider-changed'),
};
