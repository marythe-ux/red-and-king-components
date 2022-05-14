import { ComponentStory, ComponentMeta } from '@storybook/react';

import ColorsList from './ColorsList';

export default {
  title: 'Design tokens/Colors',
  component: ColorsList,
} as ComponentMeta<typeof ColorsList>;

const Template: ComponentStory<typeof ColorsList> = args => <ColorsList />;

export const Colors = Template.bind({});
