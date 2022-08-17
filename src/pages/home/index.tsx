import { Footer } from 'components/Footer';
import { GridImage } from 'components/GridImage';
import { GridTwoColumns } from 'components/GridTwoColumns';
import { Menu } from 'components/Menu';

export default function Home() {
  return (
    <>
      <Menu menuid={false} />
      <GridTwoColumns />
      <GridImage background={true} />
      <Footer />
    </>
  );
}
