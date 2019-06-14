import Link from 'next/link';
import styled from 'styled-components';




const Header = () => (
  <div>
    <UL>
      <StyledLink href="/">
        <Li><A>Home</A></Li>
      </StyledLink>
      <StyledLink href="/projects">
        <Li><A>Projects</A></Li>
      </StyledLink>
      <StyledLink href="/about">
        <Li><A>About</A></Li>
      </StyledLink>
      <StyledLink href="/contact">
        <Li><A>Contact</A></Li>
      </StyledLink>
    </UL>
  </div>
);

export default Header;


const StyledLink = styled(Link)`
  color: red;
  background: blue;
  margin-right: 10px;
  `
const UL = styled.ul`

`
const Li = styled.li`
  list-style: none;
  font-size: 16px;
  color: #607D8B;
  text-align: left;
  line-height: 40px;
  `
const A = styled.a`
  cursor: pointer;
`



