import { Meta, Story } from '@storybook/react/types-6-0';
import { FormCadastro } from '.';

export default {
  title: 'FormCadastro',
  component: FormCadastro,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <FormCadastro {...args} />
    </div>
  );
};
