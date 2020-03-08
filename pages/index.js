import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { device } from '../src/theme/GlobalStyle';
import Layout from '../src/components/Layout.js';
import Skill from '../src/components/home/Skill';
import Project from '../src/components/projects/Project';
import ContactForm from '../src/components/ContactForm';
import TitleAndCircles from '../src/components/home/TitleAndCircles';
// import { textAnimationUp } from "../src/theme/KeyFrames";
// import Link from "next/link";

const ParallaxImage = ({ src, ...style }) => {
	const [elementTop, setElementTop] = useState(0);
	const ref = useRef(null);
	const { scrollY } = useViewportScroll();

	const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
		clamp: false
	});

	useLayoutEffect(() => {
		const element = ref.current;
		setElementTop(element.offsetTop);
	}, [ref]);

	return (
		<div ref={ref} className='image-container'>
			<motion.div className='overlay' style={{ ...style, y }} />
			<img src={src} alt='' />
		</div>
	);
};

function getSkills() {
	return [
		{
			id: 1,
			img: '/images/service.jpg',
			title: 'UI/UX and web\
			design',
			text:
				'Leave it to us to realize your project into an intuitive, functional, and neatiful design - one that understands the needs of your clients.'
		},
		{
			id: 2,
			img: '/images/service_2.jpg',
			title: 'Branding and identity',
			text:
				'You want to add aesthetics to your business idea? We can help you set a 360ᵒ branding identity and copywriting tone of voice.'
		},
		{
			id: 3,
			img: '/images/service_3.jpg',
			title: 'Cinematography level video production',
			text:
				'In the era of digital consumption your business should leave a strong impression. Video format is the best way to translate the vibe of your products directly to the consumer’s mind.'
		}
	];
}

function getProjects() {
	return [
		{
			id: 1,
			name: 'Ever Two Films',
			link: 'https://www.evertwofilms.com/',
			text:
				'Wedding video and photo production company based in Los Angeles. The guys need to tell their stories not only through video and photo thus site is very important part for storytelling too.',
			pic: `/images/EverTwo-Films-Vasquez-Rocks-Engagement-Shoot-135-1.jpg`,
			direction: 'fade-left'
		},
		{
			id: 2,
			name: 'Cinestory Films',
			link: 'https://www.cinestoryfilms.com/',
			text: 'Cinstory Films is a very high-end video production company. With the same high expectations for aesthetics when it comes to the web presence.',
			pic: '/images/projects/cinestory_films.jpg',
			direction: 'fade-right'
		}
	];
}

const Home = () => (
	<Layout>
		<Wrapper>
			<TitleAndCircles />
			<SkillsWrapper>
				{getSkills().map(skill => (
					<Skill
						number={skill.id}
						key={skill.id}
						title={skill.title}
						text={skill.text}
						img={skill.img}
						direction='fade-up'
					/>
				))}
			</SkillsWrapper>
			<H2bold>Our Projects</H2bold>

			{getProjects().map(project => (
				<Project
					name={project.name}
					text={project.text}
					link={project.link}
					pic={project.pic}
					id={project.id}
					key={project.id}
					direction={project.direction}
				/>
			))}

			<ContactForm />
		</Wrapper>
	</Layout>
);

export default Home;

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
			.rightSide:nth-child(3) {
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

const H2bold = styled.h2`
	@media ${device.mobile} {
		font-family: Noah-Bold;
		font-size: 30px;
		text-align: center;
		color: #0e0e0e;
		font-weight: 600;
		margin: 40px 0 70px 0;
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
		z-index: 2;
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;
