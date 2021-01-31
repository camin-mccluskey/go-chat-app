import React from 'react';

import { Message } from './Message';

export default {
  title: 'Components/Message',
  component: Message
};

const Template = (args) => <Message {...args} />;

export const StrangerMsg = Template.bind({});
StrangerMsg.args = {
  content: 'Hey there',
  fromUser: false
};

export const UserMsg = Template.bind({});
UserMsg.args = {
  content: 'This is sent by me',
  fromUser: true
};
