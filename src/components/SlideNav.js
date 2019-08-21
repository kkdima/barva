import Link from "next/link";
import React, { Component } from "react";
import styled, { ThemeProvider, css } from "styled-components";
import { device } from "../theme/GlobalStyle";
import Logo from "./Logo";
import DesktopNavigation from "./DesktopNavigation";

import { menuAnimationOpen } from "../theme/KeyFrames";
import { menuToClose } from "../theme/KeyFrames";
import { closeToMenu } from "../theme/KeyFrames";
import { MenuToCloseBackwards } from "../theme/KeyFrames";
import { bgAnimationOpen } from "../theme/KeyFrames";
import { bgAnimationClose } from "../theme/KeyFrames";

class SlideNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false,
			animateMenu: false
		};
	}

	toggleMenu = () => {
		const current = this.state.showMenu;
		this.setState({
			showMenu: true,
			animateMenu: true
		});
		return setTimeout(
			this.setState({
				showMenu: !current,
				animateMenu: false
			}),
			800
		);
	};

	render() {
		const { showMenu } = this.state;
		const { animateMenu } = this.state;

		return (
			<MenuWrapper className='menu'>
				<LogoAndMenuButton>
					<Logo />
					<MenuTextWrapper>
						<Input type='checkbox' onClick={this.toggleMenu} />
						<Span className='text-Menu'>
							<p>Menu</p>
						</Span>
						<Span className='text-Close'>
							<p>Close</p>
						</Span>
					</MenuTextWrapper>
					<DesktopNavigation />
				</LogoAndMenuButton>
				<ThemeProvider theme={themeOpen}>
					{showMenu ? (
						<Menu
							animateMenu={this.state.animateMenu}
							// showMenu={this.state.showMenu}
						/>
					) : null}
				</ThemeProvider>
			</MenuWrapper>
		);
	}
}

class Menu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		// const { showMenu } = this.props;
		const { animateMenu } = this.props;

		return (
			<div>
				<Background
					// showMenu={showMenu}
					animateMenu={animateMenu}
				/>
				{/* {console.log(showMenu)} */}
				<MenuHolder>
					<UL className='menuOpens'>
						<StyledLink href='/'>
							<Li>
								<A>Home</A>
							</Li>
						</StyledLink>

						<StyledLink href='/projects'>
							<Li>
								<A>Projects</A>
							</Li>
						</StyledLink>

						<StyledLink href='/about'>
							<Li>
								<A>About</A>
							</Li>
						</StyledLink>

						<StyledLink href='/contact'>
							<Li>
								<A>Contact</A>
							</Li>
						</StyledLink>
					</UL>
				</MenuHolder>
			</div>
		);
	}
}

export default SlideNav;

const StyledLink = styled(Link)``;

const MenuWrapper = styled.div`
	box-sizing: border-box;
	padding-left: 40;
	z-index: 4;
	p {
		font-family: "Chivo", sans-serif;
	}
`;

const MenuHolder = styled.div`
	@media ${device.mobile} {
		margin: auto;
	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
		width: 768px;
	}
	@media ${device.tablet} {
	}
`;

const LogoAndMenuButton = styled.div`
	@media ${device.mobile} {
		margin: auto;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		width: 320px;
	}
	@media ${device.mobileM} {
		width: 375px;
	}
	@media ${device.mobileL} {
		width: 425px;
	}
	@media ${device.tablet} {
		width: 768px;
	}
	@media ${device.laptop} {
		/* padding: 0 30px; */
	}
	@media ${device.desktop} {
	}
`;

// MENU/CLOSE BUTTON STYLES:
// MENU/CLOSE BUTTON STYLES:
// MENU/CLOSE BUTTON STYLES:
const MenuTextWrapper = styled.div`
	@media ${device.mobile} {
		background: none;
		border: none;
		overflow: hidden;
		width: 65px;
		height: 26px;
		padding: 0;
		z-index: 1;
		margin-right: 25px;
		margin-top: 25px;
	}
	@media ${device.tablet} {
		margin: 40px 40px 0 0;
		display: none;
	}
	@media ${device.laptop} {
	}

	/* Menu to Close text animation 1st span  */
	input[type="checkbox"]:checked ~ .text-Menu {
		animation: ${menuToClose} 300ms ease-in-out;
		animation-fill-mode: forwards;
	}

	/* Menu to Close text animation 2nd span  */
	input[type="checkbox"]:checked ~ .text-Close {
		color: #fff;
		animation: ${closeToMenu} 300ms ease-in-out;
		animation-fill-mode: forwards;
	}

	/* Close to Menu text animation 2nd span  */
	input[type="checkbox"]:not(:checked) ~ .text-Menu {
		animation: ${MenuToCloseBackwards} 300ms ease-in-out;
		animation-fill-mode: forwards;
	}
`;

const Input = styled.input`
	@media ${device.mobile} {
		position: absolute;
		width: 65px;
		height: 26px;
		z-index: 2;
		cursor: pointer;
		margin: 0;
		opacity: 0;
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;

const Span = styled.span`
	@media ${device.mobile} {
		justify-content: center;
		display: flex;
		color: black;
		padding-bottom: 10px;
		z-index: -1;
		p {
			font-size: 1.2rem;
			margin: 0;
		}
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;
//END OF MENU/CLOSE BUTTON STYLES;
//END OF MENU/CLOSE BUTTON STYLES;
//END OF MENU/CLOSE BUTTON STYLES;

const Background = styled.div`
	@media ${device.mobile} {
		position: absolute;
		top: 0;
		background-color: #222222;
		box-sizing: border-box;
		height: 100vh;
		width: 100%;
		opacity: 1;
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}

	@keyframes bgAnimationOpen {
		from {
			transform: translateY(-900px);
		}
		to {
			visibility: block;
		}
	}

	@keyframes bgAnimationClose {
		from {
			transform: translateY(900px);
		}
		to {
			visibility: block;
		}
	}
	
	animation: bgAnimationOpen 0.8s
		cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
	animation-direction: ${props => (!props.animateMenu ? "normal" : "reverse")};

	/* ${props.animateMenu &&
		css`
			animation: bgAnimationOpen 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
			animation-direction: normal;
		`};

	${!props.animateMenu &&
		css`
			animation: bgAnimationOpen 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
			animation-direction: reverse;
		`}; */
`;

Background.defaultProps = {
	theme: {
		mian: "bgAnimationOpen"
	}
};

const themeOpen = {
	main: "bgAnimationOpen"
};
const themeClose = {
	main: "bgAnimationClose"
};

// UL NAVIGATION STYLES:
// UL NAVIGATION STYLES:
// UL NAVIGATION STYLES:
const UL = styled.ul`
	@media ${device.mobile} {
		position: absolute;
		top: 140px;
		font-size: 32px;
		font-weight: bold;
		max-width: 200px;
		margin: 0px 0px 0px 25px;
		padding: 0px;
	}
	@media ${device.tablet} {
		margin-left: 40px;
	}
	@media ${device.laptop} {
	}

	li:nth-of-type(1) {
		animation: ${menuAnimationOpen} 0.8s 0.5s cubic-bezier(0.35, 0.25, 0, 1.28);
		animation-fill-mode: forwards;
	}
	li:nth-of-type(2) {
		animation: ${menuAnimationOpen} 0.8s 0.6s cubic-bezier(0.35, 0.25, 0, 1.22);
		animation-fill-mode: forwards;
	}
	li:nth-of-type(3) {
		animation: ${menuAnimationOpen} 0.8s 0.7s cubic-bezier(0.35, 0.25, 0, 1.15);
		animation-fill-mode: forwards;
	}
	li:nth-of-type(4) {
		animation: ${menuAnimationOpen} 0.8s 0.8s cubic-bezier(0.35, 0.25, 0, 1.1);
		animation-fill-mode: forwards;
	}
`;

const Li = styled.li`
	@media ${device.mobile} {
		opacity: 0;
		list-style: none;
		color: pink;
		text-align: left;
		line-height: 45px;

		transition: transform 400ms ease-in;
		&:hover {
			transform: scale(1.1);
		}
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;

const A = styled.a`
	cursor: pointer;
	text-decoration: none;
`;
