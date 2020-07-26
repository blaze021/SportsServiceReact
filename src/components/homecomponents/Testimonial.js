import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import f1 from './images/f1.jpg';
import f2 from './images/f2.jpg';
import f3 from './images/f3.jpg';

function Testimonial() {
	return (
		<div>
			<section>
				<Container>
					<Row>
						<Col>
							<Carousel indicators={false} fade={true} interval={4000}>
								<Carousel.Item>
									<div class="container">
										<div class="row justify-content-center">
											<div class="col-xs-4 my-auto">
												<img src={f1} alt="image-pic" class="tes-pic" />
											</div>
										</div>
									</div>
									<br />
									<br />
									<div class="container">
										<div class="row justify-content-center">
											<div class="col-9">
												<p class="text-center">
													Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
													nesciunt aperiam? Corporis eveniet ad, obcaecati est libero ullam
													perspiciatis eligendi?
												</p>
											</div>
										</div>
									</div>
								</Carousel.Item>
								<Carousel.Item>
									<div class="container">
										<div class="row justify-content-center">
											<div class="col-xs-4 my-auto">
												<img src={f2} alt="image-pic" class="tes-pic" />
											</div>
										</div>
									</div>
									<br />
									<br />
									<div class="container">
										<div class="row justify-content-center">
											<div class="col-9">
												<p class="text-center">
													Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
													nesciunt aperiam? Corporis eveniet ad, obcaecati est libero ullam
													perspiciatis eligendi?
												</p>
											</div>
										</div>
									</div>
								</Carousel.Item>
								<Carousel.Item>
									<div class="container">
										<div class="row justify-content-center">
											<div class="col-xs-4 my-auto">
												<img src={f3} alt="image-pic" class="tes-pic" />
											</div>
										</div>
									</div>
									<br />
									<br />
									<div class="container">
										<div class="row justify-content-center">
											<div class="col-9">
												<p class="text-center">
													Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
													nesciunt aperiam? Corporis eveniet ad, obcaecati est libero ullam
													perspiciatis eligendi?
												</p>
											</div>
										</div>
									</div>
								</Carousel.Item>
							</Carousel>
						</Col>
					</Row>
				</Container>
			</section>
		</div>
	);
}

export default Testimonial;
