import NavBar from './NavBar';
import MenuButton from './MenuButton';
import Logo from './Logo';
import GlobalStyle from '../theme/GlobalStyle';
import styled from 'styled-components';


const Layout = props => (
  <Wrapper>
    <GlobalStyle />
    <Logo />
    <MenuButton/>
    <NavBar />
    {props.children}
  </Wrapper>
);

export default Layout;

const Wrapper = styled.div`

`

