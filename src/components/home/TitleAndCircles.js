import styled from "styled-components";
import { device } from "../../theme/GlobalStyle";
import React, { Component } from "react";
import { motion } from "framer-motion";

const TitleAndCircles = () => {

	const transition = { ease: "easeOut", duration: 1 };

	return (
		<HeadlineWrapper>
			<div id='holder1'>
				<motion.img
					src='/images/OvalBlue1.svg'
					id='OvalBlue1'
					whileHover={{ scale: 1.1, rotate: 5 }}
					initial={{ opacity: 0, x: -20, y: 20 }}
					animate={{ opacity: 1, x: 0, y: 0 }}
					transition={transition}
				/>
			</div>

			<motion.div
				id='holder2'
				initial={{ opacity: 0, x: 100, y: 50 }}
				animate={{ opacity: 1, x: 0, y: 0 }}
				transition={transition}
			>
				<img src='/images/OvalBlue2.svg' id='OvalBlue2' />
			</motion.div>

			<motion.div
				id='holder3'
				initial={{ opacity: 0, x: -30, y: 20 }}
				animate={{ opacity: 1, x: 0, y: 0 }}
				transition={transition}
			>
				<img src='/images/OvalOrange.svg' id='OvalOrange' />
			</motion.div>

			<motion.div
				id='holder4'
				initial={{ opacity: 0, x: -30, y: 20 }}
				animate={{ opacity: 1, x: 0, y: 0 }}
				transition={transition}
			>
				<img src='/images/OvalOrangeSmall.svg' id='OvalOrangeSmall' />
			</motion.div>

			<motion.div
				id='holder5'
				initial={{ opacity: 0, x: 20, y: 60 }}
				animate={{ opacity: 1, x: 0, y: 0 }}
				transition={transition}
			>
				<img src='/images/OvalOrangeSmaller.svg' id='OvalOrangeSmaller' />
			</motion.div>

			<div>
				<motion.div
					id='zIndex'
					initial={{ opacity: 0, y: 300 }}
					animate={{ opacity: 1, y: 200 }}
					transition={transition}
				>
					<H1>
						HI WE ARE <br />
						BARVA <br />
						CREATIVE TEAM
					</H1>
				</motion.div>
			</div>

			<div id='zIndex'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{
						ease: "easeOut",
						delay: 1.4
					}}
				>
					<H2 className='mb-5' >Based in Los Angeles</H2>
				</motion.div>
			</div>
		</HeadlineWrapper>

	)
};

export default TitleAndCircles;

const HeadlineWrapper = styled.div`
	@media ${device.mobile} {
		position: relative;
		margin: auto;
		padding-top: 49px;
		margin-bottom: 50px;
		width: 320px;
		height: 200px;
		/* z-index: -1; */

		/* border: solid black; */

		#zIndex {
			width: 300px;
			position: absolute;
			z-index: 3;
		}

		#holder1 {
			z-index: 1;
			position: absolute;
			left: 39px;
			#OvalBlue1 {
				user-select: none;
				width: 162.1px;
				height: 116.2px;
			}
		}

		#holder2 {
			z-index: 1;
			position: absolute;
			bottom: 25px;
			right: 14px;
			#OvalBlue2 {
				user-select: none;
				width: 162.9px;
				height: 100.4px;
			}
		}

		#holder3 {
			z-index: 2;
			position: absolute;
			bottom: 25px;
			left: 4px;
			#OvalOrange {
				user-select: none;
				width: 156.5px;
				height: 57.6px;
			}
		}

		#holder4 {
			z-index: 3;
			position: absolute;
			right: 22px;
			margin-top: 37px;
			#OvalOrangeSmall {
				user-select: none;
				position: relative;
				width: 40.9px;
				height: 40.8px;
			}
		}

		#holder5 {
			z-index: 3;
			position: absolute;
			right: 57px;
			margin-top: 17px;
			#OvalOrangeSmaller {
				user-select: none;
				position: relative;
				width: 11.7px;
				height: 11.3px;
			}
		}
	}
	@media ${device.tablet} {
		width: 368px;
		height: 220px;
		img {
			transform: scale(1.3);
		}
		#holder1 {
			left: 45px;
		}
		#holder2 {
			bottom: 55px;
			right: 14px;
		}
		#holder3 {
			bottom: 35px;
			left: 4px;
		}
		#holder4 {
			right: 0px;
			top: 23px;
		}
		#holder5 {
			top: 23px;
		}
	}
	@media ${device.laptop} {
	}
`;

const H2 = styled.h2`
	@media ${device.mobile} {
		all: unset;
		font-family: Noah-Regular;
		font-weight: normal;
		font-size: 16px;
		text-align: center;
		color: #6a6a6a;
		width: 320px;
		/* margin: -28px 0 86px 0; */
		position: absolute;
		width: 320px;
		bottom: -190px;
	}
	@media ${device.tablet} {
		width: 368px;
		bottom: -220px;
		/* right: 0px; */
	}
	@media ${device.laptop} {
	}
`;

const H1 = styled.h1`
	@media ${device.mobile} {
		text-align: center;
		font-family: Noah-Bold;
		font-size: 35px;
		line-height: 1.03;
		letter-spacing: normal;
		margin: 0;
		z-index: 3;
		position: absolute;
		bottom: 50px;
		left: 12px;
		width: 290px;
		user-select: none;
		outline: none;
	}
	@media ${device.tablet} {
		left: 39px;
	}
	@media ${device.laptop} {
	}
`;
