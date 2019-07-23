import styled from "styled-components";
import { device } from "../src/theme/GlobalStyle";
import Layout from "../src/components/Layout.js";
import Link from "next/link";
import React, { Component } from "react";
import Skill from "../src/components/Skill";
import Carousel from "../src/components/Carousel";
import ContactForm from "../src/components/ContactForm";
import Footer from "../src/components/Footer";
import { motion } from "framer-motion";
import { textAnimationUp } from "../src/theme/KeyFrames";

function getSkills() {
	return [
		{
			id: 1,
			title: "UI/UX and web\
			design",
			text:
				"Leave it to us to realize your project into an intuitive, functional, and neatiful design - one that understands the needs of your clients."
		},
		{
			id: 2,
			title: "Branding and identity",
			text:
				"You want to add aesthetics to your business idea? We can help you set a 360ᵒ branding identity and copywriting tone of voice."
		},
		{
			id: 3,
			title: "Cinematography level video production",
			text:
				"In the era of digital consumption your business should leave a strong impression. Video format is the best way to translate the vibe of your products directly to the consumer’s mind."
		}
	];
}

class Home extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Layout>
				<Wrapper>
					<HeadlineWrapper>
						<div id="holder1">
							<motion.img
								src="../static/images/OvalBlue1.svg"
								id="OvalBlue1"
								whileHover={{ scale: 1.1, rotate: 5 }}
								initial={{ opacity: 0, x: -20, y: 20}}
								animate={{ opacity: 1, x: 0, y:0}}
								transition={{ 
									ease: "easeOut", 
									duration: 1.5,
									delay: 0.5
								}}
							/>
						</div>

						<motion.div 
							id="holder2"
							initial={{ opacity: 0, x: 100, y: 50}}
							animate={{ opacity: 1, x: 0, y:0}}
							transition={{ 
								ease: "easeOut", 
								duration: 1.5,
								delay: 0.5
							}}
						>
							<img src="../static/images/OvalBlue2.svg" id="OvalBlue2" />
						</motion.div>

						<motion.div 
							id="holder3"
							initial={{ opacity: 0, x: -30, y: 20}}
							animate={{ opacity: 1, x: 0, y:0}}
							transition={{ 
								ease: "easeOut",
								duration: 1.5,
								delay: 0.5
							}}
						>
							<img src="../static/images/OvalOrange.svg" id="OvalOrange" />
						</motion.div >

						<motion.div
							id="holder4"
							initial={{ opacity: 0, x: -30, y: 20}}
							animate={{ opacity: 1, x: 0, y:0}}
							transition={{ 
								ease: "easeOut",
								duration: 1.5,
								delay: 0.5
							}}
							>
							<img src="../static/images/OvalOrangeSmall.svg" id="OvalOrangeSmall"/>
						</motion.div>

						<motion.div 
							id="holder5"
							initial={{ opacity: 0, x: 20, y: 60}}
							animate={{ opacity: 1, x: 0, y:0}}
							transition={{ 
								ease: "easeOut",
								duration: 1.5,
								delay: 0.5
							}}
						>
							<img src="../static/images/OvalOrangeSmaller.svg" id="OvalOrangeSmaller"/>
						</motion.div>

						<div >
							<motion.div
								id="zIndex"
								initial={{ opacity: 0, y: 300 }}
								animate={{ opacity: 1, y: 200 }}
								transition={{ 
									ease: "easeOut",
									duration: 0.5,
								}}
							>
								<H1>
									HI WE ARE <br />
									BARVA <br />
									CREATIVE TEAM
								</H1>
							</motion.div>
						</div>
					</HeadlineWrapper>

					<div id="zIndex">
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ 
									ease: "easeOut",
									delay: 0.5,
								}}
							>
								<H2>Based in Los Angeles</H2>
							</motion.div>
						</div>


					<SkillsWrapper>
						{getSkills().map(skill => (
							<Skill key={skill.id} title={skill.title} text={skill.text} />
						))}
					</SkillsWrapper>

					<H2bold>Our Projects</H2bold>
					{/* <CarouselHolder>
							<Carousel />
							<Carousel />
							<Carousel />
						</CarouselHolder> */}
					<Carousel />
					<H2bold>Contact Us</H2bold>
					<ContactForm />
					<Footer />
				</Wrapper>
			</Layout>
		);
	}
}

export default Home;

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

	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;

const H2bold = styled.h2`
	@media ${device.mobile} {
		font-family: Noah-Bold;
		font-size: 30px;
		text-align: center;
		color: #0e0e0e;
		font-weight: 600;
		margin: -28px 0 70px 0;
		margin-top: 40px;
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;

const H2 = styled.h2`
	@media ${device.mobile} {
		font-family: Noah-Regular;
		font-size: 16px;
		text-align: center;
		color: #6a6a6a;
		font-weight: normal;
		margin: -28px 0 86px 0;
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;

const SkillsWrapper = styled.div`
	@media ${device.mobile} {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		margin: auto;
		.serviceBlock:nth-child(2) {
			flex-direction: row-reverse;
		}
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;

const Wrapper = styled.div`
	@media ${device.mobile} {
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;

const HeadlineWrapper = styled.div`
	@media ${device.mobile} {
		position: relative;
		margin: auto;
		padding-top: 49px;
		width: 320px;
		height: 200px;

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
	}
	@media ${device.laptop} {
	}
`;

const CarouselHolder = styled.div`
	@media ${device.mobile} {
		margin: auto;
		border: solid black;
	}
	@media ${device.tablet} {
		display: flex;
		flex-direction: row;
		div:nth-of-type(1) {
			flex-grow: 1;
		}
	}
	@media ${device.laptop} {
	}
`;
