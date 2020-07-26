import React from 'react';
import Headline from './homecomponents/Headline';
import Description from './homecomponents/Description';
import Testimonial from './homecomponents/Testimonial';

function HomeContent() {
	return (
		<div>
			<Headline />
			<Description />
			<br />
			<br />
			<Testimonial />
			<br />
			<br />
		</div>
	);
}

export default HomeContent;
