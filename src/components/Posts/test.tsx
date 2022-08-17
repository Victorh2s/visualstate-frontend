import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { Posts, PostsProps } from '.';

describe('<Posts />', () => {
  it('should render', () => {
    renderTheme(<Posts />);

    expect(screen.getByRole('img')).toBeInTheDocument();
  });

  it('should match to snapshot', () => {
    const { container } = renderTheme(<Posts />);

    expect(container).toMatchSnapshot();
  });
});
