import React from 'react';

const Error = ({ touched, message }) => {
	if (!touched) {
		return <div className='text-xs py-3'>&nbsp;</div>;
	}
	if (message) {
		return <div className='text-xs pl-4 allGoodColor py-3 '>{message}</div>;
	}
	return <div className='text-xs pl-4 allGoodColor py-3'>all good</div>;
};

export default Error;
