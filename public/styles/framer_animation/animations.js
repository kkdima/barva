export const transition = { ease: 'easeOut', duration: 1 };

export const imageVariantsMobile = {
	initial: { opacity: 0, scale: 1.3 },
	enter: {
		opacity: 1,
		scale: 1,
		bottom: 0,
		top: 0,
		style: { margin: 'auto' }
	},
	arrowEnter: { rotate: 90 }
};

export const imageVariantsDesktop = {
	initial: { opacity: 0, scale: 1.3 },
	enter: {
		opacity: 1,
		scale: 1,
		bottom: 0,
		top: 0,
		style: { margin: 'auto' },
		x: 0,
	},
	click: { x: -247, style: { zIndex: 2 } },
	hover: { scale: 1.1 }
};

export const imageHolder = {
	initial: { scale: 1.3 },
	enter: { scale: 1 },
	hover: { scale: 1.1 },
	animate: { x: 100 },
	click: {}
};

export const imageShadowVariants = {
	transition: { delay: 1 },
	initial: {
		opacity: 0,
		scale: 0.4,
		top: 20,
		left: 0,
		right: 0,
		style: { margin: 'auto' }
	},
	enter: { opacity: 0.8, scale: 0.8}
};

export const content = {
	initial: {
		opacity: 0,
		scale: 0,
		left: 0,
		right: 0,
		style: { margin: 'auto' }
	},
	enterContent: { opacity: 1, scale: 1 }
};

export const infoVariantsMobile = {
	initial: {
		scale: 0,
		top: 0
	},
	enter: {
		scale: 1,
		y: -100
	},
	click: { y: -10 }
};

export const infoVariantsDesktop = {
	initial: { x: -40},
	enter: {
		height: 200,
		x: 0,
	},
	click: {
		height: 270,
		x: 235
	}
};
