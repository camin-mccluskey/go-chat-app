import React from 'react';
import { Room } from './Room';

export default {
  title: 'Components/Room',
  component: Room,
};

const Template = (args) => <Room {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: "9am in London",
  description: "Just chatting about things"
};

