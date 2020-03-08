require('../public/styles/index.css');
import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

const ID = () =>
	Math.random()
		.toString(36)
		.substr(2, 9);

const MyApp = ({ Component, pageProps }) => {
	return (
		<>
			{/* <AnimatePresence exitBeforeEnter> */}
			<Component {...pageProps} key={ID()} />
			{/* </AnimatePresence> */}
		</>
	);
};

export default MyApp;
