import SlideNav from "./SlideNav";
import Footer from "./Footer";
import HeaderBackground from './HeaderBackground'
import GlobalStyle from "../theme/GlobalStyle";
import styled from "styled-components";
import Background from '../components/Background'

const Layout = props => (
	<Wrapper>
		<GlobalStyle />
		<HeaderBackground />
		<SlideNav />
		<Background />
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

	position: relative;
	width: 100%;
    overflow-x: hidden !important;
	
	/* To keep footer at the very bottom of the 'Body' */
	/* position: relative;
	min-height: 100vh; */
`;
