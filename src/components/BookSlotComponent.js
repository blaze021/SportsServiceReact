import React from 'react';
import HeadlineBookingComponent from './bookingcomponents/HeadlineBookingComponent';
import BodyBookingComponent from './bookingcomponents/BodyBookingComponent';

function BookSlotComponent() {
	return (
		<div>
			<HeadlineBookingComponent />
			<br />
			<BodyBookingComponent />
			<br />
			<br />
		</div>
	);
}

export default BookSlotComponent;
