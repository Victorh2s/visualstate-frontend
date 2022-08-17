import { GridImage } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<GridImage/>', () => {
  it('should render GridImage with background', () => {
    const { container } = renderTheme(<GridImage background={undefined} />);
    expect(container).toMatchSnapshot();
  });
});
