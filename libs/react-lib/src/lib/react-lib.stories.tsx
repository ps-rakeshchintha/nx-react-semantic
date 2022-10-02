import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactLib } from './react-lib';

const Story: ComponentMeta<typeof ReactLib> = {
  component: ReactLib,
  title: 'ReactLib',
};
export default Story;

const Template: ComponentStory<typeof ReactLib> = (args) => (
  <ReactLib {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
