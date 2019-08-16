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
			closeToggle: false
		};
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
				opacity: [0, 0, 1],
				x: 140,
				y: 37,
				transition: { delay: 0.7, ...transition }
			},
			click: {
				width: 490,
				height: 270,
				y: 0,
				x: 293
			},
			hover: { scale: 1.05, transition: { ...transition, duration: 0.3 } },

			clickArrow: {
				width: 300,
				height: 200,
				y: 36,
				x: 130
			},
			// whileTap: { scale: 1 },
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

		const projectHover = {
			initial: { opacity: 0, y: 200 },
			enter: { opacity: 1, x: -150, y: -100, scale: 0.2 },

			initialBg: { opacity: 0, y: 200 },
			enterBg: { opacity: 0.8, y: 0 }
		};

		return (
			<Wrapper>
				<div className='ProjectHolder'>
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
                                src={this.props.pic}
                                transition={transition}
                                variants={imageVariants}
                                initial='initial'
                                animate='enter'
                                whileHover='hover'
                            />
                        </div>
						<motion.img
							id='image-shadow'
							src={this.props.pic}
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
								: "enter"
						}
					>
						<div id='first-part'>
							<div id='topPart'>
								<a href='https://www.evertwofilms.com' target="_blank">Ever Two Films</a>
								<a href='https://www.evertwofilms.com' target="_blank" >
									<img src='../../../static/images/iconLink.svg' alt='' />
								</a>
							</div>
							<p>
								You want to add aesthetics to your business idea? We can help you set a
								360ᵒ branding identity and copywriting tone of voice.
							</p>
						</div>
						<div id='second-part'>
							{this.state.animationToggle ? (
								<motion.img
									onClick={this.animationArrowBack}
									ref={this.arrowBack}
									src='../../../static/images/arrowCircle.svg'
									// transition={transition}
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
					</motion.div>
				</div>
			</Wrapper>
		);
	}
}

export default Project;

const Wrapper = styled.div`
	@media ${device.mobile} {
		margin: auto;
		width: 1024px;



		#image-project {
			box-sizing: border-box;
			width: 490px;
			height: 273px;
            position: relative;
			border-radius: 6px;
		}
		#image {
			box-sizing: border-box;
			position: relative;
			object-fit: cover;
			height: auto;
			width: 490px;
			height: 273px;
			border-radius: 6px;
			z-index: 3;
		}
		#image-shadow {
			position: absolute;
			width: 382px;
			height: 210px;
			border-radius: 6px;
            left: 480px;
			z-index: 2;
			-webkit-filter: blur(27px);
			filter: blur(27px);
		}
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
		height: 273px;
		overflow: hidden;
		border-radius: 0 0 6px 6px;
		background-image: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
		box-sizing: border-box;
		z-index: 4;
		pointer-events: none;
		/* display: none; */
	}

	.ProjectHolder {
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		margin-bottom: 90px;
	}

	.InfoProject {
		position: absolute;
		z-index: 2;
		display: flex;
		justify-content: space-between;
		width: 284px;
		max-width: 490px !important;
		height: 189px;
		border-radius: 6px;
		box-shadow: 0 16px 29px -12px rgba(0, 0, 0, 0.14);
		background-color: #e5eeff;
		padding: 0px 45px;
		box-sizing: border-box;
		overflow: hidden;

		#topPart {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-top: 31px;
		}

        #topPart a, a:link, a:visited {
            border: none;
            text-decoration: none;
            color: #0E0E0E;
        }

		#topPart img {
		}

		#topPart a:nth-of-type(1) {
			/* border: solid red; */
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

		#second-part img {
			cursor: pointer;
		}

		#second-part {
			position: relative;
			display: flex;
			justify-content: center;
			align-items: flex-start;
			padding-top: 27px;
		}

		#more {
			position: absolute;
			left: -22px;
			top: 5px;
			margin-top: 75px;
			font-family: Noah-Regular;
			width: 101px;
			height: 31px;
			transform: rotate(-90deg);
			font-size: 25px;
			color: #7b7b7b;
			cursor: pointer;
		}
	}
`;
