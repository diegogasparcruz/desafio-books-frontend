import React from 'react';

import { Tooltip } from '.';

export default {
  title: 'UI/Tooltip',
  component: Tooltip,
};

const Template = args => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: 'Usuário ou senha inválida.',
};
