import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavLinksID } from '.';
import { theme } from '../../styles/theme';

describe('<NavLinksID />', () => {
  it('should render links', () => {
    renderTheme(<NavLinksID />);
    expect(screen.getByLabelText('Main menu')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should not render links', () => {
    renderTheme(<NavLinksID />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinksID />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
