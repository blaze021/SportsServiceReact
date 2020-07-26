import React from 'react';
import FaqHeadComponent from './faqcomponents/FaqHeadComponent';
import FaqBodyComponent from './faqcomponents/FaqBodyComponent';

function FaqComponent() {
	return (
		<div>
			<br />
			<br />
			<FaqHeadComponent />
			<br />
			<br />
			<FaqBodyComponent />
			<br />
			<br />
		</div>
	);
}

export default FaqComponent;
