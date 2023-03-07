import Image from 'next/image';
import CTA from './CTA';
import HeaderSocials from './headerSocials';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello i&apos;m</h5>
        <h1>Simon Adama</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <Image src={'/images/me.png'} alt="" width={400} height={400} />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
