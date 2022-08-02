import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { NavLinks } from '.';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.getAllByRole('link')).toHaveLength(2);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.getByText(/Criar Conta/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column wrap',
      {
        media: theme.media.lteOrEqMedium,
      },
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
