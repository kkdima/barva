import styled from "styled-components";
import { device } from "../src/theme/GlobalStyle";
import Layout from "../src/components/Layout.js";
import Link from "next/link";
import React, { Component } from "react";
import Skill from "../src/components/Skill";
import Carousel from "../src/components/Carousel";
import ContactForm from "../src/components/ContactForm";
import TitleAndCircles from "../src/components/TitleAndCircles";
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

					<TitleAndCircles/>

					<SkillsWrapper>
						{getSkills().map(skill => (
							<Skill key={skill.id} title={skill.title} text={skill.text} />
						))}
					</SkillsWrapper>

					<H2bold>Our Projects</H2bold>

					<Carousel />

					<H2bold>Contact Us</H2bold>

					<ContactForm />

				</Wrapper>
			</Layout>
		);
	}
}

export default Home;

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

const SkillsWrapper = styled.div`
	@media ${device.mobile} {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		margin: auto;
		.serviceBlock:nth-child(2) {
			flex-direction: row-reverse;
			h2 {
				max-width: 184px !important;
			}
		}
		:nth-child(2).serviceBlock:nth-child(2) {
				.rightSide:nth-child(3){
					max-width: 180px !important;
					border: solid black;
				}
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