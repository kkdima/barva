import styled from "styled-components";
import { device } from "../theme/GlobalStyle";

export default function Skill(props) {
	return (
		<Wrapper className="serviceBlock">
				<div className="leftSide"></div>
				<div className="rightSide">
					<Img id="img" src="../../static/images/bg-animation.gif" />
					<Number>0{props.id}</Number>
					<Title>{props.title}</Title>
					<Text>{props.text}</Text>
				</div >
		</Wrapper>
	);
}

const Wrapper = styled.div`
	@media ${device.mobile} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 295px;
		color: white;
		overflow: hidden;
		margin-bottom: 60px;
		/* border: solid black 1px; */

		.rightSide {
			background-color: #e5eeff;
			border-radius: 6px;
			#img {
				border-top-left-radius: 6px;
				border-top-right-radius: 6px;
			}
		}
	}
	@media ${device.mobileM} {
		/* margin: 0 10.66666%; */
		margin-bottom: 60px;
	}
	@media ${device.mobileL} {
		/* margin: 0 15.294%; */
		margin-bottom: 60px;
	}
	@media ${device.tablet} {
		flex-direction: row;
		/* width: 100%; */
		width: 688px;
		overflow: visible;
		justify-content: space-between;

		.leftSide{
			width: 325px;
			height: 325px;
			background-color: pink;
			/* margin-right: 36px; */
			border-radius: 6px;
			box-shadow: 0 16px 29px -12px rgba(0, 0, 0, 0.14);
		}

		.rightSide {
			width: 325px;
			height: 325px;
			background-color: #e5eeff;
			box-shadow: 0 16px 29px -12px rgba(0, 0, 0, 0.14);

			#img {
				display: none;
			}
		}
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
		font-family: Noah-Regular;
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
