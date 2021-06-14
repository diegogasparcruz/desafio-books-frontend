import React from 'react';

import { Button } from '.';

export default {
  title: 'UI/Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Entrar',
};
