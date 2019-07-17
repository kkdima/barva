import styled from "styled-components";
import { device } from "../src/theme/GlobalStyle";
import Layout from "../src/components/Layout.js";
import Link from "next/link";
import React, { Component } from "react";
import Skill from "../src/components/Skill";
import Carousel from "../src/components/Carousel";

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

class Blog extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Layout>
				<Wrapper>
					<HeadlineWrapper>
						<div id="holder1">
							<img src="../static/images/OvalBlue1.svg" id="OvalBlue1" />
						</div>
						<div id="holder2">
							<img src="../static/images/OvalBlue2.svg" id="OvalBlue2" />
						</div>
						<div id="holder3">
							<img src="../static/images/OvalOrange.svg" id="OvalOrange" />
						</div>
						<div id="holder4">
							<img src="../static/images/OvalOrangeSmall.svg" id="OvalOrangeSmall" />
						</div>
						<div id="holder5">
							<img src="../static/images/OvalOrangeSmaller.svg" id="OvalOrangeSmaller"/>
						</div>

						<H1>
							HI WE ARE <br />
							BARVA <br />
							CREATIVE TEAM
						</H1>
					</HeadlineWrapper>

					<H2>Based in Los Angeles</H2>

					<SkillsWrapper>
						{getSkills().map(skill => (
							<Skill id={skill.id} title={skill.title} text={skill.text} />
						))}
					</SkillsWrapper>

					<H2bold>Our Projects</H2bold>

					<Carousel />
				</Wrapper>
			</Layout>
		);
	}
}

export default Blog;

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
		left: 29px;

		animation: ${textAnimationUp} 1s ease;
		animation-fill-mode: forwards;



		/* border: solid pink 1px; */
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;

const H2bold = styled.h2`
	@media ${device.mobile} {
		font-family: Noah;
		font-size: 30px;
		text-align: center;
		color: #0E0E0E;
		font-weight: 600;
		margin: -28px 0 86px 0;
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
	/* justify-content: center; */
	/* justify-content: flex-end; */
`;

const HeadlineWrapper = styled.div`
	@media ${device.mobile} {
		position: relative;
		margin: auto;
		padding-top: 49px;
		width: 320px;
		height: 200px;
		/* z-index: -3; */

		/* border: solid black 1px; */

		#holder1 {
			z-index: 1;
			position: absolute;
			left: 39px;
			#OvalBlue1 {
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
				width: 156.5px;
				height: 57.6px;
			}
		}

		#holder4{
			z-index: 3;
			position: absolute;
			right: 22px;
			margin-top: 37px;
			#OvalOrangeSmall {
				position: relative;
				width: 40.9px;
				height: 40.8px;
				/* left: 257px; */
				/* top: 85px; */
			}
		}

		#holder5{
			z-index: 3;
			position: absolute;
			right: 57px;
			margin-top: 17px;
			#OvalOrangeSmaller {
				position: relative;
				width: 11.7px;
				height: 11.3px;
				/* top: 68px; */
				/* left: 251px; */
			}
		}
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;
