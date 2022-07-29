import './App.css';

import { Fragment } from 'react';

import MailchimpSubscribe from 'react-mailchimp-subscribe';

import SignUpForm from './SignUpForm';

// "https://samertarcha.us10.list-manage.com/subscribe/post?u=465b8dfeb145e3b4a176fb459&amp;id=123fb13184"

const App = () => {
	return (
		<Fragment>
			<MailchimpSubscribe
				url='https://samertarcha.us10.list-manage.com/subscribe/post?u=465b8dfeb145e3b4a176fb459&amp;id=123fb13184'
				render={({ subscribe, status, message }) => (
					<>
						<SignUpForm
							status={status}
							message={message}
							onValidated={formData => subscribe(formData)}
						/>
						{status === 'sending' && (
							<div style={{ color: 'blue' }}>sending...</div>
						)}
						{status === 'error' && (
							<div
								style={{ color: 'red' }}
								dangerouslySetInnerHTML={{ __html: message }}
							/>
						)}
						{status === 'success' && (
							<div style={{ color: 'green' }}>Subscribed !</div>
						)}
					</>
				)}
			/>
		</Fragment>
	);
};

export default App;
