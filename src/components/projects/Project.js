import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { device } from '../../theme/GlobalStyle';
import {
	imageVariantsMobile,
	imageVariantsDesktop,
	imageHolder,
	imageShadowVariants,
	content,
	infoVariantsMobile,
	infoVariantsDesktop,
	transition
} from '../../../public/styles/framer_animation/animations.js';

const Project = props => {
	const [animationToggle, setAnimationToggle] = useState(false);
	const [closeToggle, setCloseToggle] = useState(false);
	const [isDesktop, setIsDesktop] = useState(false);
	const [moreInfoOpened, setMoreInfoOpened] = useState(false);
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	const projectImage = useRef(null);
	const projectInfo = useRef(null);
	const arrowBack = useRef(null);
	const showInfo = useRef(null);
	const moreInfo = useRef(null);
	const content = useRef(null);
	const paragraph = useRef(null);
	const info = useRef(null);
	const image = useRef(null);
	const wrapper = useRef(null);

	const updatePredicate = () => {
		setIsDesktop(window.innerWidth >= 1024);
		setWidth(window.innerWidth);
		setHeight(window.innerHeight);

		info.current.style.flexDirection = isDesktop ? 'row' : 'column';

		moreInfo.current.style.flexDirection = isDesktop ? 'column' : 'row';
	};

	useEffect(() => {
		updatePredicate();
		window.addEventListener('resize', updatePredicate());
		return () => {
			window.removeEventListener('resize', updatePredicate());
		};
	});

	const showMoreInfo = () => {
		setMoreInfoOpened(!moreInfoOpened);
		paragraph.current.style.height = moreInfoOpened ? '0px' : 'auto';
		window.innerWidth >= 1024
			? null
			: (wrapper.current.style.marginBottom = moreInfoOpened
					? null
					: info.current.clientHeight - 50% + 'px');
	};

	const { link, name, text, pic, direction } = props;

	return (
		<Wrapper ref={wrapper} data-aos={direction}>
			<motion.div
				id='image-wrapper'
				variants={isDesktop ? imageVariantsDesktop : imageVariantsMobile}
				animate={moreInfoOpened ? 'click' : 'enter'}
				className='z-20'
			>
				<motion.div id='image-holder' className='z-30'>
					<motion.img
						id='image'
						ref={image}
						src={pic}
						className='z-30'
						transition={transition}
						variants={imageHolder}
						initial='initial'
						// animate= 'enter'
						whileHover='hover'
					/>
				</motion.div>
				<motion.img
					id='image-shadow'
					className='z-20 h-64'
					src={pic}
					variants={imageShadowVariants}
					transition={transition}
					initial='initial'
					animate='enter'
				/>
			</motion.div>

			<motion.div
				id='info'
				ref={info}
				variants={isDesktop ? infoVariantsDesktop : infoVariantsMobile}
				initial='initial'
				animate={moreInfoOpened ? 'click' : 'enter'}
				className='flex justify-between z-0'
			>
				<motion.div
					id='content'
					ref={content}
					variants={content}
					initial='initial'
					animate='enterContent'
				>
					<div id='topPart' className='flex mb-8'>
						<a href={link} target='_blank'>
							{name}
						</a>
						<a href={link} target='_blank'>
							<img src='/images/iconLink.svg' className='w-8' alt='' />
						</a>
					</div>
					<p className='mb-4' ref={paragraph}>
						{text}
					</p>
				</motion.div>

				<div id='moreInfo' ref={moreInfo} onClick={showMoreInfo}>
					{moreInfoOpened ? <p>close</p> : <p>more info</p>}
					<motion.img
						ref={arrowBack}
						variants='infoVariantsMobile'
						animation='arrowEnter'
						id='icon-mobile'
						src='/images/arrowCircle.svg'
					/>
				</div>
			</motion.div>
		</Wrapper>
	);
};

export default Project;

const Wrapper = styled.div`
	@media ${device.mobile} {
		margin: auto;
		padding: 20px;
		margin-bottom: 50px;
		box-sizing: border-box;
		position: relative;

		#image-holder {
			position: relative;
			width: 100%;
			height: auto;
			display: flex;
			justify-content: center;
			box-sizing: border-box;
			overflow: hidden;
			margin: 0;
			padding: 0;
			border-radius: 6px;
			box-shadow: 0 10px 29px -7px rgba(0, 0, 0, 0.5);
		}

		#image {
			display: flex;
			width: 100%;
			max-width: 490px;
			height: 100%;
			box-sizing: border-box;
			object-fit: fill;
		}

		#image-wrapper {
		}

		#image-shadow {
			position: absolute;
			width: 80%;
			/* height: 70%; */
			left: 0;
			right: 0;
			margin: auto;
			border-radius: 6px;
			-webkit-filter: blur(27px);
			filter: blur(27px);
		}

		#topPart a,
		a:link,
		a:visited {
			border: none;
			text-decoration: none;
			color: #0e0e0e;
		}

		#footer-info {
			margin: auto;
			box-sizing: border-box;
			position: relative;
			min-height: 30px;
			height: auto;
			width: 90%;
			background-color: #dde8fe;
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			border-radius: 0 0 6px 6px;

			cursor: pointer;
			p {
				font-weight: 100;
				font-family: Noah-Regular;
				font-size: 16px;
				color: #2b2b2b;
				text-align: center;
				margin: 0;
				padding: 0;
			}
		}

		#icon-mobile {
			height: 14px;
			width: 14px;
			margin-left: 5px;
			fill: #2b2b2b;
		}

		#topPart {
			padding-top: 29px;
			padding-left: 30px;
			a:first-of-type {
				font-family: Noah-Bold;
				font-size: 26px;
				color: #0e0e0e;
			}
			img:last-child {
				padding-left: 10px;
				width: 16px;
			}
		}

		#info {
			display: flex;
			flex-direction: column;
			box-sizing: border-box;
			border-radius: 0 0 6px 6px;
			width: 80%;
			height: auto;
			box-shadow: 0 16px 29px -12px rgba(0, 0, 0, 0.14);
			left: 0;
			right: 0px;
			margin: auto;
			/* top: calc(100% - 110px); */
			max-width: 490px;
			background-color: #e5eeff;
		}

		p {
			padding: 0 20px 0 30px;
			line-height: 1.4rem;
			overflow: hidden;
			height: 0px;
		}

		#moreInfo {
			-webkit-tap-highlight-color: transparent;
			-webkit-touch-callout: none;
			-webkit-user-select: none;
			cursor: pointer;
			user-select: none;
			font-weight: 100;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;
			background-color: #dde8fe;
			padding: 5px 0;
			border-radius: 0 0 6px 6px;
		}
		#moreInfo p {
			overflow: visible;
			padding: 0;
			margin: 0;
			height: auto;
		}
	}

	@media ${device.laptop} {
		#info {
			position: absolute;
			bottom: -200px;
			left: 118px;
			flex-direction: row !important;
			border-radius: 6px;
			margin: auto;
			height: 50%;
		}

		#moreInfo {
			border-radius: 0 6px 6px 0;
			width: 32px !important;
			display: flex;
			flex-direction: column !important;
		}
		#moreInfo img {
			order: -1;
			padding-bottom: 7px;
			margin-left: 0;
		}
		#moreInfo p {
			transform: rotate(180deg);
			text-orientation: mixed;
			writing-mode: vertical-rl;
			line-height: 32px;
		}
	}
`;
