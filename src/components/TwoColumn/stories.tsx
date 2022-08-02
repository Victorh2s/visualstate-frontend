import { Meta, Story } from '@storybook/react/types-6-0';
import { SectionBackgroundSvg } from '../SectionBackgroundSvg';
import { TwoColumn, TwoColumnProps } from '.';

export default {
  title: 'TwoColumn',
  component: TwoColumn,
  args: { children: '   A melhor plataforma de fotos do mundo' },
} as Meta<TwoColumnProps>;

export const Template: Story<TwoColumnProps> = (args) => {
  return (
    <div>
      <SectionBackgroundSvg>
        <TwoColumn {...args} />
      </SectionBackgroundSvg>
    </div>
  );
};
