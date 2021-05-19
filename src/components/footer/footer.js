import './footer.css';

import React, { useEffect } from 'react';

const Footer = () =>{
	return(
		<React.Fragment>
			<div className="oneloop-footer">
				<a href="/"><img src="images/OneLoop.svg" /></a>
				<div className="oneloop-links">
					<a href="/"><img src="images/linkedin.svg" /></a>
					<a href="/"><img src="images/twitter.svg" /></a>
					<a href="/"><img src="images/mail.svg" /></a>
					<a href="/"><img src="images/instagram.svg" /></a>
					<a href="/"><img src="images/facebook.svg" /></a>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Footer;