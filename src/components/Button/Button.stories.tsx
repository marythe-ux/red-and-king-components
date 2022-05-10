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
      options: ['large', 'default', 'small', 'xSmall'],
      control: 'select',
    },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'primary',
  label: 'Button 1',
};

export const Large = Template.bind({});
Large.args = {
  color: 'primary',
  size: 'large',
  label: 'Button 3',
};

export const Small = Template.bind({});
Small.args = {
  color: 'primary',
  size: 'small',
  label: 'Button 4',
};

export const XSmall = Template.bind({});
XSmall.args = {
  color: 'primary',
  size: 'xSmall',
  label: 'Button 5',
};
