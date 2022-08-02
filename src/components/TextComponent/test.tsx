import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';

describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent text='Text'/>);
    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<TextComponent text='Text'/>);
    expect(container.firstChild).toMatchSnapshot();
  });
});