import { Meta, Story } from '@storybook/react/types-6-0';
import { FormLogin } from '.';

export default {
  title: 'FormLogin',
  component: FormLogin,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <FormLogin {...args} />
    </div>
  );
};
