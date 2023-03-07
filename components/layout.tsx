import Footer from './footer';
import Header from './header';
import Nav from './nav';
import { LayoutProps } from './types';

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
