import Link from "next/link";
import React, { Component } from "react";
import styled from "styled-components";
import Logo from './Logo';

class SlideNav extends Component {
	constructor(props) {
		super(props);
		this.background = React.createRef();
		this.checkbox = React.createRef();
		this.menuNavigation = React.createRef();
	}

	openSlideMenu() {
		const backgroundNode = this.background.current;
		const checkbox = this.checkbox.current;
		const menuNavigation = this.menuNavigation.current;
		if (checkbox.checked === true) {
			backgroundNode.style.display = "block";
			menuNavigation.style.display = "block";
		} else {
			backgroundNode.style.display = "none";
			menuNavigation.style.display = "none";
		}
	}

	componentDidMount() {
		this.openSlideMenu();
	}

	render() {
		return (
			<MenuWrapper className="menu">

				<LogoAndMenuButton>
					<Logo />
					<MenuTextWrapper>
						<Input
							type="checkbox"
							ref={this.checkbox}
							onClick={this.openSlideMenu.bind(this)}
						/>
						<Span className="text-Menu">
							<p>Menu</p>
						</Span>
						<Span className="text-Close">
							<p>Close</p>
						</Span>
					</MenuTextWrapper>
				</LogoAndMenuButton>

				<Background 
					id="background"
					ref={this.background}
				/>

				<UL 
					ref={this.menuNavigation}
				>
					<StyledLink href="/">
						<Li>
							<A>Home</A>
						</Li>
					</StyledLink>

					<StyledLink href="/projects">
						<Li>
							<A>Projects</A>
						</Li>
					</StyledLink>

					<StyledLink href="/about">
						<Li>
							<A>About</A>
						</Li>
					</StyledLink>

					<StyledLink href="/contact">
						<Li>
							<A>Contact</A>
						</Li>
					</StyledLink>
				</UL>

			</MenuWrapper>
		);
	}
}

export default SlideNav;

const StyledLink = styled(Link)``;


const MenuWrapper = styled.div`
	width: 100vw;
	box-sizing: border-box;
	padding-left: 40;
	background: grey;
`;

const LogoAndMenuButton = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: row;
	margin: 0;
	width: 100%;
`;

// MENU/CLOSE BUTTON STYLES:
// MENU/CLOSE BUTTON STYLES:
// MENU/CLOSE BUTTON STYLES:
const MenuTextWrapper = styled.div`
	background: none;
	border: none;
	overflow: hidden;
	width: 65px;
	height: 26px;
	padding: 0;
	z-index: 1;
	margin: 40px 40px;

	/* Menu to Close text animation 1st span  */
	input[type="checkbox"]:checked ~ .text-Menu {
		animation: menuToClose 300ms ease-in-out;
		animation-fill-mode: forwards;
		@keyframes menuToClose {
			from {
				opacity: 1;
			}
			to {
				opacity: 0;
				transform: translateY(-27px);
			}
		}
	}

	/* Menu to Close text animation 2nd span  */
	input[type="checkbox"]:checked ~ .text-Close {
		color: #fff;
		animation: closeToMenu 300ms ease-in-out;
		animation-fill-mode: forwards;
		@keyframes closeToMenu {
			from {
				opacity: 0;
			}
			to {
				opacity: 1;
				transform: translateY(-33px);
			}
		}
	}

	/* Close to Menu text animation 2nd span  */
	input[type="checkbox"]:not(:checked) ~ .text-Menu {
		animation: MenuToCloseBackwards 300ms ease-in-out;
		animation-fill-mode: forwards;
		@keyframes MenuToCloseBackwards {
			0% {
				transform: translateY(-20px);
				opacity: 0;
			}
			40% {
				opacity: 0;
			}
			100% {
				opacity: 1;
			}
		}
	}
`;

const Input = styled.input`
	position: absolute;
	width: 65px;
	height: 26px;
	z-index: 2;
	cursor: pointer;
	margin: 0;
	opacity: 0;
`;

const Span = styled.span`
	justify-content: center;
	display: flex;
	color: black;
	padding-bottom: 10px;
	z-index: -1;
	p {
		font-size: 1.2rem;
		margin: 0;
	}
`;
//END OF MENU/CLOSE BUTTON STYLES;
//END OF MENU/CLOSE BUTTON STYLES;
//END OF MENU/CLOSE BUTTON STYLES;


const Background = styled.div`
	position: absolute;
	top: 0;
	background-color: #222222;
	box-sizing: border-box;
	height: 100vh;
	width: 100vw;
	display: none;

	animation: bganimation 0.8s cubic-bezier(0.215, 0.61, 0.355, 1);
	animation-fill-mode: forwards;
	@keyframes bganimation {
		from {
			transform: translateY(-900px);
		}
		to {
			visibility: block;
		}
	}
`;


// UL NAVIGATION STYLES:
// UL NAVIGATION STYLES:
// UL NAVIGATION STYLES:
const UL = styled.ul`
	font-size: 32px;
	font-weight: bold;
	max-width: 200px;
	margin: 0px 0px 0px 40px;
	padding: 0px;
	display: none;

	@keyframes menuAnimation {
		0% {
			transform: translateY(50px);
		}
		100% {
			opacity: 1;
			color: pink;
		}
	}

	li:nth-of-type(1) {
		animation: menuAnimation 0.8s 0.5s cubic-bezier(0.35, 0.25, 0, 1.28);
		animation-fill-mode: forwards;
	}
	li:nth-of-type(2) {
		animation: menuAnimation 0.8s 0.6s cubic-bezier(0.35, 0.25, 0, 1.22);
		animation-fill-mode: forwards;
	}
	li:nth-of-type(3) {
		animation: menuAnimation 0.8s 0.7s cubic-bezier(0.35, 0.25, 0, 1.15);
		animation-fill-mode: forwards;
	}
	li:nth-of-type(4) {
		animation: menuAnimation 0.8s 0.8s cubic-bezier(0.35, 0.25, 0, 1.1);
		animation-fill-mode: forwards;
	}
`;

const Li = styled.li`
	opacity: 0;
	list-style: none;
	color: pink;
	text-align: left;
	line-height: 45px;

	li:hover {
		scale: 0.6;
		animation: activeAnim 1s cubic-bezier(0.35, 0.25, 0, 1.28);
		animation-fill-mode: forwards;
		@keyframes activeAnim {
			from {
			}
			to {
				scale: 0.9;
				color: red;
			}
		}
	}
`;

const A = styled.a`
	cursor: pointer;
	text-decoration: none;
`;