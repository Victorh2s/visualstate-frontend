import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { FormCadastro } from '.';

describe('<FormCadastro />', () => {
  it('should render', () => {
    renderTheme(<FormCadastro />);

    expect(
      screen.getByRole('heading', { name: 'Cadastro' }),
    ).toBeInTheDocument();

    expect(screen.getByRole('form')).toBeInTheDocument();
    expect(screen.getByLabelText('Username')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('usersvg')).toBeInTheDocument();
    expect(screen.getByLabelText('emailsvg')).toBeInTheDocument();
    expect(screen.getByLabelText('passwordsvg')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Enviar' })).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<FormCadastro />);

    expect(container).toMatchSnapshot();
  });
});
