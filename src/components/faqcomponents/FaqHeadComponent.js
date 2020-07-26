import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FaqHeadComponent() {
	return (
		<div>
			<Container>
				<Row className="justify-content-center">
					<Col>
						<h2 className="slogan-1 text-center">Questions? We answer them all</h2>
					</Col>
				</Row>
				<Row className="justify-content-center">
					<br />
					<Col md={10} className="my-auto">
						<hr className="new4" />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default FaqHeadComponent;
