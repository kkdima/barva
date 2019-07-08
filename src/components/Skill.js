import styled from "styled-components";
import { device } from "../theme/GlobalStyle";

export default function Skill(props) {
	return (
		<Wrapper>
			<Img src="../../static/images/bg-animation.gif" />
			<Number>0{props.id}</Number>
			<Title>{props.title}</Title>
			<Text>{props.text}</Text>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	@media ${device.mobile} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		background-color: #e5eeff;
		/* width: 295px; */
		margin: 0 7.8125%;
		color: white;
		border-radius: 6px;
		overflow: hidden;
		box-shadow: 0 16px 29px -12px rgba(0, 0, 0, 0.14);
		margin-bottom: 60px;
	}
	@media ${device.mobileM} {
		margin: 0 10.66666%;
		margin-bottom: 60px;
	}
	@media ${device.mobileL} {
		margin: 0 15.294%;
		margin-bottom: 60px;
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;

const Img = styled.img`
	@media ${device.mobile} {
		width: 100%;
		height: 141px;
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;

const Number = styled.p`
	@media ${device.mobile} {
		font-family: Noah-Bold;
		font-size: 20px;
		color: #d6d3e5;
		margin: 13px;
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;

const Title = styled.h2`
	@media ${device.mobile} {
		margin: 0;
		color: #0e0e0e;
		font-size: 26px;
		font-family: Noah-Bold;
		margin-left: 43px;
		width: 185px;
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;

const Text = styled.p`
	@media ${device.mobile} {
		font-family: Noah;
		color: #0e0e0e;
		font-size: 16px;
		margin-left: 43px;
		margin-right: 33px;
		margin-bottom: 46px;
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;
