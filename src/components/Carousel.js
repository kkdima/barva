import React, { useState, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { device, GlobalStyle } from "../theme/GlobalStyle";
import { motion } from "framer-motion";
import Flicking from "@egjs/react-flicking";

import Image1 from "../../static/images/service2.png";
// import Image2 from "./service2";

// import service from '/static/images/service'

// import {
// 	CarouselProvider,
// 	Slider,
// 	Slide,
// 	ButtonBack,
// 	ButtonNext
// } from "pure-react-carousel";

function getProjectsInfo() {
	return [
		{
			id: 1,
			pic: `../../static/images/service.png`
		},
		{
			id: 2,
			pic: `../../static/images/service2.png`
		},
		{
			id: 3,
			pic: `../../static/images/service.png`
		},
		{
			id: 3,
			pic: `../../static/images/service2.png`
		}
	];
}

const Card = props => (
	<Wrapper>
		<ImgHolder draggable="false" src={props.pic} alt='' />
		<BgText />
		<Button>more info</Button>
		<ImgHolderShadow src={props.pic} alt='' />
	</Wrapper>
);

const Carousel = () => (
	<Flicking
		horizontal={true}
		circular={true}
		threshold={40}
		duration={100}
		inputType={["touch", "mouse"]}
		autoResize={true}
		adaptive={true}
		gap={40}
		hanger={"50%"}
		anchor={"50%"}
		moveType={{ type: "snap", count: 1 }}
		collectStatistics={false}
	>
		{getProjectsInfo().map(project => (
			<Card pic={project.pic} number={project.id} key={project.id} />
		))}
	</Flicking>
);

export default Carousel;

const Wrapper = styled.div`
	all: unset;
	@media ${device.mobile} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		position: relative;
		padding-bottom: 60px;
		justify-content: center;
		margin-bottom: 40px;
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

const ImgHolder = styled.img`
	@media ${device.mobile} {
		height: 169px;
		width: 296px;
		z-index: 2;
		border-radius: 6px;
		background-image: url("../../static/images/service.png");
		background-repeat: no-repeat;
		background-size: 100%;
		overflow: hidden;

		/* border : solid black 1px; */
	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
	}
	@media ${device.laptop} {
	}
`;

const ImgHolderShadow = styled.img`
	@media ${device.mobile} {
		width: 255px;
		height: 144px;
		left: 29px;
		bottom: 55px;
		margin: auto;
		background-image: url("../../static/images/service.png");
		border-radius: 6px;
		position: absolute;
		z-index: 1;
		filter: blur(27px);
		user-select: none;
	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
	}
	@media ${device.laptop} {
	}
`;

const BgText = styled.div`
	@media ${device.mobile} {
		position: absolute;
		z-index: 2;
		bottom: 60px;
		height: 97px;
		opacity: 0.6;
		background-image: linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 100%);
		border-bottom-right-radius: 6px;
		border-bottom-left-radius: 6px;
	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
	}
	@media ${device.laptop} {
	}
`;

const Button = styled.button`
	@media ${device.mobile} {
		position: absolute;
		z-index: 2;
		border: 1px solid white;
		background: none;
		font-size: 15px;
		border-radius: 6px;
		color: #f4f4f4;
		padding: 0 15px;
		text-align: center;
		font-family: Noah-Regular;
		/* bottom: 105px; */
		left: 105px;
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
