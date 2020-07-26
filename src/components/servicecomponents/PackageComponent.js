import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function PackageComponent() {
	return (
		<div>
			<Container>
				<Row className="justify-content-center">
					<Col sm={12} md={10} className="my-auto">
						<h1 className="slogan-1 text-center">We offer what you need</h1>
					</Col>
					<br />
					<Col md={10} className="my-auto">
						<hr className="new4" />
					</Col>
				</Row>
			</Container>
			<Container>
				<Row>
					<Col>
						<Card className="text-center mt-5 mb-5 " border="dark" bg="transparent">
							<Card.Header className="slogan-1 display-4">SERVICE PACKAGES WE PROVIDE</Card.Header>
							<Card.Body>
								<Container>
									<Row>
										<Col md={4}>
											<Card>
												<Card.Header className="slogan-2">
													<h4>STANDARD</h4>
												</Card.Header>
												<Card.Text>
													<ul>
														<br />
														<li>Gear Tune up</li>
														<li>Hubs Checkup</li>
														<li>Alignment of Headset</li>
														<li>Bottom Bracket Checkup</li>
														<li>Check and adjust brakes</li>
														<li>Check and Lube Chain</li>
														<li>Check and Lube Cables</li>
														<li>Wipe clean the bicycle</li>
														<li>Check tyres & inflate to correct pressure</li>
														<li>Checking and Tightening all screws and bolts</li>
													</ul>
												</Card.Text>
											</Card>
										</Col>
										<Col md={4}>
											<Card>
												<Card.Header className="slogan-2">
													<h4>PREMIUM</h4>
												</Card.Header>
												<Card.Text>
													<ul>
														<br />
														<li>Gear Tune up</li>
														<li>Hubs Checkup</li>
														<li>Alignment of Headset</li>
														<li>Bottom Bracket Checkup</li>
														<li>Check and adjust brakes</li>
														<li>Check and Lube Chain</li>
														<li>Check and Lube Cables</li>
														<li>Wipe clean the bicycle</li>
														<li>Wheel Truing ( Not wheel bend )</li>
														<li>Check tyres & inflate to correct pressure</li>
														<li>Checking and Tightening all screws and bolts</li>
														<li>Dismantle of Hubs, Center Bracket and Headset</li>
													</ul>
												</Card.Text>
											</Card>
										</Col>
										<Col md={4}>
											<Card>
												<Card.Header className="slogan-2">
													<h4>ADVANCED</h4>
												</Card.Header>
												<Card.Text>
													<ul>
														<br />
														<li>Bike Spa</li>
														<li>De-grease/Re-grease and re-install Hubs/BB/Headset</li>
														<li>Lubricate gear cable (inner/outer)</li>
														<li>Check wheel true/tension/dish on wheel stand</li>
														<li>Lubricate drive</li>
														<li>Gear and brake adjustment</li>
														<li>
															Check torque on all bolts to manufacturer’s specifications
														</li>
														<li>Safety check and report</li>
														<li>Race tune</li>
														<li>
															Check tyres for correct inflation and adjust accordingly
														</li>
													</ul>
												</Card.Text>
											</Card>
										</Col>
									</Row>
								</Container>
							</Card.Body>
							<Card.Footer className="text-muted">
								<button className="btn btn-outline-dark ">
									<Link className="text-light" to="/booking">
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

export default PackageComponent;
