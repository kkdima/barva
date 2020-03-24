import React, { useState, useRef, useLayoutEffect } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { device } from '../src/theme/GlobalStyle';
import Layout from '../src/components/Layout.js';

import TitleAndCirclesAbout from '../src/components/about/TitleAndCirclesAbout';
import ContactForm from '../src/components/ContactForm';

const About = () => {
	const transition = { ease: 'easeOut', duration: 1 };
	return (
		<Layout>
			<Wrapper>
				<TitleAndCirclesAbout />
				<motion.p>
					A Barva Agency is a full-service digital marketing and web development
					company that partners with small businesses and individuals to deliver an
					experience unlike any other. We avoid buzzwords and bullshit – we spend
					our energy instead focused on creating best-in-class user experiences that
					translate into the things that actually matter.
				</motion.p>

				<motion.p
					id='barva-tag'
					transition={transition}
					initial={{ opacity: 0, x: -200 }}
					animate={{ opacity: 1, x: -120 }}
				>
					BARVA
				</motion.p>

				<motion.h1
					id='team-h1'
					transition={transition}
					// initial={{ opacity: 0, y: 80 }}
					// animate={{ opacity: 1, x: -10, y: 30 }}
				>
					Our team
				</motion.h1>
				<div className='flex-col flex md:flex-row m-auto lg:justify-center'>
					<div className='team md:max-w-1/2 lg:max-w-1/4'>
						<div className='member pl-3'>
							<img src='/images/portrait-Dima.png' alt='' className=''/>
							<div className='ml-8'>
								<h3>Dima Kononenko</h3>
								<h3>Designer, Web Developer</h3>
							</div>
						</div>
					</div>
					<div className='team md:max-w-1/2 lg:max-w-1/4'>
						<div className='member pl-4'>
							<img src='/images/portrait-Alexandra.png' alt='' className=''/>
							<div className='ml-8'>
								<h3>Alexandra Zbarashchuk</h3>
								<h3>Front-End Developer</h3>
							</div>
						</div>
					</div>
				</div>

				<ContactForm />
			</Wrapper>
		</Layout>
	);
};

export default About;

const Wrapper = styled.div`
	@media ${device.mobile} {
		display: flex;
		flex-direction: column;
		z-index: 1;
		/* border: solid black 1px; */

		p {
			font-family: Noah-Regular;
			color: #2b2b2b;
			text-align: left;
			max-width: 1024px;
			padding: 0 45px;
			font-size: 20px;
			line-height: 2rem;
			margin: auto;
			margin-top: 0px;
			/* border: solid red 1px; */
		}
		#barva-tag {
			font-family: Noah-Bold;
			font-size: 226px;
			line-height: 140px;
			color: #f7f7ff;
			z-index: -1;
		}

		#team-h1 {
			z-index: 2;
			text-align: center;
			font-family: Noah-Bold;
			font-size: 35px;
			line-height: 1.03;
			letter-spacing: normal;
			z-index: 3;
			outline: none;
			user-select: none;
			margin-top: 40px;
			margin-bottom: 40px;
		}

		.team {
			max-width: 1024px;
			position: relative;
			margin: auto;
		}

		/* .team img {
			max-width: 45%
		} */

		.member {
			font-family: Noah-Bold;
			font-size: 21px;
			color: #343434;

			h3 {
				margin-bottom: 7px;
			}

			h3:nth-last-of-type(1) {
				font-family: Noah-Regular !important;
				font-size: 21px;
				font-weight: 200;
				margin-top: 0;
			}
		}

		.member img {
			margin-left: auto;
			margin-right: auto;
			width: 100%;
		}
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
		p {
			font-size: 26px;
			line-height: 39px;
		}
	}
`;
