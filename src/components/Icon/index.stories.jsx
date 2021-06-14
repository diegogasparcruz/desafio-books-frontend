import { Icon } from '.';

export default {
  title: 'UI/Icon',
  component: Icon,
  argTypes: {
    name: {
      description: 'icon name',
      control: {
        type: 'select',
        options: ['close', 'arrow-left', 'arrow-right', 'logout', 'quote'],
      },
    },
  },
};

const Template = args => {
  return <Icon {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  name: 'close',
};
