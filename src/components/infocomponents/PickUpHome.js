import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function PickUpHome() {
	return (
		<div>
			<section id="pick-drop">
				<Container>
					<Row>
						<Col>
							<h4 class="slogan-1 text-light ">PICK UP AND DROP SERVICE</h4>
							<hr class="descript mr-5" />
						</Col>
					</Row>
				</Container>
				<Container>
					<Row>
						<Col sm={8}>
							<br />
							<h6 class="text-uppercase text-light ">Book online</h6>
						</Col>
					</Row>
					<br />
					<Row>
						<Col sm={8}>
							<p>Enter your details , preferred date and time for pick up .</p>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row>
						<Col sm={8}>
							<br />
							<h6 class="text-uppercase text-light ">PICK UP</h6>
						</Col>
					</Row>
					<br />
					<Row>
						<Col sm={8}>
							<p>We come to your doorstep to pick up your bicycle.</p>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row>
						<Col sm={8}>
							<br />
							<h6 class="text-uppercase text-light ">SERVICE STATION</h6>
						</Col>
					</Row>
					<Row>
						<Col sm={8}>
							<p>Your bicycle will be serviced at our fully equipped service station.</p>
						</Col>
					</Row>
				</Container>
				<Container>
					<Row>
						<Col sm={8}>
							<br />
							<h6 class="text-uppercase text-light ">DROP OFF</h6>
						</Col>
					</Row>
					<Row>
						<Col sm={8}>
							<p>Your bicycle will be dropped off at your doorstep.</p>
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	);
}

export default PickUpHome;
