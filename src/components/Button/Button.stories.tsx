import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: 'select',
    },
    size: {
      options: ['large', 'default', 'small'],
      control: 'select',
    },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  label: 'Label',
};

export const Large = Template.bind({});
Large.args = {
  color: 'primary',
  size: 'large',
  label: 'Label',
};

export const Small = Template.bind({});
Small.args = {
  color: 'primary',
  size: 'small',
  label: 'Label',
};
