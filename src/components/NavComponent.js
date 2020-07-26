import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function NavComponent() {
	return (
		<div className="bg-emphasis">
			<Navbar bg="transparent" expand="md">
				<Navbar.Brand className="logo-name ">
					<Link to="/home" style={{ textDecoration: 'none', color: 'white' }}>
						F I T O M
					</Link>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav" className="justify-content-end mr-5">
					<div>
						<Nav className="mr-auto">
							<Nav.Link className="mr-2 active ">
								<Link to="/home" style={{ textDecoration: 'none' }} className="text-dark">
									HOME
								</Link>
							</Nav.Link>
							<Nav.Link className="mr-2 ">
								<Link to="/service" style={{ textDecoration: 'none' }} className="text-dark">
									SERVICE
								</Link>
							</Nav.Link>
							<Nav.Link className="mr-2 ">
								<Link to="/booking" style={{ textDecoration: 'none' }} className="text-dark">
									BOOKING
								</Link>
							</Nav.Link>
							<Nav.Link className="mr-2 ">
								<Link to="/faq" style={{ textDecoration: 'none' }} className="text-dark">
									FAQ
								</Link>
							</Nav.Link>
						</Nav>
					</div>
				</Navbar.Collapse>
			</Navbar>
			<Container>
				<Row className="box row align-items-center">
					<Col lg="8">
						<h1 className=" text-light slogan-1 slogan-anim">
							Your Fitness <small>Mantra</small>
						</h1>
						<p className="slogan-2 text-light">
							Beginning your journey for the adventure you love the most. We are here to realise your
							passion!
						</p>
						<button className="btn btn-outline-light">
							<Link
								to="/booking"
								style={{ textDecoration: 'none', color: 'white' }}
								className="bg-transparent text-light"
							>
								Book Now
							</Link>
						</button>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default NavComponent;
