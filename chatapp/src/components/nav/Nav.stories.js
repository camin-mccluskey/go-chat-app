import React from 'react';
import { Nav } from './Nav';

export default {
  title: 'Components/Nav',
  component: Nav,
};

const Template = (args) => <Nav {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  
};
