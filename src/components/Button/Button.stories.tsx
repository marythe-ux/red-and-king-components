import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: 'select',
    },
    size: {
      options: ['large', 'medium', 'small'],
      control: 'select',
    },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  color: 'primary',
  label: 'Button 1',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: 'Button 2',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button 3',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button 4',
};
