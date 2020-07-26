import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import faqData from '../infocomponents/FaqData';

function FaqBodyComponent() {
	const fData = faqData.map((faq) => {
		return (
			<div>
				<Card key={faq.id} border="dark" bg="transparent">
					<Card.Header>
						<h5 className="slogan-2 font-weight-bold">{faq.ques}</h5>
					</Card.Header>
					<Card.Body>{faq.ans}</Card.Body>
				</Card>
				<br />
			</div>
		);
	});
	return (
		<div>
			<Container>
				<Row>
					<Col>
						<Card bg="transparent">
							<Card.Title>
								<h3 className="slogan-1 ml-3 mt-3">FAQ</h3>
								<hr className="new4 mr-5 ml-5" />
							</Card.Title>
							<Card.Body>
								<Container>
									<Row>
										<Col>{fData}</Col>
									</Row>
								</Container>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
			<Container />
		</div>
	);
}

export default FaqBodyComponent;
