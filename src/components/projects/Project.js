import React, { Component } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { device } from "../../theme/GlobalStyle";

class Project extends Component {
	constructor(props) {
		super(props);

		this.projectImage = React.createRef();
		this.projectInfo = React.createRef();
		this.arrowBack = React.createRef();

		this.state = {
			animationToggle: false,
			closeToggle: false,
			isDesktop: false,
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
		console.log(this.state.isDesktop);
	}

	animateLeftSideOnClick = () => {
		this.setState({ animationToggle: true });
	};

	animationArrowBack = () => {
		this.setState({ closeToggle: true });
		this.setState({ animationToggle: false });
		this.projectInfo.current.setAttribute("animate", "clickArrow");
		this.projectImage.current.setAttribute("animate", "click");
	};

	render() {
		const transition = { ease: "easeOut", duration: 1 };

		const imageVariants = {
			initial: { opacity: 0, scale: 1.3 },
			enter: { opacity: 1, scale: 1 },
			hover: { scale: 1.1 }
		};

		const imageShadowVariants = {
			initial: { opacity: 0, scale: 1.7, x: -430, y: 30 },
			enter: { opacity: 1, scale: 1, x: -430, y: 85 }
		};

		const infoProjectVariants = {
			initial: { opacity: 0, x: 110, y: 35 },
			enter: {
				// opacity: [0, 0, 1],
				// x: -40,
				// y: -200,
				// transition: { delay: 0.7, ...transition }
				opacity: [0, 0, 1],
				x: 140,
				y: 40
			},
			initialMobile: { opacity: 0, x: 0, y: 0 },
			enterMobile: {
				opacity: [0, 0, 1],
				x: 0,
				y: 0,
				transition: { delay: 0.7, ...transition }
			},
			click: {
				width: 490,
				height: 270,
				y: 0,
				x: 290
			},
			hover: { scale: 1.05, transition: { ...transition, duration: 0.3 } },

			clickArrow: {
				width: 300,
				height: 200,
				y: 36,
				x: 130
			},
			hidden: { opacity: 1, scale: 0 }
		};

		const animateProjectHolder = {
			click: { x: -268, zIndex: 3 },
			clickArrow: { x: 0 }
		};

		const arrowBackClick = {
			hover: { scale: 1.05, transition: { ...transition, duration: 0.3 } },
			whileTap: { scale: 0.95 },
			click: {}
		};

		const { link, name, text, pic, direction } = this.props;
		const isDesktop = this.state.isDesktop;

		return (
			<Wrapper data-aos={direction}>
				<motion.div className='ProjectHolder'>
					<motion.div
						id='image-project'
						ref={this.projectImage}
						variants={animateProjectHolder}
						animate={
							this.state.animationToggle
								? "click"
								: this.state.closeToggle
								? "clickArrow"
								: null
						}
					>
						<div id='image-hover'>
							<motion.img
								id='image'
								src={pic}
								transition={transition}
								variants={imageVariants}
								initial='initial'
								animate='enter'
								whileHover='hover'
							/>
						</div>

						<motion.div
							id='footer-info'
							initial={{ bottom: -30 }}
							animate={{ opacity: 1, bottom: 0 }}
							transition={{
								ease: "easeOut",
								duration: 1,
								delay: 2
							}}
						>
							<p>more info</p>
							<motion.img
								id='icon-mobile'
								src='../../../static/images/arrowCircle.svg'
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
						className='InfoProject'
						ref={this.projectInfo}
						variants={infoProjectVariants}
						initial='initial'
						animate={
							this.state.animationToggle
								? "click"
								: this.state.closeToggle
								? "clickArrow"
								: this.state.isDesktop
								? "enter"
								: "enterMobile"
						}
					>
						<div id='relative-wrapper'>
							{/* {isDesktop ? ( */}
								<div>
									<div id='first-part'>
										<div id='topPart'>
											<a href={link} target='_blank'>
												{name}
											</a>
											<a href={link} target='_blank'>
												<img src='../../../static/images/iconLink.svg' alt='' />
											</a>
										</div>
										<p>{text}</p>
										<p id='more-mobile'>more info</p>
										<motion.img
											id='icon-mobile'
											src='../../../static/images/arrowCircle.svg'
										/>
									</div>
									<div id='second-part'>
										{this.state.animationToggle ? (
											<motion.img
												onClick={this.animationArrowBack}
												ref={this.arrowBack}
												src='../../../static/images/arrowCircle.svg'
												variants={arrowBackClick}
												whileHover='hover'
												whileTap='whileTap'
											/>
										) : (
											<p id='more' onClick={this.animateLeftSideOnClick}>
												more info
											</p>
										)}
									</div>
								</div>
							{/* ) : (
							 	<div></div>
							)} */}
						</div>
					</motion.div>
				</motion.div>
				<div>
					{isDesktop ? (
						<div>I show on 1025px or higher</div>
					) : (
						<div>I show on 1024px or lower</div>
					)}
				</div>
			</Wrapper>
		);
	}
}

export default Project;

const Wrapper = styled.div`
	@media ${device.mobile} {
		margin: auto;
		/* width: 1024px; */
		/* height: auto; */
		/* border: solid black; */
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-bottom: 70px;

		.ProjectHolder {
			box-sizing: border-box;
			display: flex;
			/* margin-bottom: 90px; */

			display: flex;
			flex-direction: column;

		}

		#relative-wrapper {
			height: 100%;
			width: 100%;
			position: relative;
		}

		#image-project {
			box-sizing: border-box;
			/* width: 80vw; */
			height: 270px;
			/* max-height: auto; */
			position: relative;
			border-radius: 6px;
			display: flex;
			justify-content: center;			

			border: solid black;
		}
		#image {
			box-sizing: border-box;
			position: relative;
			object-fit: cover;
			/* width: 490px; */
			width: 80vw;
			/* height: 270px; */
			height: auto;
			max-height: 270px;
			border-radius: 6px;
			/* z-index: 3; */
		}
		#image-shadow {
			position: absolute;
			/* width: 222px;
			height: 122px; */
			/* width: 382px; */
			width: 60vw;
			height: 122px;
			bottom: 60px;
			border-radius: 6px;
			left: 480px;
			z-index: 1;
			-webkit-filter: blur(27px);
			filter: blur(27px);
		}
		#image-hover {
			position: absolute;
			overflow: hidden;
			border-radius: 6px;
		}

		#bg img {
			object-fit: cover;
		}

		#previewLogo {
			position: absolute;
			z-index: 4;
		}

		#bg {
			display: flex;
			align-content: flex-end;
			position: absolute;
			width: 490px;
			width: 80vw;
			height: 273px;
			overflow: hidden;
			border-radius: 0 0 6px 6px;
			background-image: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
			box-sizing: border-box;
			z-index: 4;
			pointer-events: none;
		}


		.InfoProject {
			/* position: absolute; */
			z-index: 2;
			/* display: flex; */
			/* width: 284px; */
			width: 70vw;
			max-width: 490px !important;
			/* height: 300px; */
			height: 100%;
			max-height: 300px;
			max-height: 30px;
			border-radius: 0 0 6px 6px;
			box-shadow: 0 16px 29px -12px rgba(0, 0, 0, 0.14);
			background-color: #e5eeff;
			box-sizing: border-box;
			overflow: hidden;
			/* display: inline-block; */
			/* object-fit: contain; */

			#first-part {
				overflow: hidden;
				p:first-of-type {
					display: none;
				}
			}

			#second-part {
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				width: 31px;
			}

			#topPart {
				display: flex;
				flex-direction: row;
				align-items: center;
			}

			#topPart a,
			a:link,
			a:visited {
				border: none;
				text-decoration: none;
				color: #0e0e0e;
			}

			#topPart a:nth-of-type(2) {
				display: flex;
				align-items: center;
				margin-left: 25px;
			}

			#first-part a {
				font-size: 26px;
				font-weight: bold;
			}
			#first-part p:first-of-type {
				/* display: none */
			}

			#second-part img {
				cursor: pointer;
			}

			#icon-mobile {
				height: 14px;
				width: 14px;
				margin-left: 5px;
			}

			#more-mobile {
				position: absolute;
				/* width: 200px; */
				text-align: center;
				margin: 0;
				/* padding: 4px 0; */
				bottom: 10px;
				/* transform: translateX(40px); */
				font-size: 16px;
				font-weight: 300;
				/* background-color: #dde8fe; */
			}

			#footer-info {
				position: absolute;
				height: 30px;
				width: 100%;
				background-color: #dde8fe;
				z-index: 3;
				display: flex;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				cursor: pointer;
				p {
					font-weight: 100;
					font-family: Noah-Regular;
					font-size: 16px;
					color: #2b2b2b;
					text-align: center;
				}
			}

			#more {
				position: absolute;
				left: 2px;
				/* bottom: 0px; */
				/* width: 100%; */
				margin: 0;
				color: #7b7b7b;
				cursor: pointer;
				font-family: Noah-Regular;
				background-color: #dde8fe;
			}
		}
	}

	@media ${device.tablet} {
		.InfoProject {
			height: 100px;
		}
		#image-project {
			width: 490px;
			height: 270px;
		}
		#image {
			width: 490px;
			height: 270px;
		}
		#image-shadow {
			width: 382px;
			height: 210px;
		}
		#more {
			transform: rotate(-90deg);
			width: 101px;
			font-size: 25px;
		}
	}
`;
