// import Layout from "../src/components/Layout";
import styled from "styled-components";
import { device } from "../../theme/GlobalStyle";
import React from "react";
import { motion } from "framer-motion";

const HeadlineOvals = () => (
	<Div>
		<Wrapper>
			<motion.div
				id='holder1'
				initial={{ opacity: 0, x: -20, y: 20 }}
				animate={{ opacity: 1, x: 0, y: 0 }}
				transition={{
					ease: "easeOut",
					duration: 1.5,
					delay: 0.5
				}}
			>
				<img src='../static/images/OvalBlue1.svg' id='OvalBlue1' />
			</motion.div>

			<motion.div
				id='holder2'
				initial={{ opacity: 0, x: 400, y: -110, scale: 0.4 }}
				animate={{ opacity: 1, x: 205, y: -130, scale: 1 }}
				transition={{
					ease: "easeOut",
					duration: 1.5,
					delay: 0.5
				}}
			>
				<img src='../static/images/OvalBlue2.svg' id='OvalBlue2' />
			</motion.div>

			<motion.div
				id='holder3'
				initial={{ opacity: 0, x: -30, y: -300 }}
				animate={{ opacity: 1, x: -43, y: -188, scale: 0.4 }}
				transition={{
					ease: "easeOut",
					duration: 1.5,
					delay: 0.5
				}}
			>
				<img src='../static/images/OvalOrange.svg' id='OvalOrange' />
			</motion.div>

			<motion.div
				id='holder4'
				initial={{ opacity: 0, x: -30, y: -400 }}
				animate={{ opacity: 1, x: 10, y: -350 }}
				transition={{
					ease: "easeOut",
					duration: 1.5,
					delay: 0.5
				}}
			>
				<img src='../static/images/OvalOrangeSmall.svg' id='OvalOrangeSmall' />
			</motion.div>

			<motion.div
				id='holder5'
				initial={{ opacity: 0, x: 10, y: 60 }}
				animate={{ opacity: 1, x: 25, y: -350 }}
				transition={{
					ease: "easeOut",
					duration: 1.5,
					delay: 0.5
				}}
			>
				<img src='../static/images/OvalOrangeSmaller.svg' id='OvalOrangeSmaller' />
			</motion.div>

			<motion.div
				id='zIndex'
				initial={{ opacity: 0, y: -220 }}
				animate={{ opacity: 1, y: -270 }}
				transition={{
					ease: "easeOut",
					duration: 1
				}}
			>
				<H1 >OUR PROJECTS</H1>
			</motion.div>
		</Wrapper>
	</Div>
);

export default HeadlineOvals;

const Div = styled.div`
	@media ${device.mobile} {
		/* border: solid black; */
		position: relative;
		display: flex;
		width: 100%;
		overflow-x: hidden !important;
		justify-content: center;
		padding-bottom: 40px;
		z-index: 1;
	}

	.ProjectHolder {
		/* border: solid black; */
		position: relative;
		margin: 0;
		padding: 0;
	}
	.InfoProject {
		position: absolute;
		display: flex;
		width: 284px;
		height: 189px;
		border-radius: 6px;
		box-shadow: 0 16px 29px -12px rgba(0, 0, 0, 0.14);
		background-color: #e5eeff;
	}
`;
const Wrapper = styled.div`
	@media ${device.mobile} {
		position: relative;
		padding-top: 49px;
		width: 409px;
		height: 200px;
		img {
			user-select: none;
			outline: none;
		}
	}
	@media ${device.tablet} {
		width: 409px;
	}
	@media ${device.laptop} {
	}
`;

const H1 = styled.h1`
	@media ${device.mobile} {
		font-family: Noah-Bold;
		font-size: 30px;
		font-size: 40px;
		text-transform: uppercase;
		line-height: 1.03;
		letter-spacing: normal;
		margin: 0;
		z-index: 3;
		position: relative;
		user-select: none;
		outline: none;
		left: 36px;
		bottom: 80px;
	}
	@media ${device.tablet} {
		left: 61px;
	}
	@media ${device.laptop} {
	}
`;
