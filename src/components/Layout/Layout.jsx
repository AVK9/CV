import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Container>
          <Outlet />
        </Container>
      </Suspense>
    </>
  );
};

export default Layout;
