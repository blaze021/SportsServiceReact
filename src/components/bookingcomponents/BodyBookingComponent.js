import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import BookSlotComponent from '../BookSlotComponent';
import { db } from '../infocomponents/firebase';

class BodyBookingComponent extends Component {
	constructor() {
		super();
		this.state = {
			firstName: 'First Name',
			lastName: 'Last Name',
			email: 'example@email.com',
			city: 'City',
			pin: '000000',
			brand: 'trek',
			serviceType: 'none',
			model: 'trek00000',
			phone: '0000000000',
			slot: '9:00-12:00'
		};
	}

	handleOnSubmit(event) {
		let info = {}; //create an empty object
		let date = new Date();
		info.firstName = document.getElementById('formFirstName').value;
		info.lastName = document.getElementById('formLastName').value;
		info.emailId = document.getElementById('formEmail').value;
		info.slotTime = document.getElementById('formSelectSlot').value;
		info.cityName = document.getElementById('formCity').value;
		info.pinNo = document.getElementById('formPIN').value;
		info.phoneNo = document.getElementById('formPhone').value;
		info.serviceType = document.getElementById('formSelectServiceType').value;
		info.brandName = document.getElementById('formSelectBrand').value;
		info.modelNo = document.getElementById('formModel').value;
		let year = date.getFullYear();
		let month = date.getMonth() + 1;
		let day = date.getDate();
		let dateNameId =
			year.toString() +
			'/' +
			month.toString() +
			'/' +
			day.toString() +
			'|' +
			info.firstName +
			'|' +
			info.lastName;
		console.log(dateNameId);
		console.log(year);
		console.log(date.getDate());
		console.log(event);
		console.log(info);
		db
			.collection('orders')
			.doc(dateNameId)
			.set({
				firstName: info.firstName,
				lastName: info.lastName,
				email: info.emailId,
				city: info.cityName,
				pin: info.pinNo,
				brand: info.brandName,
				serviceType: info.serviceType,
				model: info.modelNo,
				phone: info.phoneNo,
				slot: info.slotTime
			})
			.then(function() {
				console.log('Document successfully written!');
				alert('Your Request Is Submitted');
			})
			.catch(function(error) {
				console.error('Error writing document: ', error);
			});
	}

	render() {
		return (
			<div>
				<Container>
					<Row>
						<Col>
							<Card bg="transparent">
								<Card.Header>
									<h3 className="slogan-1 font-weight-bold">Fill the details</h3>
								</Card.Header>
								<Container>
									<Row className="justify-content-center">
										<Col md={8} className="my-auto">
											<br />
											<Form bg="transparent">
												<Form.Group controlId="formFirstName" required>
													<Form.Label>First Name</Form.Label>
													<Form.Control type="name" placeholder="First Name" />
												</Form.Group>
												<Form.Group controlId="formLastName">
													<Form.Label>Last Name</Form.Label>
													<Form.Control type="name" placeholder="Last Name" />
												</Form.Group>
												<Form.Group controlId="formEmail">
													<Form.Label>Email address</Form.Label>
													<Form.Control type="email" placeholder="Enter Email" />
													<Form.Text className="text-muted">
														We'll never share your email with anyone else.
													</Form.Text>
												</Form.Group>
												<Form.Group controlId="formSelectSlot">
													<Form.Label>Select Your Slot</Form.Label>
													<Form.Control as="select" placeholder="Select Your Slot">
														<option>9:00-12:00</option>
														<option>12:00-15:00</option>
														<option>15:00-18:00</option>
														<option>18:00-21:00</option>
													</Form.Control>
												</Form.Group>
												<Form.Group controlId="formCity">
													<Form.Label>Enter City</Form.Label>
													<Form.Control type="text" placeholder="Enter City" />
												</Form.Group>
												<Form.Group controlId="formPIN">
													<Form.Label>Enter PIN</Form.Label>
													<Form.Control type="number" placeholder="Enter PIN" />
												</Form.Group>
												<Form.Group controlId="formPhone">
													<Form.Label>Enter Phone No.</Form.Label>
													<Form.Control type="number" placeholder="Enter Phone No." />
													<Form.Text className="text-muted">
														We'll never share your number with anyone else.
													</Form.Text>
												</Form.Group>
												<Form.Group controlId="formSelectServiceType">
													<Form.Label>Select Service Type</Form.Label>
													<Form.Control as="select" placeholder="Select Your Service Type">
														<option>SERVICE AT HOME</option>
														<option>PICK UP AND DROP SERVICE</option>
													</Form.Control>
												</Form.Group>
												<Form.Group controlId="formSelectBrand">
													<Form.Label>Brand</Form.Label>
													<Form.Control as="select" placeholder="Select Your Brand">
														<option>Trek</option>
														<option>Ducati</option>
														<option>Kross</option>
														<option>Lapierre</option>
														<option>Bianchi</option>
														<option>Cannondale</option>
														<option>Raleigh</option>
														<option>Btwin</option>
													</Form.Control>
												</Form.Group>
												<Form.Group controlId="formModel">
													<Form.Label>Enter Your Model</Form.Label>
													<Form.Control type="text" placeholder="Enter Your Model" />
												</Form.Group>
												<br />
												<Button variant="primary" onClick={this.handleOnSubmit}>
													Submit
												</Button>
											</Form>
											<br />
										</Col>
									</Row>
								</Container>
							</Card>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default BodyBookingComponent;
