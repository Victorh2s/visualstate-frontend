import { Meta, Story } from '@storybook/react/types-6-0';
import { MenuLink, MenuLinkProps } from '.';

export default {
  title: 'MenuLink',
  component: MenuLink,
  args: { children: 'Menu Link', link: '#' },
} as Meta<MenuLinkProps>;

export const Template: Story<MenuLinkProps> = (args) => {
  return (
    <div>
      <MenuLink {...args} />
    </div>
  );
};
