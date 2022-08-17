import { Meta, Story } from '@storybook/react/types-6-0';
import { InputError, InputErrorProps } from '.';

export default {
  title: 'InputError',
  component: InputError,
} as Meta<InputErrorProps>;

export const Template: Story<InputErrorProps> = (args) => {
  return (
    <div>
      <InputError {...args} />
    </div>
  );
};
