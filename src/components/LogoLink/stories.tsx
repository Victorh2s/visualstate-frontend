import { Meta, Story } from '@storybook/react/types-6-0';
import { LogoLink, LogoLinkProps } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: { srcImg: '', text: 'VisualState' },
} as Meta<LogoLinkProps>;

export const Template: Story<LogoLinkProps> = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};
