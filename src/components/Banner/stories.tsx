import { Meta, Story } from '@storybook/react/types-6-0';
import { Menu } from 'components/Menu';
import { Banner, BannerProps } from '.';

export default {
  title: 'Banner',
  component: Banner,
  args: { src: 'https://source.unsplash.com/random/3200x500?r=1' },
} as Meta<BannerProps>;

export const Template: Story<BannerProps> = (args) => {
  return (
    <div>
      <Menu
        menuid={true}
        srcImg="https://source.unsplash.com/random/1000x1000?r=1"
        username="usuario"
      />
      <Banner {...args} />
    </div>
  );
};
