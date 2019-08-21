import React, { Component } from "react";
import styled from "styled-components";
import { device } from "../theme/GlobalStyle";

const Logo = () => (
	<LogoWrapper>
		<div>
			<p>B</p>
			<p>A</p>
		</div>
		<div>
			<p>R</p>
			<p>V</p>
		</div>
        <p id="at">@</p>
	</LogoWrapper>
);
export default Logo;

const LogoWrapper = styled.div`
    margin: 0;
    padding: 0;
    z-index: 1;
	width: 68px;
	height: 68px;
	border-radius: 6px;
	border: 2px solid white;

	animation: gifs -3s infinite running forwards;
	-webkit-animation: gifs -3s infinite running forwards;
	
	@keyframes gifs {
		0% {
			background: url("../../static/images/bg-animation.gif")
				center contain no-repeat;
		}
		33% {
			background: url("../../static/images/bg-animation.gif")
				center;
		}
		100% {
			background: url("../../static/images/bg-animation.gif")            
				center;
		}
	}

	div {
		display: flex;
		justify-content: space-around;
        max-width: 60px;
        max-height: 68px;
        padding-top: 5px;
        padding-left: 4px;
        margin: 0;
	}

	div p {
		font-size: 22px;
		color: white;
		font-weight: bold;
		margin: 0;
        user-select: none;
	}

    #at {
        color: white;
        font-size: 20px;
        position: relative;
        left: 63px;
        bottom: 26px;
        user-select: none;
        margin: 0;
    }

	@media ${device.mobile} {
		margin-left: 25px;
		margin-top: 25px;
	}
	@media ${device.tablet} {
		margin: 40px 40px 0;
	}
	@media ${device.laptop} {
		margin-left: 0;
	}
`;