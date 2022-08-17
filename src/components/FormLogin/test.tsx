import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { FormLogin } from '.';

describe('<FormLogin />', () => {
  it('should render', () => {
    renderTheme(<FormLogin />);

    expect(screen.getByRole('heading', { name: 'Entrar' })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'Criar Conta' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Enviar' })).toBeInTheDocument();

    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<FormLogin />);

    expect(container).toMatchSnapshot();
  });
});
