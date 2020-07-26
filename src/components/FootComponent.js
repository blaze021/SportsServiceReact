import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function FootComponent() {
	return (
		<div>
			<footer className="footer bg-footer">
				<br />
				<br />
				<br />
				<Container>
					<Row className="justify-content-center">
						<Col>
							<h5 className="text-center slogan-1 text text-light ">Links</h5>
							<ul className="list-unstyled">
								<li className="text-center slogan-2">
									<Link to="/home" style={{ textDecoration: 'none' }} className="text-light">
										Home
									</Link>
								</li>

								<li className="text-center slogan-2">
									<Link to="/booking" style={{ textDecoration: 'none' }} className="text-light">
										Booking
									</Link>
								</li>
								<li className="text-center slogan-2">
									<Link to="/service" style={{ textDecoration: 'none' }} className="text-light">
										Service
									</Link>
								</li>
							</ul>
						</Col>
						<br />

						<Col md="4">
							<h5 className="text-center slogan-1 text-light">Our Address</h5>
							<address className="text-center slogan-2 text-light">
								<div>121, Clear Water Bay Road</div>
								<div>Clear Water Bay, Kowloon</div>
								<div>HONG KONG0</div>
							</address>
						</Col>
						<Col md="4">
							<h5 className="text-center slogan-1 text-light">Contact us</h5>
							<address className="text-center slogan-2 text-light">
								<div>Tel.: +852 1234 5678</div>
								<div>Fax: +852 8765 4321</div>
								Email:{' '}
								<a href="support@fitom.in" className="text-light">
									support@fitom.in
								</a>
							</address>
						</Col>
					</Row>
				</Container>
				<br />
				<Container>
					<Row className="justify-content-center">
						<Col className="my-auto">
							<hr className="new4" />
						</Col>
					</Row>
				</Container>
				<Container fluid className="bg-copyright">
					<Row className="justify-content-center">
						<Col sm={6} className="pt-1">
							<p className="text-center text-light">© Copyright 2020 FITOM by blazeDevWorks</p>
						</Col>
					</Row>
				</Container>
			</footer>
		</div>
	);
}

export default FootComponent;
