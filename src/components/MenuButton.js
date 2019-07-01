import React, { Component } from "react";
import styled from "styled-components";

// const showMenu = () =>

class MenuButton extends Component {
	showMenu() {
		const checkbox = this.refs[toggler];

		const text = this.refs[text];
		if (checkbox.checked == true) {
			text.style.display = "block";
		} else {
			text.style.display = "none";
		}
	}
	const;

	render() {
		return (
			<MenuTextWrapper>
				<Input type="checkbox" id="toggler" ref="toggler" />
				<Span className="text-Menu">
					<p>Menu</p>
				</Span>
				<Span className="text-Close">
					<p>Close</p>
				</Span>
				<P ref="text">Checkbox is CHECKED!</P>
			</MenuTextWrapper>
		);
	}
}

export default MenuButton;

const P = styled.p`
	display: none;
	border: solid red;
`;

const MenuTextWrapper = styled.div`
	background: none;
	border: none;
	overflow: hidden;
	width: 65px;
	height: 26px;
	padding: 0;
	z-index: 1;
	/* border: white solid 1px; */
	position: absolute;
	right: 20px;
	top: 39px;

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
	:first-child {
		color: black;
	}
`;

const Span = styled.span`
	justify-content: center;
	display: flex;
	color: #fff;
	padding-bottom: 10px;
	z-index: -1;
	p {
		font-size: 1.2rem;
		margin: 0;
	}
`;
