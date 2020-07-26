import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ServiceHome() {
	return (
		<div>
			<section id="service-at-home">
				<Container>
					<Row>
						<Col>
							<h4 class="slogan-1 text-light">Service at Home</h4>
							<hr class="descript mr-5" />
						</Col>
					</Row>
				</Container>
				<Container>
					<Row>
						<Col xs={12} sm={8}>
							<br />
							<h6 class="text-uppercase text-light">Book online</h6>
						</Col>
					</Row>
					<br />
					<Row>
						<Col xs={12} sm={8}>
							<p>Enter your details, write your preferred service day, time and wait for us to arrive.</p>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row>
						<Col sm={8}>
							<br />
							<h6 class="text-uppercase text-light">WE COME TO YOUR DOOR STEP</h6>
						</Col>
					</Row>
					<br />
					<Row>
						<Col sm={8}>
							<p>FITOM service will come to your home or office.</p>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row>
						<Col sm={8}>
							<p>Your bicycle will be ready in 60 minutes and you can do more of what you love…RIDE!.</p>
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	);
}

export default ServiceHome;
