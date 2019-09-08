import React, { Component } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../../theme/GlobalStyle";

class ProjectTest extends Component {
	constructor(props) {
		super(props);

		this.projectImage = React.createRef();
		this.projectInfo = React.createRef();
		this.arrowBack = React.createRef();

		this.showInfoIcon = React.createRef();
		this.showInfo = React.createRef();

		this.moreInfo = React.createRef();
		this.content = React.createRef();
		this.paragraph = React.createRef();
		this.info = React.createRef();
		this.image = React.createRef();
		this.wrapper = React.createRef();

		this.state = {
			animationToggle: false,
			closeToggle: false,
			isDesktop: false,
			moreInfoOpened: false,
			width: 0,
			height: 0
		};

		this.updatePredicate = this.updatePredicate.bind(this);
	}

	componentDidMount() {
		this.updatePredicate();
		window.addEventListener("resize", this.updatePredicate);
	}

	componentWillUnmount() {
		window.removeEventListener("resize", this.updatePredicate);
	}

	updatePredicate() {
		this.setState({
			isDesktop: window.innerWidth >= 1024,
			width: window.innerWidth,
			height: window.innerHeight
		});
		this.info.current.style.flexDirection = this.state.isDesktop
			? "row"
			: "column";
		this.moreInfo.current.style.flexDirection = this.state.isDesktop
			? "column"
			: "row";
	}

	showMoreInfo = () => {
		this.setState({ moreInfoOpened: !this.state.moreInfoOpened });
		this.paragraph.current.style.height = this.state.moreInfoOpened
			? "0px"
			: "auto";
		window.innerWidth >= 1024
			? null
			: (this.wrapper.current.style.marginBottom = this.state.moreInfoOpened
					? "50px"
					: this.info.current.clientHeight + "px");
	};

	render() {
		const { link, name, text, pic, direction } = this.props;

		const isDesktop = this.state.isDesktop;
		const moreInfoOpened = this.state.moreInfoOpened;

		const transition = { ease: "easeOut", duration: 1 };

		const imageVariantsMobile = {
			initial: { opacity: 0, scale: 1.3 },
			enter: {
				opacity: 1,
				scale: 1,
				bottom: 0,
				top: 0,
				style: { margin: "auto" }
				// x: 0
			},
			// click: { x: -267 },
			hover: { scale: 1.1 }
		};

		const imageVariantsDesktop = {
			initial: { opacity: 0, scale: 1.3 },
			enter: {
				opacity: 1,
				scale: 1,
				bottom: 0,
				top: 0,
				style: { margin: "auto" },
				x: 0,
				style: {zIndex: 2}
			},
			click: { x: -247, style: {zIndex: 2}  },
			hover: { scale: 1.1 },
		};

		const imageHolder = {
			initial: { scale: 1.3 },
			enter: {  scale: 1 },
			hover: { scale: 1.1 },
			animate: { x: 100 },
			click: {  }
		};

		const imageShadowVariants = {
			transition: {delay: 1},
			initial: { opacity: 0, scale: 0.8, top: 94, left: 0, right: 0, style:{margin: 'auto'} },
			enter: { opacity: 0.8, scale: 1, }
		};

		const content = {
			initial: {
				opacity: 0,
				scale: 0,
				left: 0,
				right: 0,
				style: { margin: "auto" }
			},
			enterContent: { opacity: 1, scale: 1 }
		};

		const infoVariantsMobile = {
			initial: {
				scale: 0,
				y: -30
			},
			enter: {
				scale: 1,
				y: 0
			},
			click: { y: 81 }
		};

		const infoVariantsDesktop = {
			initial: {x: -40},
			enter: {
				height: 200,
				x: 0,
			},
			click: {
				height: 270,
				x: 235,
			}
		};

		return (
			<Wrapper ref={this.wrapper}>
				<motion.div
					id='image-wrapper'
					variants={isDesktop ? imageVariantsDesktop : imageVariantsMobile}
					animate={moreInfoOpened ? "click" : "enter"}
				>
					<motion.div id='image-holder'>
						<motion.img
							id='image'
							ref={this.image}
							src={pic}
							transition={transition}
							variants={imageHolder}
							initial='initial'
							// animate= 'enter'
							whileHover='hover'
						/>
					</motion.div>
					<motion.img
						id='image-shadow'
						src={pic}
						variants={imageShadowVariants}
						transition={transition}
						initial='initial'
						animate='enter'
					/>
				</motion.div>


				<motion.div
					id='info'
					ref={this.info}
					variants={isDesktop ? infoVariantsDesktop : infoVariantsMobile}
					initial='initial'
					animate={moreInfoOpened ? "click" : "enter"}
				>
					<motion.div
						id='content'
						ref={this.content}
						variants={content}
						initial='initial'
						animate='enterContent'
					>
						<div id='topPart'>
							<a href={link} target='_blank'>
								{name}
							</a>
							<a href={link} target='_blank'>
								<img src='../../../static/images/iconLink.svg' alt='' />
							</a>
						</div>
						<p ref={this.paragraph}>{text}</p>
					</motion.div>

					<div id='moreInfo' ref={this.moreInfo} onClick={this.showMoreInfo}>
						{moreInfoOpened ? <p>close</p> : <p>more info</p>}
						<motion.img
							ref={this.arrowBack}
							variants='infoVariants'
							animation='enter'
							id='icon-mobile'
							src='../../../static/images/arrowCircle.svg'
						/>
					</div>
				</motion.div>
			</Wrapper>
		);
	}
}

export default ProjectTest;

const Wrapper = styled.div`
	@media ${device.mobile} {
		margin: auto;
		padding: 20px;
		margin-bottom: 50px;
		box-sizing: border-box;
		z-index: 2;
		position: relative;
		/* border: solid green 1px; */

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
			z-index: 3;
			box-shadow: 0 10px 29px -7px rgba(0,0,0,0.50);
		}

		#image {
			display: flex;
			width: 100%;
			max-width: 490px;
			height: auto;
			box-sizing: border-box;
			object-fit: fill;
			z-index: 3;
		}

		#image-wrapper {

		}
		#image-shadow {
			position: absolute;
			width: 80%;
			height: 70%;
			left: 0;
			right: 0;
			margin: auto; 
			border-radius: 6px;
			z-index: 1;
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
			position: absolute;
			box-sizing: border-box;
			border-radius: 0 0 6px 6px;
			width: 80%;
			height: auto;
			box-shadow: 0 16px 29px -12px rgba(0,0,0,0.14);

			left: 0;
			right: 0px;
			margin: auto;

			top: calc(100% - 110px);
			z-index: 2;

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
			flex-direction: row !important;
			border-radius: 6px;

			position: absolute;

			bottom: 0;
			top: 0;
			left: 118px;
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
