import { ComponentStory, ComponentMeta } from '@storybook/react';

import Colors from './Colors';

export default {
  title: 'Theming/Colors',
  component: Colors,
} as ComponentMeta<typeof Colors>;

const Template: ComponentStory<typeof Colors> = args => <Colors />;

export const PrimaryTheme = Template.bind({});
