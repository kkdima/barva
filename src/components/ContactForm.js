import styled from "styled-components";
import { device, GlobalStyle } from "../theme/GlobalStyle";
import { motion } from "framer-motion";

export default function ContactForm() {
	return (
		<Wrapper>
			<Form>
				<Input
					name="name"
					type="text"
					placeholder="Name..."
					onChange={e => this.setState({})}
				/>
				<Input
					name="email"
					type="text"
					placeholder="Email..."
					onChange={e => this.setState({})}
				/>
				<Textarea
					name="name"
					type="text"
					placeholder="Your question to us..."
					onChange={e => this.setState({})}
				/>
			</Form>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	@media ${device.mobile} {
		h1 {
			color: black;
		}
	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
	}
	@media ${device.laptop} {
	}
`;

const Textarea = styled.textarea`
	@media ${device.mobile} {
		font-size: 21px;
		-webkit-appearance: none;
		resize: none;
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;

const Input = styled.input`
	@media ${device.mobile} {
		margin-bottom: 23px;
		-webkit-appearance: none;
		border-style: solid;
		border: none;
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;

const Form = styled.form`
	border: solid black;
	margin: auto;
	input::placeholder {
		/* color: #D6D6D6; */
	}
	input {
		padding-left: 15px;
	}
	input:nth-of-type(1) {
		text-transform: capitalize;
	}
	input:nth-of-type(3) {
		/* height: 142px; */
	}
	input:nth-of-type(3):focus {
		outline: none;
	}
	textarea {
		border: none;
		padding: 15px;
		/* width: 405px; */
		height: 142px;
		/* text-transform: capitalize; */
	}
	textarea::placeholder {
		/* color: #D6D6D6; */
	}
	@media ${device.mobile} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		padding-left: 58px;
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;
