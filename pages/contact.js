import Layout from "../src/components/Layout.js";
import styled from "styled-components";

const Contact = () => (
	<Layout>
		<A>contact us!</A>
	</Layout>
);

export default Contact;

const A = styled.a`
	a:hover {
		scale: 0.6;
		animation: activeAnim 1s cubic-bezier(0.35, 0.25, 0, 1.28);
		animation-fill-mode: forwards;
		@keyframes activeAnim {
			from {
                color: black;
                scale: 1;
			}
			to {
				scale: 1.3;
				color: red;
			}
		}
	}
`;
