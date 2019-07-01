import NavBar from "./NavBar";
import MenuButton from "./MenuButton";
import Logo from "./Logo";
import GlobalStyle from "../theme/GlobalStyle";
import styled from "styled-components";

const Layout = props => (
	<Wrapper>
		<GlobalStyle />
		<FixedHeader>
			<Logo />
			<MenuButton />
		</FixedHeader>
		<NavBar />
		{props.children}
	</Wrapper>
);

export default Layout;

const Wrapper = styled.div`
	padding: 0;
`;

const FixedHeader = styled.div`
	/* position: fixed; */
	z-index: 2;
	border: solid white;
`;
