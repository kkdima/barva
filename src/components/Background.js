import React, { useState, useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import { device, GlobalStyle } from "../theme/GlobalStyle";
import { motion, useViewportScroll, useTransform } from "framer-motion";

const images = [
	{
		src:
			"https://images.squarespace-cdn.com/content/v1/5b475b2c50a54f54f9b4e1dc/1564517405768-H6LWVS2XAUPMQQ7XRE55/ke17ZwdGBToddI8pDm48kMW07nDPUi4QpkaiOZOMjjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmru5j-AQBePNiDV9hZLaF5Nv1eI2eQHYQ5hCOGwfHNc2oGbzw7ZizcAH76AsE0075/DSCF3671.jpg?format=1500w",
		background: "#C24B47",
		width: 500,
		height: 400,
		left: 300,
		top: 0
	},
	{
		src:
			"https://images.squarespace-cdn.com/content/v1/5b475b2c50a54f54f9b4e1dc/1564517421363-VG59T210GQM2W7XN4BC5/ke17ZwdGBToddI8pDm48kMW07nDPUi4QpkaiOZOMjjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmru5j-AQBePNiDV9hZLaF5Nv1eI2eQHYQ5hCOGwfHNc2oGbzw7ZizcAH76AsE0075/DSCF3678.jpg?format=1500w",
		background: "#A46F4C",
		width: "150%",
		height: "",
		left: "-25%",
		top: "50%"
	},
	{
		src:
			"https://images.squarespace-cdn.com/content/v1/5b475b2c50a54f54f9b4e1dc/1564517404209-F28KZOMYLY64VTD1MHPE/ke17ZwdGBToddI8pDm48kMW07nDPUi4QpkaiOZOMjjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmru5j-AQBePNiDV9hZLaF5Nv1eI2eQHYQ5hCOGwfHNc2oGbzw7ZizcAH76AsE0075/DSCF3674.jpg?format=1500w",
		background: "#F2CFA6",
		width: 700,
		height: 500,
		left: "-20%",
		top: "20%"
	},
	{
		src:
			"https://images.squarespace-cdn.com/content/v1/5b475b2c50a54f54f9b4e1dc/1564517422421-D62FIDV7H8B2O03CP7W8/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/DSCF3676.jpg?format=1500w",
		background: "#58742A",
		width: 500,
		height: 400,
		left: -200,
		top: "-50%"
	},
	{
		src:
			"https://images.squarespace-cdn.com/content/v1/5b475b2c50a54f54f9b4e1dc/1564517441059-6G4IJG7EAG2N0LHUCZNF/ke17ZwdGBToddI8pDm48kKAwwdAfKsTlKsCcElEApLR7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UegTYNQkRo-Jk4EWsyBNhwKrKLo5CceA1-Tdpfgyxoog5ck0MD3_q0rY3jFJjjoLbQ/DSCF3689.jpg?format=1500w",
		background: "#765647",
		width: 500,
		height: 400,
		left: 300,
		top: "-30%"
	},
	{
		src:
			"https://images.squarespace-cdn.com/content/v1/5b475b2c50a54f54f9b4e1dc/1564517441464-0UIL75S4LGXKELR6GQZT/ke17ZwdGBToddI8pDm48kMW07nDPUi4QpkaiOZOMjjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmru5j-AQBePNiDV9hZLaF5Nv1eI2eQHYQ5hCOGwfHNc2oGbzw7ZizcAH76AsE0075/DSCF3690.jpg?format=1500w",
		background: "#F40046",
		width: "120%",
		height: 200,
		left: "-10%",
		top: "50%"
	},
	{
		src:
			"https://images.squarespace-cdn.com/content/v1/5b475b2c50a54f54f9b4e1dc/1564517452033-A8IP0HFYHW3FCEDF89DN/ke17ZwdGBToddI8pDm48kMW07nDPUi4QpkaiOZOMjjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmru5j-AQBePNiDV9hZLaF5Nv1eI2eQHYQ5hCOGwfHNc2oGbzw7ZizcAH76AsE0075/DSCF3694.jpg?format=1500w",
		background: "#14555C",
		width: 500,
		height: 400,
		left: "50%",
		top: 100
	},
	{
		src:
			"https://images.squarespace-cdn.com/content/v1/5b475b2c50a54f54f9b4e1dc/1564517453280-E1RZEJ0K8CEMYC8V1946/ke17ZwdGBToddI8pDm48kMW07nDPUi4QpkaiOZOMjjN7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmru5j-AQBePNiDV9hZLaF5Nv1eI2eQHYQ5hCOGwfHNc2oGbzw7ZizcAH76AsE0075/DSCF3695.jpg?format=1500w",
		background: "#F0D2B7",
		width: 500,
		height: 400,
		left: -100,
		top: "50%"
	}
];

const Background = ({ src, ...style }) => {
	const [elementTop, setElementTop] = useState(0);
	const ref = useRef(null);
	const ref2 = useRef(null);
	const { scrollY } = useViewportScroll();

	const y = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
		clamp: false
  });
  
  const y2 = useTransform(scrollY, [elementTop, elementTop + 1], [0, -1], {
    clamp: false
  });

	useLayoutEffect(() => {
		const element = ref.current;
		setElementTop(element.offsetTop);
	}, [ref]);

	return (
		<Wrapper>
			<motion.img
				ref={ref}
				src='/images/left.svg'
				style={{ ...style, y }}
			/>
			<motion.img
				ref={ref2}
				src='/images/right.svg'
				style={{ ...style, y }}
			/>
		</Wrapper>
	);
};

export default Background;

const Wrapper = styled.div`
	@media ${device.mobile} {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		position: absolute;
		width: 100%;

		img:nth-of-type(1) {
			position: absolute;
			left: 0px;
			top: 350px;
			transform: rotate(100deg) scale(1.8);
      z-index: 1;
		}

		img:nth-of-type(2) {
			position: absolute;
			right: 0px;
			top: 200px;
			transform: rotate(150deg) scale(5);
		}
	}
	@media ${device.mobileM} {
	}
	@media ${device.mobileL} {
	}
	@media ${device.laptop} {
	}
`;
