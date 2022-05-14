import { ComponentStory, ComponentMeta } from '@storybook/react';
import SpacesList from './SpacesList';

export default {
  title: 'Design tokens/Spacing',
  component: SpacesList,
} as ComponentMeta<typeof SpacesList>;

const Template: ComponentStory<typeof SpacesList> = args => <SpacesList />;

export const Spacing = Template.bind({});
