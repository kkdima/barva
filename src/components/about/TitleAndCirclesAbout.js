import styled from "styled-components";
import { device } from "../../theme/GlobalStyle";
import React, { Component } from "react";
import { motion } from "framer-motion";

const TitleAndCirclesAbout = () => {
	const transition = { ease: "easeOut", duration: 1 };

	return (
		<Wrapper>
			<motion.div 
				id='holder1'
				initial={{ opacity: 0, x: -20, y: 20 }}
				animate={{ opacity: 1, x: 0, y: 0 }}
				transition={transition}
			>
			</motion.div>
				<motion.h1
					transition={transition}
					initial={{ opacity: 0, y: 80 }}
					animate={{ opacity: 1, x: -10, y: 30 }}
				>
					About us
				</motion.h1>
		</Wrapper>
	);
};

export default TitleAndCirclesAbout;

const Wrapper = styled.div`
	@media ${device.mobile} {
		display: flex;
		flex-direction: row;
		justify-content: center;
		position: relative;
		margin: 45px 0 50px 0;
		/* border: solid black 1px; */
		#OvalBlue1 { 
			user-select: none;
		}
		#holder1 {
			z-index: 1;
			margin-bottom: 0px;
			background-image: url('../../../static/images/OvalBlue1.svg');
			background-repeat: no-repeat;
			width: 249px;
			height: 165px;
		}
		h1 {
			z-index: 2;
			text-align: center;
			font-family: Noah-Bold;
			font-size: 35px;
			line-height: 1.03;
			letter-spacing: normal;
			z-index: 3;
			outline: none;
			user-select: none;
			position: absolute;
		}
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;
