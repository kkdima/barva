import React, { Component } from "react";
import styled from "styled-components";
import { device, GlobalStyle } from "../theme/GlobalStyle";
import Link from "next/link";
import { motion } from "framer-motion";

class Footer extends Component {
	constructor() {
		super();
	}
	render() {
		return (
            <Wrapper>
                <Wrapper2>
                    <Link href="/projects">
                        <Li>
                            <A>Projects</A>
                        </Li>
                    </Link>

                    <Link href="/about">
                        <Li>
                            <A>About</A>
                        </Li>
                    </Link>

                    <Link href="/contact">
                        <Li>
                            <A>Contact</A>
                        </Li>
                    </Link>
                </Wrapper2>
                <Signature>

                </Signature>
            </Wrapper>
        )
    }
}

export default Footer;


const StyledLink = styled(Link)`
`;

const Wrapper = styled.div`
	@media ${device.mobile} {
        width: 100%;
        margin-top: 70px;
        padding-top: 50px;
        padding-bottom: 50px;
        background: #ECECFB;
        font-family: Noah-Bold;
        font-size: 22px;
        text-align: center;
	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
`;

const Wrapper2 = styled.div`
	@media ${device.mobile} {
        max-width: 960px;
        border: none;
        margin: auto;
        display: flex;
        flex-direction: column; 
        justify-content: center;
	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
        flex-direction: row; 
	}
`;

const Li = styled.li`
	@media ${device.mobile} {
		list-style: none;
		line-height: 45px;

		transition: transform 400ms ease-in;
		&:hover {
			transform: scale(1.1);
		}
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
        margin-right: 30px;
	}
`;

const A = styled.a`
	cursor: pointer;
	text-decoration: none;
`;

const Signature = styled.div`
	@media ${device.mobile} {
        max-width: 960px;
        border: none;
        margin: auto;
        display: flex;
        flex-direction: column; 
        justify-content: center;
	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
        flex-direction: row; 
	}
`;