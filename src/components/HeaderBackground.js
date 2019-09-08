import React, { useState, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { device, GlobalStyle } from "../theme/GlobalStyle";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const HeaderBackground = () => {
	return (
        <Wrapper />
    )
};

export default HeaderBackground;

const Wrapper = styled.div`
	@media ${device.mobile} {
        box-sizing: border-box;
		display: flex;
		position: absolute;
		/* z-index: 1; */
		background-image: url("../../static/images/header_bg.svg");
		height: 450px;
        width: 140vw;
        background-size: 100% 100%;
		/* background-size: cover; */
	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
	}
	@media ${device.tablet} {
		height: 685px;
        width: 100vw;
	}
	@media ${device.laptop} {
	}
`;
