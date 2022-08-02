import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SectionBackgroundSvg, SectionBackgroundSvgProps } from '.';

const props: SectionBackgroundSvgProps = {
  children: 'Texto',
};
describe('<SectionBackgroundSvg />', () => {
  it('should render SectionBackgroundSvg with background false', () => {
    const { container } = renderTheme(<SectionBackgroundSvg {...props} />);

    expect(screen.getByText('Texto')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it('should render SectionBackgroundSvg with background true', () => {
    const { container } = renderTheme(<SectionBackgroundSvg {...props} />);

    expect(screen.getByText('Texto')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
