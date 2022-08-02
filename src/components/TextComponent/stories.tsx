import { Meta, Story } from '@storybook/react/types-6-0';
import { TextComponent, TextComponentProps } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    text: `
    Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Ullam placeat unde harum. Facilis, quasi delectus
    obcaecati perferendis nobis alias ad aspernatur quod neque,
    corporis, aperiam numquam. Sint consequatur omnis voluptate.`,
  },
} as Meta<TextComponentProps>;

export const Template: Story<TextComponentProps> = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
