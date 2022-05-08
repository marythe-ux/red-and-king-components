import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Colors from './Colors';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Theming/Colors',
  component: Colors,
} as ComponentMeta<typeof Colors>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Colors> = args => <Colors />;

export const PrimaryTheme = Template.bind({});
