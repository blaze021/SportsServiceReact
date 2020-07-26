import React from 'react';
import PackageComponent from './servicecomponents/PackageComponent';
import PricingComponent from './servicecomponents/PricingComponent';

function ServiceComponent() {
	return (
		<div>
			<br />
			<br />
			<PackageComponent />
			<br />
			<br />
			<PricingComponent />
			<br />
			<br />
		</div>
	);
}

export default ServiceComponent;
