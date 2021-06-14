import React from 'react';

import { Input } from '.';
import { Button } from '../Button';

export default {
  title: 'UI/Input',
  component: Input,
  argTypes: {
    type: {
      control: { type: 'select', options: ['text', 'password'] },
    },
  },
};

const Template = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Email',
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  label: 'Senha',
  type: 'password',
  children: <Button label="Entrar" />,
};
