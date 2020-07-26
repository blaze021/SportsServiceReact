import React from 'react';

function Headline() {
	return (
		<div>
			<div className="main">
				<div className="jumbotron jumbotron-fluid bg-dark">
					<div className="container">
						<div className="row align-items-center justify-content-center">
							<p className="text-center text-light slogan-1 lead m-3">
								" The Process For Evolution Is Here... "
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row  justify-content-center">
					<h1 className="text-uppercase display-4 ">Why choose Us</h1>
				</div>
				<div className="row justify-content-center">
					<div className="col-5 ">
						<hr className="new4 " />
					</div>
				</div>
				<div className="row pt-5">
					<p className="text-center m-3 lead">
						Lorem{' '}
						<small>
							dolor sit amet consectetur adipisicing elit. Velit illum doloremque rerum minus consectetur
							eius nostrum laboriosam corrupti quibusdam dolorum cupiditate, fuga iusto consequuntur totam
							culpa voluptas aut nesciunt hic.
						</small>
					</p>
				</div>
			</div>
			<div className="mt-5 mb-5" />
		</div>
	);
}

export default Headline;
