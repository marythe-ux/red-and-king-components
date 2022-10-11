import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconList from './IconList';

export default {
  title: 'Components/Icons',
  component: IconList,
} as ComponentMeta<typeof IconList>;

const Template: ComponentStory<typeof IconList> = args => <IconList />;

export const Icons = Template.bind({});
