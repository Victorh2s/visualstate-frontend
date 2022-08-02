import { Meta, Story } from '@storybook/react/types-6-0';
import { Menu } from '.';

export default {
  title: 'Menu',
  component: Menu,
} as Meta;

export const Template: Story = () => {
  return (
    <div>
      <Menu />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur in
        quibusdam porro provident ab doloribus, atque quisquam et facilis.
        Veniam dolor exercitationem assumenda beatae eveniet, in nisi aliquam
        veritatis accusamus?
      </p>
    </div>
  );
};