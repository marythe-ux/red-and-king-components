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

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  label: 'Label',
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  color: 'primary',
  size: 'small',
  label: 'Label',
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  color: 'primary',
  size: 'large',
  label: 'Label',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: 'Label',
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  color: 'secondary',
  size: 'small',
  label: 'Label',
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  color: 'secondary',
  size: 'large',
  label: 'Label',
};
