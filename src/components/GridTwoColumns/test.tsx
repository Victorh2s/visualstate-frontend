import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumns } from '.';

describe('<GridTwoColumns />', () => {
  it('should render', () => {
    renderTheme(<GridTwoColumns />);

    expect(
      screen.getByRole('heading', { name: /A melhor/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Coloque suas recordações/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /Crie já sua conta/i }),
    ).toBeInTheDocument();

    expect(screen.getByLabelText('video1')).toBeInTheDocument();
    expect(screen.getByLabelText('video2')).toBeInTheDocument();
    expect(screen.getByLabelText('video3')).toBeInTheDocument();
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<GridTwoColumns />);

    expect(container).toMatchSnapshot();
  });
});
