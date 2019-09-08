import React, { useState, useRef, useLayoutEffect } from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import styled from "styled-components";
import { device } from "../src/theme/GlobalStyle";
import Layout from "../src/components/Layout.js";

import TitleAndCirclesAbout from "../src/components/contact/TitleAndCirclesContact";
import ContactForm from "../src/components/ContactForm";

const Contact = () => (
	<Layout>
		<Wrapper>
			<TitleAndCirclesAbout />
			<div id='info-wrapper'>
				<div id='info'>
					<h4>Email</h4>
					<p>hello@barva-design.com</p>
					<h4>Telephone</h4>
					<p>+1 213-332-83-98</p>
				</div>
				<div id='map'>
					<img
						src='../static/images/Screen Shot 2019-08-24 at 11.45.08 AM.png'
						alt='map image'
					/>
				</div>
			</div>
			<ContactForm />
		</Wrapper>
	</Layout>
);

export default Contact;

const Wrapper = styled.div`
	@media ${device.mobile} {
		display: flex;
		flex-direction: column;
		z-index: 1;
		box-sizing: border-box;
		/* border: solid black 1px; */

		#info-wrapper {
			width: 100%;
			max-width: 756px;
			border-radius: 6px;
			box-shadow: 0 17px 10px -13px rgba(200, 199, 223, 0.45);
			background-color: #e5eeff;
			margin: auto;
			padding: 30px 44px;
			display: flex;
			justify-content: space-between;
			box-sizing: content-box;
		}
		#map {
			width: 220px;
			height: 220px;
			border-radius: 6px;
			user-select: none;
			outline: none;
		}

		#map img {
			width: 220px;
			height: 220px;
			user-select: none;
			outline: none;
		}

		h4 {
			margin: 0 0;
			font-family: Noah-Bold;
			font-size: 24px;
			color: #0e0e0e;
		}
		p {
			font-family: Noah-Regular;
			font-size: 24px;
			color: #0e0e0e;
		}
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;

const Info = styled.div`
	@media ${device.mobile} {
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;
