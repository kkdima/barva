import React, { Component } from "react";
import styled from "styled-components";
import { device, GlobalStyle } from "../theme/GlobalStyle";
import { motion } from "framer-motion";
import TextareaAutosize from "react-autosize-textarea";

import { planeAnimation } from "../theme/KeyFrames";
import { planeAnimationOnClick } from "../theme/KeyFrames";

class ContactForm extends Component {
	constructor(props) {
		super(props);

		this.svgRef = React.createRef();
		this.button = React.createRef();

		this.state = {
			isClicked: false
		};
	}

	//Animation for plane icon. Rotation.

	//changing the class on click
	planeAnimation = () => {
		const plane = this.svgRef.current;
	};

	//eventListener on the button
	componentDidMount = () => {
		const button = this.button.current;
		button.addEventListener("click", () => button.classList.toggle("toggled"));
	};

	render() {
		const isClicked = this.state.isClicked;
		return (
			<Wrapper>
				<Form>
					<Input
						name="name"
						type="text"
						placeholder="Name"
						// onChange={e => this.setState({})}
					/>
					<Input
						name="email"
						type="text"
						placeholder="E-mail"
						// onChange={e => this.setState({})}
					/>
					<StyledTextarea
						id="textarea"
						name="message"
						type="text"
						placeholder="Briefly describe the idea you want to bring to life"
						// onChange={e => this.setState({})}
						rows={3}
					/>
					<Button
						// onMouseEnter={this.planeAnimation}
						// onMouseLeave={this.planeAnimationOut}
						ref={this.button}
						onClick={() => this.setState({ isClicked: true })}
						className={isClicked ? "animateOnClick" : "static"}
					>
						<svg id="Plane" ref={this.svgRef}>
							<use href="#paperPlane" />
						</svg>
						{/* {isClicked ? "Hyit" : "Submit"} */}
						{isClicked ? <motion.div
							className="container"
							initial={{ y:-20, opacity: 0 }}
							animate={{ y:0, opacity: 1 }}
							transition={{
							type: "spring",
							stiffness: 260,
							damping: 20
							}}>Sent</motion.div> : <div>Submit</div>}
					</Button>
				</Form>
				<svg
					width="16px"
					height="16px"
					viewBox="0 0 16 16"
					version="1.1"
					xmlns="http://www.w3.org/2000/svg"
					xmlnsXlink="http://www.w3.org/1999/xlink"
				>
					<defs>
						<linearGradient
							x1="19.6347313%"
							y1="64.7080107%"
							x2="100%"
							y2="0%"
							id="linearGradient-1"
						>
							<stop stopColor="#F9885E" offset="0%" />
							<stop stopColor="#FF7B4A" offset="100%" />
						</linearGradient>
					</defs>
					<symbol id="paperPlane">
						<g
							id="Page-1"
							stroke="none"
							strokeWidth="1"
							fill="none"
							fillRule="evenodd"
						>
							<g
								id="Tablet-Home"
								transform="translate(-349.000000, -2534.000000)"
								fill="url(#linearGradient-1)"
								fillRule="nonzero"
							>
								<g id="contact-us" transform="translate(1.000000, 2176.000000)">
									<path
										d="M363.495711,358.035834 L348.19853,364.703837 C347.927672,364.83303 347.936006,365.220608 348.211031,365.341465 L352.348895,367.679434 C352.59475,367.816962 352.898944,367.787789 353.111463,367.604419 L361.270515,360.569675 C361.324687,360.523833 361.453865,360.436315 361.503869,360.486325 C361.55804,360.540503 361.4747,360.665528 361.428862,360.719705 L354.369907,368.6713 C354.174056,368.892177 354.144887,369.217242 354.303234,369.467293 L357.007639,373.805663 C357.140984,374.068215 357.520185,374.064048 357.641029,373.797328 L363.966586,358.498426 C364.104098,358.198366 363.791571,357.894139 363.495711,358.035834 Z"
										id="Path"
									/>
								</g>
							</g>
						</g>
					</symbol>
				</svg>
			</Wrapper>
		);
	}
}

export default ContactForm;

const Wrapper = styled.div`
	@media ${device.mobile} {
		padding-top: 43px;
		height: 320px;
		width: 100%;
		background-color: #f5f5ff;
	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
	}
	@media ${device.laptop} {
	}

	textarea:disabled::placeholder {
		-webkit-text-fill-color-placeholder: #ffffff;
		opacity: 1;
	}
`;

const Button = styled.button`

	@media ${device.mobile} {
		/* :active {
			transition: all 700ms;
			padding-left: 7px;
			text-align: left;
			#Plane {
				animation: ${planeAnimationOnClick} 600ms ease-in;
				animation-fill-mode: forwards;
			}
		} */


		/* #Plane {
			width: 16px;
			height: 16px;
			margin: 0px 4px 0 0px;
			transition: all 400ms;
		} */
/* 
		.animationOnclick {
			transform: scale(1.09);
			transition: all 400ms;
			:active {
			text-align: left;
			#Plane {
				animation: ${planeAnimationOnClick} 600ms ease-in;
				animation-fill-mode: forwards;
			}
		} */

	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
	}
	@media ${device.laptop} {
	}
`;

const StyledTextarea = styled(TextareaAutosize)`
	all: unset;
	font-family: Noah-Regular;
	background-image: linear-gradient(-97deg, #8cadff 0%, #b6ddfd 67%);
	box-shadow: 0 17px 10px -13px rgba(200, 199, 223, 0.45);
	border-radius: 6px;
	padding: 10px;
	padding-top: 10px;
	margin-bottom: 22px;
	height: 78px;

	::-webkit-input-placeholder {
		-webkit-text-fill-color: #fff;
		opacity: 1; /* required on iOS */
	}
`;

const Input = styled.input`
	all: unset;
	::-webkit-input-placeholder {
		/* -webkit-text-fill-color: #868686; */
		-webkit-text-fill-color: #fff;
		opacity: 1; /* required on iOS */
	}

	@media ${device.mobile} {
		font-family: Noah-Regular;
		-webkit-appearance: none;
		background-image: linear-gradient(-97deg, #8cadff 0%, #b6ddfd 67%);
		box-shadow: 0 17px 10px -13px rgba(200, 199, 223, 0.45);
		border-radius: 6px;
		height: 32px;
		margin-bottom: 22px;
		padding-left: 10px;
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;

const Form = styled.div`
	all: unset;
	@media ${device.mobile} {
		display: flex;
		flex-direction: column;
		width: 289px;
		margin: auto;
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;
