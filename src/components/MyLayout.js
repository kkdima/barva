import Header from './Header';
import GlobalStyle from '../theme/GlobalStyle';

const Layout = props => (
  <div>
    <GlobalStyle />
    <Header />
    {props.children}
  </div>
);

export default Layout;