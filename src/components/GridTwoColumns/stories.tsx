import { Meta, Story } from '@storybook/react/types-6-0';
import { Menu } from 'components/Menu';
import { GridTwoColumns } from '.';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
} as Meta;

export const Template: Story = () => {
  return (
    <div>
      <GridTwoColumns />
    </div>
  );
};
