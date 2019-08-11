import SlideNav from "./SlideNav";
import Footer from "./Footer";
import GlobalStyle from "../theme/GlobalStyle";
import styled from "styled-components";

const Layout = props => (
	<Wrapper>
		<GlobalStyle />
		<SlideNav />
		{props.children}
		<Footer />
	</Wrapper>
);

export default Layout;

const Wrapper = styled.div`
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	background-color: #fafaff;
	
	/* To keep footer at the very bottom of the 'Body' */
	/* position: relative;
	min-height: 100vh; */
`;
