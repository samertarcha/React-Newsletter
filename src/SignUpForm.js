import React, { useState } from 'react';

// import * as Yup from 'yup';

import { Button, FormGroup, FormLabel } from 'react-bootstrap';

import './SignUpForm.scss';

// const SignUpSchema = Yup.object().shape({
// 	email: Yup.string().email('Invalid email!').required('Required!'),
// });

const SignUpForm = ({ onValidated }) => {
	const [email, setEmail] = useState(null);

	const emailInputHandler = event => {
		setEmail(event.target.value);
	};

	const handleFormSubmit = () => {

		const isFormValidated = onValidated({ EMAIL: email });

		// On success return true
		return email && email.indexOf('@') > -1 && isFormValidated;
	};


	return (
		<div className='form'>
			<h1>Sign Up for our newsletter</h1>
			<FormGroup className='form__group'>
				<FormLabel className='form__label' htmlFor='email'>
					Email
				</FormLabel>
				<input
					type='email'
					name='email'
					className='form__input'
					onChange={emailInputHandler}
				/>
			</FormGroup>
			<Button
				type='submit'
				className='form__button'
				onClick={handleFormSubmit}>
				Sign Up
			</Button>
		</div>
	);
};

export default SignUpForm;
