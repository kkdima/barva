import NavBar from './NavBar';
import MenuButton from './MenuButton';
import GlobalStyle from '../theme/GlobalStyle';
import styled from 'styled-components';


const Layout = props => (
  <Wrapper>
    <GlobalStyle />
    <MenuButton/>
    <NavBar />
    {props.children}
  </Wrapper>
);

export default Layout;

// global styles:
const Wrapper = styled.div`
`

