import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { InputError, InputErrorProps } from '.';

const props: InputErrorProps = {
  children: 'error aqui',
};

describe('<InputError />', () => {
  it('should render', () => {
    renderTheme(<InputError {...props} />);

    expect(screen.getByText(/error aqui/i)).toBeInTheDocument();
  });

  it('should match to snapchot', () => {
    const { container } = renderTheme(<InputError {...props} />);

    expect(container).toMatchSnapshot();
  });
});
