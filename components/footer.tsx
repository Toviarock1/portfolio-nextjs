import Link from 'next/link';
import { FaFacebookF } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { IoLogoTwitter } from 'react-icons/io';

const Footer = () => {
  return (
    <footer>
      <Link href="#" className="footer__logo">
        Simon
      </Link>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        {/* <li>
          <a href="#testmonials">Testimonials</a>
        </li> */}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/toviarock1">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/Toviarock1">
          <IoLogoTwitter />
        </a>
        <a href="https://web.facebook.com/simon.adama.526">
          <FaFacebookF />{' '}
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Simon Adama. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
