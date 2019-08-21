import React, { Component } from "react";
import styled from "styled-components";
import { device, GlobalStyle } from "../theme/GlobalStyle";
import Link from "next/link";
import { motion } from "framer-motion";

class Footer extends Component {
	constructor() {
		super();
	}
	render() {
		return (
			<Wrapper>
				{/* <Background /> */}
				<Wrapper2>
					<Link href='/projects'>
						<motion.a
							className='Link'
							style={{ userSelect: "none", height: "20px" }}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
						>
							Projects
						</motion.a>
					</Link>

					<Link href='/about'>
						<motion.a
							className='Link'
							style={{ userSelect: "none", height: "20px" }}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
						>
							About
						</motion.a>
					</Link>

					<Link href='/contact'>
						<motion.a
							className='Link'
							style={{
								userSelect: "none",
								outline: "none",
								height: "20px",
								margnRight: 0
							}}
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
						>
							Contact
						</motion.a>
					</Link>
				</Wrapper2>

				<Signature>
					<motion.div
						id='signature'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							ease: "easeOut",
							duration: 1
						}}
					>
						<p>with</p>
						<svg
							width='13px'
							height='12px'
							viewBox='0 0 13 12'
							version='1.1'
							xmln='http://www.w3.org/2000/svg'
							xmlnsXlink='http://www.w3.org/1999/xlink'
						>
							<g
								id='Page-1'
								stroke='none'
								strokeWidth='1'
								fill='none'
								fillRule='evenodd'
							>
								<g
									id='Mobile-Home'
									transform='translate(-138.000000, -3035.000000)'
									fill='#9AA0B7'
									fillRule='nonzero'
								>
									<g id='Footer' transform='translate(0.000000, 2818.000000)'>
										<g id='Copyright' transform='translate(78.000000, 214.000000)'>
											<g
												id='Ionicons-md-heart-empty'
												transform='translate(60.628049, 3.000000)'
											>
												<path
													d='M8.64695122,0 C7.60335366,0 6.61996365,0.521875 5.96341463,1.371875 C5.30686562,0.521875 4.32347561,0 3.27987805,0 C1.43064611,0 0,1.56875 0,3.596875 C0,6.08125 2.02698757,8.075 5.0975727,11.15 L5.96341463,12 L6.82925657,11.15 C9.8998417,8.075 11.9268293,6.08125 11.9268293,3.596875 C11.9268293,1.56875 10.4961832,0 8.64695122,0 Z M6.330394,10.290625 L6.20997889,10.4125 L5.96341463,10.65625 L5.71685038,10.4125 L5.59643527,10.290625 C4.15145403,8.84375 2.90143058,7.59375 2.07859404,6.478125 C1.27582669,5.39375 0.920315432,4.50625 0.920315432,3.596875 C0.920315432,2.88125 1.16114564,2.225 1.59980066,1.74375 C2.03558865,1.2625 2.63193011,1 3.27987805,1 C4.0281719,1 4.77073171,1.38125 5.2609932,2.015625 L5.96341463,2.925 L6.66583607,2.015625 C7.15609756,1.378125 7.89865736,1 8.64695122,1 C9.29489916,1 9.89124062,1.2625 10.3298956,1.74375 C10.7685507,2.225 11.0093809,2.884375 11.0093809,3.596875 C11.0093809,4.503125 10.6510026,5.39375 9.85110225,6.478125 C9.02539869,7.59375 7.77824226,8.84375 6.330394,10.290625 Z'
													id='Shape'
												/>
											</g>
										</g>
									</g>
								</g>
							</g>
						</svg>
						<p>by Barva</p>
					</motion.div>
				</Signature>
			</Wrapper>
		);
	}
}

export default Footer;

const Wrapper = styled.div`
	@media ${device.mobile} {
		/* border: solid black 1px; */
		width: 100%;
		background: #E6E6FF;
		font-family: Noah-Bold;
		font-size: 19px;
		text-align: center;
		a:last-of-type {
			margin-right: 0;
		}
	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;

const Wrapper2 = styled.div`
	@media ${device.mobile} {
		padding: 33px 0;
		max-width: 960px;
		border: none;
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		.Link {
			margin-top: 25px;
			user-select: none;
			outline: none;
			:focus {
				outline: none;
			}
		}
	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
	}
	@media ${device.tablet} {
		padding: 41px 0;
		flex-direction: row;
		.Link {
			margin-top: 0;
			margin-right: 30px;
		}
	}
	@media ${device.laptop} {
		flex-direction: row;
	}
`;

const Signature = styled.div`
	@media ${device.mobile} {
		width: 100%;
		padding: 27px 0;
		background: #e6e6ff;
		color: #9aa0b7;
		font-family: Noah-Regular;
		font-size: 16px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		p {
			margin: 0;
		}
		svg {
			margin: 4px;
			/* color: #9AA0B7; */
			fill: red;
		}
		#signature {
			display: flex !important;
		}
	}
	@media ${device.mobileM} {
		padding: 18px 0;
	}
	@media ${device.mobileL} {
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
		flex-direction: row;
	}
`;
