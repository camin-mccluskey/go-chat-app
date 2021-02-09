import React from 'react';
import { Grid } from '@material-ui/core';
import { Room } from './Room';

export default {
  title: 'Components/Room',
  component: Room,
};

const Template = (args) => {
  return (
    <Grid xs={3}>
      <Room {...args} />
    </Grid>
  );
}

export const Primary = Template.bind({});
Primary.args = {
  title: "9am in London",
  description: "Just chatting about things"
};

