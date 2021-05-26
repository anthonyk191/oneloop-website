import './sponsors_body.css';

import React, { useEffect } from 'react';

const Sponsors_body = () =>{
	return(
		<React.Fragment>
			<div className="oneloop-sponsors-body">
				<h1>Sponsors</h1>
				<div className="sponsor-logos">
					<div className="sponsor-row">
						<div className="sponsor-row-top-half">
							<button className="sponsor"><img src="images/logo/WCBranham_logo.gif"/></button>
							<button className="sponsor"><img src="images/logo/air-caster-squarelogo.png"/></button>
						</div>
						<div className="sponsor-row-bottom-half">
							<button className="sponsor"><img src="images/logo/FluidFlow_logo.jpg"/></button>
							<button className="sponsor"><img src="images/logo/etel-logo.png"/></button>
						</div>
					</div>
					<div className="sponsor-row">
						<div className="sponsor-row-top-half">
							<button className="sponsor"><img src="images/logo/AquaEnvironment_Logo.png"/></button>
							<button className="sponsor"><img src="images/logo/TGIF_logo.png"/></button>
						</div>
						<div className="sponsor-row-bottom-half">
							<button className="sponsor"><img src="images/logo/TitanFittings_logo.png"/></button>
							<button className="sponsor"><img src="images/logo/uc-davis-mechanical-aerospace-engineering-new-faculty-2020.jpg"/></button>
						</div>
					</div>
					<div className="sponsor-row">
						<div className="sponsor-row-top-half">
							<button className="sponsor"><img src="images/logo/Gerberlabs_logo.png"/></button>
							<button className="sponsor"><img src="images/logo/SICKInc_Logo.jpg"/></button>
						</div>
						<div className="sponsor-row-bottom-half">
							<button className="sponsor"><img src="images/logo/Rockwell_Automation_Logo.png"/></button>
							<button className="sponsor"><img src="images/logo/Citris_logo.svg"/></button>
						</div>
					</div>
					<div className="sponsor-row">
						<div className="sponsor-row-top-half">
							<button className="sponsor"><img src="images/logo/Beckhoff_Logo.svg.png"/></button>
							<button className="sponsor"><img src="images/logo/ANSYS_Logo.png"/></button>
						</div>
						<div className="sponsor-row-bottom-half">
							<button className="sponsor"><img src="images/logo/TCMetal_Electric_Steel_Logo.png"/></button>
							<button className="sponsor"><img src="images/logo/KeySight_Technology_Logo.png"/></button>
						</div>
					</div>
					<div className="sponsor-row">
						<div className="sponsor-row-top-half">
							<button className="sponsor"><img src="images/logo/SecondOrderEffects_Logo.png"/></button>
							<button className="sponsor"><img src="images/logo/Ubiquiti_Networks_Logo.svg.png"/></button>
						</div>
						<div className="sponsor-row-bottom-half">
							<button className="sponsor"><img src="images/logo/Valispace_Logo.png"/></button>
							<button className="sponsor"><img src="images/logo/CompositeOne_Logo.png"/></button>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Sponsors_body;