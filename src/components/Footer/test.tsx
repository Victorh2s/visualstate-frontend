import { screen } from '@testing-library/react';
import { Footer } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<Footer/>', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer />);
    const footer = screen.getByText('Site fictício');
    expect(footer).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
