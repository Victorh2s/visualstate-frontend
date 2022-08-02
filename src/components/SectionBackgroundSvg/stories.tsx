import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionBackgroundSvg, SectionBackgroundSvgProps } from '.';

export default {
  title: 'SectionBackgroundSvg',
  component: SectionBackgroundSvg,
} as Meta<SectionBackgroundSvgProps>;

export const Template: Story<SectionBackgroundSvgProps> = (args) => {
  return (
    <div>
      <SectionBackgroundSvg {...args} />
    </div>
  );
};
