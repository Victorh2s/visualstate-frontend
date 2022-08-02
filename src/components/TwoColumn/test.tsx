import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TwoColumn, TwoColumnProps } from '.';

const props: TwoColumnProps = {
  text: 'Texto',
  srcImg: 'https://source.unsplash.com/random/1000x1000?r=1',
};

describe('<TwoColumn />', () => {
  it('should render TwoColumn', () => {
    renderTheme(<TwoColumn {...props} />);

    expect(screen.getByRole('heading', { name: 'Texto' })).toBeInTheDocument();
    expect(screen.getByLabelText('Video')).toBeInTheDocument();
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<TwoColumn {...props} />);

    expect(container).toMatchSnapshot();
  });
});
