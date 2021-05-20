import './podDetails_body.css';

import React, { useEffect } from 'react';
//import Slideshow from '../home/slideshow'

const PodDetails_body = () =>{
	return(
		<React.Fragment>
			<div className="oneloop-poddetails-heading"> 
				<div className="oneloop-poddetails-title"> 
					<h1> Pod Details </h1> 
				</div> 
				<div className="oneloop-poddetails-mainphoto"> 
				</div>
			</div>

			<div className="oneloop-poddetails-section1"> 
				<div className="oneloop-poddetails-subtitle"> 
					<h2> Photo Title </h2>
				</div>

				<div className="oneloop-poddetails-caption">
					<h3>Caption here</h3>
				</div>
			</div>

			<div className="oneloop-poddetails-section2"> 
				<div className="oneloop-poddetails-subtitle"> 
					<h2> Photo Title </h2>
				</div>

				<div className="oneloop-poddetails-caption">
					<h3>Caption here</h3>
				</div>
			</div>

		</React.Fragment>
	);
}

export default PodDetails_body;