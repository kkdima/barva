import React, { useState, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { device, GlobalStyle } from "../theme/GlobalStyle";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const HeaderBackground = () => {
    return (
        <Wrapper>
            
        </Wrapper>
    )
};

export default HeaderBackground;

const Wrapper = styled.div`
	@media ${device.mobile} {
		display: flex;
        border: solid black 1px;
	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
	}
	@media ${device.laptop} {
	}
`;