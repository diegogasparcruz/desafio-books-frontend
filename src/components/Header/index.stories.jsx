import React from 'react';

import { Header } from '.';

export default {
  title: 'UI/Header',
  component: Header,
};

const Template = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  user: { name: 'Ioasys' },
};
