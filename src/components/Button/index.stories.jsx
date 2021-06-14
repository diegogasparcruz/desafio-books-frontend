import { Button } from '.';
import { Icon } from 'components/Icon';

export default {
  title: 'UI/Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Entrar',
};

export const WithChildren = Template.bind({});
WithChildren.args = {
  outline: true,
  children: <Icon name="logout" />,
};
