import { useState } from 'react';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');

  const activeNavHandler = (id: string) => {
    setActiveNav(`#${id}`);
  };
  return (
    <nav>
      <a
        href="#"
        className={activeNav === '#' ? 'active' : ''}
        onClick={() => activeNavHandler('')}
        title="Home"
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={activeNav === '#about' ? 'active' : ''}
        onClick={() => activeNavHandler('about')}
        title="About"
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={activeNav === '#experience' ? 'active' : ''}
        onClick={() => activeNavHandler('experience')}
        title="skills"
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        className={activeNav === '#service' ? 'active' : ''}
        onClick={() => activeNavHandler('service')}
        title="portfolio"
      >
        <RiServiceLine />
      </a>
      <a
        href="#contact"
        className={activeNav === '#contact' ? 'active' : ''}
        onClick={() => activeNavHandler('contact')}
        title="contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
