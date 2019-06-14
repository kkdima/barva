import Link from 'next/link';


const linkStyle = {
  marginRight: 15,
  // display: flex,
  // flex-direction: column,
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/projects">
      <a style={linkStyle}>Projects</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/contact">
      <a style={linkStyle}>Contact</a>
    </Link>
  </div>
);

export default Header;
