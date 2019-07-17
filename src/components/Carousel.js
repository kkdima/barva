import styled from "styled-components";
import { device } from "../theme/GlobalStyle";

export default function Carousel() {
	return (
        <div></div>
    )
};

const Wrapper = styled.div`
	@media ${device.mobile} {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
	}
	@media ${device.laptop} {
	}

`;