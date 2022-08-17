import { Meta, Story } from '@storybook/react/types-6-0';
import { NavLinks } from '.';

export default {
  title: 'NavLinks',
  component: NavLinks,
} as Meta;

export const Template: Story = (args) => {
  return (
    <div>
      <NavLinks {...args} />
    </div>
  );
};
