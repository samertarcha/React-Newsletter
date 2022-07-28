import React from 'react';

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';

import { Button, FormGroup, FormLabel } from 'react-bootstrap';

import './SignUpForm.scss';

const FormValues = {
	firstName: '',
	lastName: '',
	email: '',
};

const SignUpSchema = Yup.object().shape({
	firstName: Yup.string()
		.min(3, 'Too short!')
		.max(20, 'Too long!')
		.required('Required!'),
	lastName: Yup.string().min(3, 'Too short!'),
	email: Yup.string().email('Invalid email!').required('Required!'),
});

const SignUpForm = () => {
	const submitForm = values => {
		console.log(values);
	};

	return (
		<Formik
			initialValues={{ firstName: '', lastName: '', email: '' }}
			validationSchema={SignUpSchema}
			onSubmit={submitForm}>
			{formik => (
				<Form className='form'>
					<h1>Sign Up for our newsletter</h1>
					<FormGroup className='form__group'>
						<FormLabel className='form__label' htmlFor='firstName'>
							First Name
						</FormLabel>
						<Field name='firstName' className='form__input' />
						<ErrorMessage name='firstName' />
					</FormGroup>
					<FormGroup className='form__group'>
						<FormLabel className='form__label' htmlFor='lastName'>
							Last Name
						</FormLabel>
						<Field name='lastName' className='form__input' />
						<ErrorMessage name='lastName' />
					</FormGroup>
					<FormGroup className='form__group'>
						<FormLabel className='form__label' htmlFor='email'>
							Email
						</FormLabel>
						<Field name='email' className='form__input' />
						<ErrorMessage name='email' />
					</FormGroup>
					<Button
						type='submit'
						className='form__button'
						disabled={!formik.isValid || !formik.dirty}>
						Submit
					</Button>
				</Form>
			)}
		</Formik>
	);
};

export default SignUpForm;
