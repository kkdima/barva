import Layout from "../src/components/Layout";
import styled from "styled-components";
import { device } from "../src/theme/GlobalStyle";
import React from "react";
import { motion } from "framer-motion";
import HeadlineOvals from "../src/components/projects/HeadlineOvals";

const Projects = () => {
	// const styles = {
	// 	src='../static/images/service2.png',
	// 	initial={ opacity: 0, x: 0, y: 200 },
	// 	animate={ opacity: 1, x: 0, y: 0 },
	// 	transition={ ease: "easeOut", duration: 1 }
	// }

	const transition = { ease: "easeOut", duration: 1 };

	
	const imageVariants = {
		initial: { opacity: 0, scale: 1.3 },
		enter: { opacity: 1, scale: 1 }
	};
	
	const imageShadowVariants = {
		initial: { opacity: 0, scale: 1.7, x: -430, y: 30 },
		enter: { opacity: 1, scale: 1, x: -430, y: 85 }
	};
	
	const infoProjectVariants = {
		initial: { opacity: 0, x: 150, y: 35 },
		enter: {
			opacity: 1,
			x: 140,
			y: 37,
			transition: { delay: 0.7, ...transition }
		},
		hover: { scale: 1.1, transition: { ...transition, duration: 0.3 } }
	};

	return (
		<Layout>
			<HeadlineOvals />

			<Wrapper>
				<div className='ProjectHolder'>

					<div id='image-project'>
						<motion.img
							id='image'
							src='../static/images/service2.png'
							transition={transition}
							variants={imageVariants}
							initial='initial'
							animate='enter'
						/>
						<motion.img
							id='image-shadow'
							src='../static/images/service2.png'
							variants={imageShadowVariants}
							transition={transition}
							initial='initial'
							animate='enter'
						/>
					</div>

					<motion.div
						className='InfoProject'
						variants={infoProjectVariants}
						initial='initial'
						animate='enter'
						whileHover='hover'
					>
						<div>
							<h3>Ever Two Films</h3>
							<p>You want to add aesthetics to your business idea?</p>
						</div>
						<div id='second-part'>
							<h4></h4>
							<p id='more'>more info</p>
						</div>
					</motion.div>
				</div>
			</Wrapper>
		</Layout>
	);
};

export default Projects;

const Wrapper = styled.div`
	@media ${device.mobile} {
		margin: auto;
		width: 1024px;
		/* border: solid red; */
		/* position: relative;
		display: flex;
		justify-content: center;
		padding-bottom: 700px; */
		#image-project {
			/* border: solid red; */
		}
		#image {
			position: relative;
			/* border: solid yellow; */
			object-fit: cover;
			height: auto;
			width: 100%;
			border-radius: 6px;
			/* width: 489px; */
			height: 273px;
			z-index: 3;
		}
		#image-shadow {
			position: absolute;
			width: 382px;
			height: 210px;
			border-radius: 6px;
			z-index: 2;
			-webkit-filter: blur(27px);
			filter: blur(27px);
		}
	}

	.ProjectHolder {
		display: flex;
		justify-content: center;
	}

	.InfoProject {
		position: absolute;
		z-index: 2;
		display: flex;
		justify-content: flex-end;
		width: 284px;
		height: 189px;
		border-radius: 6px;
		box-shadow: 0 16px 29px -12px rgba(0, 0, 0, 0.14);
		background-color: #e5eeff;

		#second-part {
			/* border: solid red; */
			position: relative;
			min-width: 40px;	
		}

		#more {
			position: absolute;
			left: -32px;
			top: 55px;
			font-family: Noah-Regular;
			width: 101px;
			height: 31px;
			transform: rotate(-90deg);
			font-size: 25px;
			color: #7b7b7b;
	}
`;
