import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { device, GlobalStyle } from '../theme/GlobalStyle';
import { motion } from 'framer-motion';
import TextareaAutosize from 'react-autosize-textarea';
import axios from 'axios';
import { Formik } from 'formik';
import * as Yup from 'yup';
import Error from './Error';

const validationScheme = Yup.object().shape({
	name: Yup.string()
		.min(1, 'Too Short!')
		.max(255, 'Too Long!')
		.required('Required'),
	message: Yup.string()
		.min(1, 'Too Short!')
		.max(255, 'Too Long!')
		.required('Required'),
	email: Yup.string()
		.email('Must be an email address')
		.max(255, 'Too Long!')
		.required('Required')
});

const ContactForm = () => {
	const [isClicked, setIsClicked] = useState(false);
	const button = useRef(null);
	const svgRef = useRef(null);

	return (
		<Wrapper>
			<BackgroundContactFrom />
			<H2bold>Contact Us</H2bold>
			<Formik
				className='mx-4'
				initialValues={{ name: '', email: '', message: '' }}
				validationSchema={validationScheme}
				onSubmit={(values, { setSubmitting, resetForm }) => {
					setIsClicked(true);
					setSubmitting(true);
					resetForm();
					setSubmitting(false);
					setTimeout(() => {
						setIsClicked(false);
					}, 4000);

					axios
						.post('/api/send', values)
						.then(response => {
							console.log(response);
						})
						.catch(error => {
							console.log(error);
						});
				}}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
					setFieldValue
				}) => (
					<Form
						name='contact'
						method='POST'
						action='/api/send'
						onSubmit={handleSubmit}
					>
						<div className='w-full flex flex-col px-5'>
							<Input
								value={values.name}
								name='name'
								id='name'
								type='text'
								placeholder='Name'
								onChange={handleChange}
								onBlur={handleBlur}
								className={touched.name && errors.name ? 'has-error' : null}
							/>
							<Error touched={touched.name} message={errors.name} />
						</div>

						<div className='w-full flex flex-col px-5'>
							<Input
								value={values.email}
								name='email'
								id='email'
								type='text'
								placeholder='E-mail'
								onChange={handleChange}
								onBlur={handleBlur}
								className={touched.email && errors.email ? 'has-error' : null}
							/>
							<Error touched={touched.email} message={errors.email} />
						</div>

						<div className='w-full flex flex-col px-5'>
							<StyledTextarea
								value={values.message}
								id='message'
								type='text'
								placeholder='Briefly describe the idea you want to bring to life'
								rows={3}
								onChange={handleChange}
								onBlur={handleBlur}
							/>
							<Error touched={touched.message} message={errors.message} />
						</div>

						<Button
							ref={button}
							type='submit'
							disabled={isSubmitting}
							// onClick={handleSubmit}
							method='POST'
							className={isClicked ? 'animateOnClick' : 'static'}
						>
							<svg id='Plane' ref={svgRef}>
								<use href='#paperPlane' />
							</svg>
							{isClicked ? (
								<motion.div
									id='Sent'
									className='container'
									initial={{ y: -20, opacity: 0 }}
									animate={{ y: 0, opacity: 1 }}
									transition={{
										type: 'spring',
										stiffness: 260,
										damping: 20,
										delay: 0.5
									}}
								>
									Sent
								</motion.div>
							) : (
								<div>Submit</div>
							)}
						</Button>
					</Form>
				)}
			</Formik>
		</Wrapper>
	);
};

export default ContactForm;

const Wrapper = styled.div`
	@media ${device.mobile} {
		box-sizing: border-box;
		position: relative;
		width: 100%;
		overflow: hidden;
	}
	@media ${device.mobileL} {
	}
	@media ${device.tablet} {
	}
	@media ${device.laptop} {
	}
	textarea:disabled::placeholder {
		-webkit-text-fill-color-placeholder: #ffffff;
		opacity: 1;
	}
	/* Changing the default color of input after autofill in Safari */
	input:-webkit-autofill,
	input:-webkit-autofill:focus {
		box-shadow: 0 0 0 1000px #b8dafd inset;
	}
`;

const BackgroundContactFrom = styled.div`
	@media ${device.mobile} {
		background-image: url('/images/contact-form/contact_form_bg_mobile.svg');
		height: 650px;
		position: absolute;
		z-index: -1;
		width: 100%;
		height: 100%;
		background-size: 100% 100%;
		background-size: cover;
		padding: 0 15px;
	}
	@media ${device.tablet} {
		background-image: url('/images/contact-form/contact_form_bg_tablet.svg');
		height: 746px;
	}
	@media ${device.laptop} {
		background-image: url('/images/contact-form/contact_form_bg_laptopL.svg');
		height: 856px;
	}
	@media ${device.laptopL} {
		background-image: url('/images/contact-form/contact_form_bg_laptopL.svg');
		height: 856px;
	}
`;

const H2bold = styled.h2`
	@media ${device.mobile} {
		font-family: Noah-Bold;
		font-size: 30px;
		text-align: center;
		color: #0e0e0e;
		font-weight: 600;
		margin: 0px 0 70px 0;
		padding-top: 120px;
	}
	@media ${device.tablet} {
		padding-top: 136px;
	}
	@media ${device.laptop} {
		padding-top: 230px;
	}
	@media ${device.laptopL} {
		padding-top: 249px;
	}
`;

const Button = styled.button`
	@media ${device.mobile} {
		margin-top: 10px;
		margin-bottom: 50px;
	}
`;

const StyledTextarea = styled(TextareaAutosize)`
	all: unset;
	font-family: Noah-Regular;
	font-size: 21px;
	background-image: linear-gradient(-90deg, #b5dcfd 0%, #8cadff 100%);
	box-shadow: 0 17px 10px -13px rgba(200, 199, 223, 0.45);
	border-radius: 6px;
	padding: 10px;
	padding-top: 10px;
	padding-left: 17px;
	height: 150px;
	line-height: 1.4em;

	::-webkit-input-placeholder {
		-webkit-text-fill-color: #fff;
		opacity: 1; /* required on iOS */
	}
`;

const Input = styled.input`
	all: unset;
	::-webkit-input-placeholder {
		-webkit-text-fill-color: #fff;
		opacity: 1; /* required on iOS */
	}

	@media ${device.mobile} {
		font-family: Noah-Regular;
		font-size: 21px;
		-webkit-appearance: none;
		background-image: linear-gradient(-97deg, #b6ddfd 0%, #8cadff 67%);
		box-shadow: 0 17px 10px -13px rgba(200, 199, 223, 0.45);
		border-radius: 6px;
		height: 60px;
		padding-left: 17px;
	}
`;

const Form = styled.form`
	@media ${device.mobile} {
		all: unset;
		display: flex;
		flex-direction: column;
		max-width: 490px;
		margin: auto;
	}
`;
