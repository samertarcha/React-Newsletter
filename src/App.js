import './App.css';

import { Fragment } from 'react';

import MailchimpSubscribe from 'react-mailchimp-subscribe';

import SignUpForm from './SignUpForm';

// https://samertarcha.us14.list-manage.com/subscribe/post?u=9b1adbdfd32abe1510db35b2c&amp;id=a19b490581'

const App = () => {
	return (
		<Fragment>
			<SignUpForm />
			{/* <MailchimpSubscribe url='https://samertarcha.us14.list-manage.com/subscribe/post?u=9b1adbdfd32abe1510db35b2c&amp;id=a19b490581' /> */}
		</Fragment>
	);
};

export default App;
