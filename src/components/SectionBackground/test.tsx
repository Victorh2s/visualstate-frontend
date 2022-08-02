import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { SectionBackground, SectionBackgroundProps } from '.';

const props: SectionBackgroundProps = {
  children: 'Texto',
  background: false,
};
describe('<SectionBackground />', () => {
  it('should render SectionBackground with background false', () => {
   const { container } = renderTheme(<SectionBackground {...props}   background={false} />);
    
    expect(screen.getByText('Texto')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
  it('should render SectionBackground with background true', () => {
    const { container } = renderTheme(<SectionBackground {...props}   background={true} />);
     
     expect(screen.getByText('Texto')).toBeInTheDocument();
     expect(container).toMatchSnapshot();
   });
});