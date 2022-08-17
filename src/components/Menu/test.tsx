import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Menu } from '.';
import { theme } from '../../styles/theme';

describe('<Menu />', () => {
  it('should render the button', () => {
    renderTheme(<Menu menuid={false} />);

    expect(screen.getByLabelText('Open/Close menu')).toBeInTheDocument();
  });

  it('should render text', () => {
    renderTheme(<Menu menuid={false} />);

    expect(screen.getByText('VisualState')).toBeInTheDocument();
    expect(screen.getByText('Entrar')).toBeInTheDocument();
    expect(screen.getByText('Criar Conta')).toBeInTheDocument();
  });

  it('Testing functions of button', () => {
    renderTheme(<Menu menuid={false} />);

    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteOrEqMedium,
    });

    fireEvent.click(button);
    expect(menuContainer).toHaveStyleRule('left', '-32rem', {
      media: theme.media.lteOrEqMedium,
    });
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    fireEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('left', '-32rem', {
      media: theme.media.lteOrEqMedium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });
});

it('should match snapshot', () => {
  const { container } = renderTheme(<Menu menuid={false} />);

  expect(container).toMatchSnapshot();
});
