import { Container, FiltrBox } from './CatalogPage.styled';
import { AdvertList } from '../../components/AdvertList/AdvertList';
import { LocationFiltr } from '../../components/Location/Location';
import { Filters } from '../../components/Filters/Filters';
import { Section } from '../../components/common/Section/Section';
const CatalogPage = () => {
  return (
    <Section>
      <Container>
        <FiltrBox>
          <LocationFiltr />
          <Filters />
        </FiltrBox>
        <AdvertList />
      </Container>
    </Section>
  );
};

export default CatalogPage;
