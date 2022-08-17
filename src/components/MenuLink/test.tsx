import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { MenuLink } from '.';

describe('<MenuLink />', () => {
  it('should render a link', () => {
    renderTheme(<MenuLink url="/">Children</MenuLink>);
    expect(screen.getByRole('link', { name: 'Children' })).toBeInTheDocument();
  });

  it('should render open in a new tab', () => {
    const { container } = renderTheme(
      <MenuLink url="/" newTab={false}>
        Children
      </MenuLink>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
