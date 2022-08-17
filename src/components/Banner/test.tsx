import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Banner, BannerProps } from '.';

const props: BannerProps = {
  src: 'https://source.unsplash.com/random/1000x1000?r=1',
};

describe('<Banner />', () => {
  it('should render', () => {
    renderTheme(<Banner {...props} />);

    expect(screen.getByLabelText('Wrapper')).toBeInTheDocument();
    expect(screen.getByLabelText('Gladient')).toBeInTheDocument();
  });

  it('should match to Snapshot', () => {
    const { container } = renderTheme(<Banner {...props} />);

    expect(container).toMatchSnapshot();
  });
});
