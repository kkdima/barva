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
		return (
			<Wrapper>
				<Link href="/">
					<motion.a
						className="Link"
						style={{ userSelect: "none", height: '20px' }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
					>
						Home
					</motion.a>
				</Link>

				<Link href="/projects">
					<motion.a
						className="Link"
						style={{ userSelect: "none", height: '20px' }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
					>
						Projects
					</motion.a>
				</Link>

				<Link href="/about">
					<motion.a
						className="Link"
						style={{ userSelect: "none", height: '20px' }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
					>
						About
					</motion.a>
				</Link>

				<Link href="/contact">
					<motion.a
                        className="Link"
						style={{ userSelect: "none", height: '20px' }}                        
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

	}
	@media ${device.tablet} {
        margin: 40px 40px 0 0;
		padding: 0;
		padding: 0;
		display: flex;
		align-content: flex-end;

		.Link {
			user-select: none;
			margin: 0px;
			font-family: Noah-Bold;
			cursor: pointer;
			text-decoration: none;
			font-size: 19px;
			margin-left: 35px;
		}
	}
	@media ${device.laptop} {
	}
`;

const A = styled.a``;
