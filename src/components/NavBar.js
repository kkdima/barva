import Link from 'next/link';
import styled from 'styled-components';

const NavBar = () => (
  <MenuWrapper className="menu">
    <div className="movingElemnts">
      <Background id="background"></Background>
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
  </MenuWrapper>
);

export default NavBar;


const StyledLink = styled(Link)`
  color: red;
  background: blue;
`

const Background = styled.div`
  position: absolute;
  top: 0;
  z-index: -3;
  background-color: #222222;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  opacity: 0.2;
  opacity: 1;

  .menu > .toggler:checked ~ li {
    /* opacity: 1; */
    /* transition: opacity 1s ease 0.5s; */
    color: red;
    /* animation: bganimation 1s cubic-bezier(.215,.61,.355,1);
    animation-fill-mode:forwards;
    @keyframes bganimation {
      from {
        transform: translateY(-900px);
      }
      to {
      }
    } */
  }
`

const UL = styled.ul`
  font-size: 32px;
  font-weight: bold;
  max-width: 200px;
  margin-right: 0px;

  @keyframes menuAnimation {
    0% { 
      transform: translateY(50px)
    }
    100% {
      opacity: 1;
      color: pink;
    }
  }

  li:nth-of-type(1) {
    animation: menuAnimation 0.8s 0.5s cubic-bezier(.35,.25,0,1.28);
    animation-fill-mode:forwards;
  }
  li:nth-of-type(2) {
    animation: menuAnimation 0.8s 0.6s cubic-bezier(.35,.25,0,1.22);
    animation-fill-mode:forwards;
  }
  li:nth-of-type(3) {
    animation: menuAnimation 0.8s 0.7s cubic-bezier(.35,.25,0,1.15);
    animation-fill-mode:forwards;
  }
  li:nth-of-type(4) {
    animation: menuAnimation 0.8s 0.8s cubic-bezier(.35,.25,0,1.10);
    animation-fill-mode:forwards;
  }
`

const Li = styled.li`
  /* opacity: 0; */
  list-style: none;
  color: pink;
  text-align: left;
  line-height: 45px;

  /* :hover {
    animation: activeAnim 1s cubic-bezier(.35,.25,0,1.28);
    animation-fill-mode:forwards;
    @keyframes activeAnim {
      from {
        
      } 
      to {
        scale: 0.9;
        color: red;
      }
    }
  } */
`;

const A = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

const MenuWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  /* border: solid red; */
  width: 100vw;
  box-sizing: border-box;
  padding: 0;

  .movingElemts {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    margin: 0;
    padding: 0;
  }
`