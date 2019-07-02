import SlideNav from "./SlideNav";
import GlobalStyle from "../theme/GlobalStyle";
import styled from "styled-components";

const Layout = props => (
	<Wrapper>
		<GlobalStyle />
		<SlideNav />
		{props.children}
	</Wrapper>
);

export default Layout;

const Wrapper = styled.div`
	padding: 0;
	margin: 0;
`;