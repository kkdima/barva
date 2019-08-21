import styled from "styled-components";
import { device } from "../theme/GlobalStyle";
import React, { Component } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

class DesktopNavigation extends Component {
	constructor() {
		super();
	}
	render() {
		const container = {
			hidden: { opacity: 1, scale: 0 },
			visible: { opacity: 1, scale: 1 },
			whileHover: { scale: 1.1, opacity: 1 },
			whileTap: { scale: 0.9, x: "-5px", y: "5px" },
			visible: {
				opacity: 1,
				scale: 1,
				transition: {
					delay: 0.3,
					when: "beforeChildren",
					staggerChildren: 0.1
				}
			}
		};

		return (
			<Wrapper>
				<Link href='/'>
					<motion.a
						className='Link'
						style={{ userSelect: "none", height: "20px" }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
					>
						Home
					</motion.a>
				</Link>
				<Link href='/projects'>
					<motion.a
						className='Link'
						style={{ userSelect: "none", height: "20px" }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
					>
						Projects
					</motion.a>
				</Link>

				<Link href='/about'>
					<motion.a
						className='Link'
						style={{ userSelect: "none", height: "20px" }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
					>
						About
					</motion.a>
				</Link>

				<Link href='/contact'>
					<motion.a
						className='Link'
						style={{ userSelect: "none", height: "20px" }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
					>
						Contact
					</motion.a>
				</Link>
			</Wrapper>
		);
	}
}

export default DesktopNavigation;

const Wrapper = styled.div`
	@media ${device.mobile} {
		display: none;
		position: relative;
	}
	@media ${device.tablet} {
		margin: 40px 40px 0 0;
		padding: 0;
		display: flex;
		/* flex-direction: column; */
		align-content: flex-end;

		#circleProjects {
			position: absolute;
			/* transform: translateY(-50%); */
			/* z-index: -1; */
			/* left: 115px; */
			/* bottom: 15px; */
		}

		.Link {
			user-select: none;
			margin: 0px;
			font-family: Noah-Bold;
			cursor: pointer;
			text-decoration: none;
			user-select: none;
			outline: none;
			font-size: 19px;
			margin-left: 35px;
			:focus {
				outline: none;
			}
		}
	}
	@media ${device.laptop} {
		margin-right: 0;
	}
`;

const A = styled.a``;
