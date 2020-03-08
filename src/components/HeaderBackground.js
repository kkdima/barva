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
		background-image: url("/images/header_bg.svg");
		height: 650px;
        width: 150%;
		transform: translateX(-20%);
        background-size: 100% 100%;
	}
	@media ${device.tablet} {
        width: 100%;
		transform: translateX(0);
		height: 685px;
	}
`;
