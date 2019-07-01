import React, { Component } from "react";
import styled from "styled-components";

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
    position: fixed;
    margin: 0;
    padding: 0;
    z-index: 1;
	width: 68px;
	max-height: 68px;
	border-radius: 6px;
	margin: 40px 40px;

	animation: gifs 15s infinite running;
	animation-fill-mode: forwards;
	@keyframes gifs {
		0% {
			background: url("../../static/images/tumblr_nkpufdntMX1s4fz4bo1_500.gif")
				center;
		}
		33% {
			background: url("../../static/images/tumblr_ps7mlaKo671tjki5do1_500.gif")
				center;
		}
		100% {
			background: url("../../static/images/tumblrork9tud06F1ws7znjo1500.gif")
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
`;