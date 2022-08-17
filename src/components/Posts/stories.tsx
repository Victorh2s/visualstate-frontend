import { Meta, Story } from '@storybook/react/types-6-0';
import { Posts, PostsProps } from '.';

export default {
  title: 'Posts',
  component: Posts,
  args: {
    srcImgPost: 'https://source.unsplash.com/random/1000x1000?r=1',
    Title: 'Primeira foto',
    Description: 'lorem as na asiuabsuas ausba8s abs8uy',
  },
} as Meta<PostsProps>;

export const Template: Story<PostsProps> = (args) => {
  return (
    <div>
      <Posts {...args} />
    </div>
  );
};
