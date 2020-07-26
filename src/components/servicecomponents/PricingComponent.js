import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function PricingComponent() {
	return (
		<div>
			<Container>
				<Row className="justify-content-center">
					<Col sm={12} md={10} className="my-auto">
						<h2 className="slogan-1 text-center">Pricing</h2>
					</Col>
					<br />
					<Col xs={10} md={6} className="my-auto">
						<hr className="new4" />
					</Col>
				</Row>
			</Container>
			<br />
			<Container>
				<Row>
					<Col>
						<Card className="text-center mt-5 mb-5 " border="dark" bg="transparent">
							<Card.Header className="slogan-1 ">
								<h3>Package Details</h3>
							</Card.Header>
							<Card.Body>
								<Container>
									<Row>
										<Col md={4}>
											<Card bg="transparent">
												<Card.Header className="slogan-2">
													<h4>YEARLY</h4>
												</Card.Header>
												<Card.Text>
													<div>
														<br />
														<h3 className="logo-name text-center">999</h3>
														<br />
														<h4 className="slogan-1">12 Months</h4>
														<h4 className="slogan-1">4 free service</h4>
														<h4 className="slogan-1">50% discount on repairs</h4>
														<h4 className="slogan-1">Free Technical Consultation</h4>
													</div>
												</Card.Text>
											</Card>
										</Col>
										<Col md={4}>
											<Card bg="transparent">
												<Card.Header className="slogan-2">
													<h4>HALF-YEARLY</h4>
												</Card.Header>
												<Card.Text>
													<div>
														<br />
														<h3 className="logo-name text-center">699</h3>
														<br />
														<h4 className="slogan-1">6 Months</h4>
														<h4 className="slogan-1">4 free service</h4>
														<h4 className="slogan-1">50% discount on repairs</h4>
														<h4 className="slogan-1">Free Technical Consultation</h4>
													</div>
												</Card.Text>
											</Card>
										</Col>
										<Col md={4}>
											<Card bg="transparent">
												<Card.Header className="slogan-2">
													<h4>QUARTERLY</h4>
												</Card.Header>
												<Card.Text>
													<div>
														<br />
														<h3 className="logo-name">399</h3>
														<br />
														<h4 className="slogan-1">3 Months</h4>
														<h4 className="slogan-1">1 free service</h4>
														<h4 className="slogan-1">50% discount on repairs</h4>
														<h4 className="slogan-1">Free Technical Consultation</h4>
													</div>
												</Card.Text>
											</Card>
										</Col>
									</Row>
								</Container>
							</Card.Body>
							<Card.Footer className="text-muted">
								<button className="btn btn-outline-dark ">
									<Link to="/booking" className="text-light">
										Book a slot
									</Link>
								</button>
							</Card.Footer>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default PricingComponent;
