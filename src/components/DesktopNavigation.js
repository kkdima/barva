import styled from "styled-components";
import { device } from "../theme/GlobalStyle";
import React, { Component } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

class DesktopNavigation extends Component {
	constructor() {
		super();
	}
	render() {
        const container = {
            hidden: { opacity: 1, scale: 0 },
            visible: { opacity: 1, scale: 1},
            whileHover: { scale: 1.1, opacity: 1 },
            whileTap: { scale: 0.9, x: "-5px", y: "5px" },
            visible: {
              opacity: 1,
              scale: 1,
              transition: {
                delay: 0.3,
                when: "beforeChildren",
                staggerChildren: 0.1
              }
            }
        };

		return (
			<Wrapper>
				<Link href="/">
					<motion.div
						style={{ userSelect: "none", height: '20px' }}
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                        >
						<a className="Link">
                            Home
                        </a>
					</motion.div>
                </Link>
                <div>
                    {/* <motion.div
                            variants={container}
                            initial="hidden"
                            animate="visible"
                    >
                        <svg id='circleProjects'width="101px" height="51px" viewBox="0 0 101 51" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnSXlink="http://www.w3.org/1999/xlink">
                            <defs>
                                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                                    <stop stop-color="#CAD3FF" offset="0%"></stop>
                                    <stop stop-color="#E5EEFF" offset="100%"></stop>
                                </linearGradient>
                            </defs>
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Tablet-Home" transform="translate(-448.000000, -30.000000)" fill="url(#linearGradient-1)">
                                    <path d="M529.942354,75.6348824 C544.672082,67.3113126 560.017128,48.9728015 537.907894,41.8690904 C509.771871,32.8289683 484.603444,30 472.235949,30 C437.469509,30 446.652084,56.5308431 459.58984,65.8162874 C484.867994,83.9584523 515.212627,83.9584523 529.942354,75.6348824 Z" id="Oval"></path>
                                </g>
                            </g>
                        </svg>
                    </motion.div> */}
                </div>
                    <Link href="/projects">
                        <motion.a
                            className="Link"
                            style={{ userSelect: "none", height: '20px' }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                        >
                            Projects
                        </motion.a>
                    </Link>

                    <Link href="/about">
                        <motion.a
                            className="Link"
                            style={{ userSelect: "none", height: '20px' }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                        >
                            About
                        </motion.a>
                    </Link>

                    <Link href="/contact">
                        <motion.a
                            className="Link"
                            style={{ userSelect: "none", height: '20px' }}                        
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}
                        >
                            Contact
                        </motion.a>
                    </Link>
			</Wrapper>
		);
	}
}

export default DesktopNavigation;

const Wrapper = styled.div`
	@media ${device.mobile} {
		display: none;
        position: relative;
	}
	@media ${device.tablet} {
        margin: 40px 40px 0 0;
		padding: 0;
		display: flex;
        /* flex-direction: column; */
		align-content: flex-end;

        #circleProjects {
            position: absolute;
            /* transform: translateY(-50%); */
            /* z-index: -1; */
            /* left: 115px; */
            /* bottom: 40px; */
            
            /* bottom: 15px; */

        }



		.Link {
			user-select: none;
			margin: 0px;
			font-family: Noah-Bold;
			cursor: pointer;
			text-decoration: none;
            user-select: none;
			outline:none;
			font-size: 19px;
			margin-left: 35px;
            :focus {
                outline: none;
            }
		}
	}
	@media ${device.laptop} {
	}
`;

const A = styled.a``;
