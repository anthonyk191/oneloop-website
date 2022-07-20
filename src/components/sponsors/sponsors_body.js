import React, { useEffect, useState } from 'react';
import SponsorModal from "./sponsor";
import './sponsors_body.css';

const Sponsors_body = () => {
	return (
		<React.Fragment>
			<div className="oneloop-sponsors-body">
				<div className="oneloop-sponsors-title">
					<h1>Our sponsors</h1>

				</div>

                <div className="thanks">
                    <p>
                    Thank you to all of our kind sponsors!<br />
                    <a id="bolder" href ="davishyperloop@gmail.com">Email us</a>for more information on becoming our sponsor or<a id="bolder" href ="https://give.ucdavis.edu/2450/VCHLOOP">donate</a>now!
                    </p>
                </div>

                <div className="special_thanks">
                    <p>Special thanks to BAE Staff: Jed Roach, Andy Cobb, and Tom Bell; Victor Duraj; and Tim Keller of<a id="bolder" href ="https://www.inventopia.org/">Inventopia!</a></p>
                </div>

				<div className="sponsor-logos">
					<div className="sponsor-row">
						<div className="sponsor-row-top-half">
							<SponsorModal
								img={"images/logo/etel-logo.png"}
								title={"ETEL"}
								description={"ETEL is a company based in Switzerland which designs and builds motion systems in-house. They create systems that meet a range of needs from high-precision to high-power."}
								url={"https://www.etel.ch"}
							/>
							<SponsorModal
								img={"images/logo/Beckhoff_Logo.svg.png"}
								title={"Beckhoff"}
								description={"Works on the development and implementation of PC-based control technology all over the globes. This work spans over multiple different industries and product lines, cemented by their global presence."}
								url={"https://www.beckhoff.com/en-us/"}
							/>
						</div>
						<div className="sponsor-row-bottom-half">
							<SponsorModal
								img={"images/logo/ANSYS_Logo.png"}
								title={"ANSYS"}
								description={"Develops and markets multiphysics engineering simulation software for product design, testing and operation and offers its products and services to customers worldwide."}
								url={"https://www.ansys.com"}
							/>
							<SponsorModal
								img={"images/logo/Valispace_Logo.png"}
								title={"Valispace"}
								description={"Helps engineers streamline their engineering efforts by centralizing ‘loose’ engineering data into one place. This provides a way for engineers to maximize their time and effort and design with their system of detailed documentation and secured user deployment."}
								url={"https://www.valispace.com/"}
							/>
						</div>
					</div>
					<div className="sponsor-row">
						<div className="sponsor-row-top-half">
							<SponsorModal
								img={"images/logo/siemens-logo.png"}
								title={"Seimens"}
								description={"Siemens is the largest manufacturing company in Europe. A multinational conglomerate company whose varied acquisitions allowed it to be involved in wind power, gas power, energy management, transportation, health care, automation and more."}
								url={"https://www.siemens.com/global/en.html"}
							/>
							<SponsorModal
								img={"images/logo/WCBranham_logo.gif"}
								title={"WC Branham"}
								description={"For over three decades, WC Branham has been a customer-focused family-owned business which excels in manufacturing power transmissions and fluid power systems. They are also a supplier of many other products that have served across the automotive, medical, and food processing industries."}
								url={"https://www.wcbranham.com/index.cfm"}
							/>
						</div>

						<div className="sponsor-row-bottom-half">
							<SponsorModal
								img={"images/logo/uc-davis-mechanical-aerospace-engineering-new-faculty-2020.jpg"}
								title={"Mechanical and Aerospace Engineering Department"}
								description={"Department offering comprehensive resources for students, faculty, and staff at UC Davis (offering undergraduate advising and research opportunities)."}
								url={"https://mae.ucdavis.edu"}
							/>
							<SponsorModal
								img={"images/logo/Gerberlabs_logo.png"}
								title={"Gerber Labs"}
								description={"The leading provider of printed circuit boards (PCB’s) for anyone from large companies to individuals working on home projects. Provides low-cost and high-quality custom boards made easily accessible to the public."}
								url={"https://www.gerberlabs.com/"}
							/>
						</div>
					</div>
					<div className="sponsor-row">
						<div className="sponsor-row-top-half">
							<SponsorModal
								img={"images/logo/SICKInc_Logo.jpg"}
								title={"SICK Inc."}
								description={"Manufactures sensor technology for anything from factory automation to logistics and process automation. These are sold and used in a wide range of industries, and create the perfect basis for controlling processes securely and efficiently, protecting individuals from accidents, and preventing damage to the environment."}
								url={"https://www.sick.com/us/en/"}
							/>

							<SponsorModal
								img={"images/logo/SecondOrderEffects_Logo.png"}
								title={"Second Order Effects"}
								description={"Develops and designs many solutions to challenges that are solved by their broad range of expertise in electronics, automotive, healthcare, and industrial automation industries. Reaching a solution that produces maximized results."}
								url={"https://soeffects.com"}
							/>
						</div>
						<div className="sponsor-row-bottom-half">
							<SponsorModal
								img={"images/logo/CompositeOne_Logo.png"}
								title={"Composite One"}
								description={"Lead supplier in composite materials with high performance ratings and used across many industries including aerospace, construction and infrastructure."}
								url={"https://www.compositesone.com"}
							/>
							<SponsorModal
								img={"images/logo/jst.avif"}
								title={"JST (Japanese Solderless Terminals)"}
								description={""}
								url={"https://www.jst.com/"}
							/>
						</div>
					</div>
                    <div className="sponsor-row">
						<div className="sponsor-row-top-half">
							<SponsorModal
								img={"images/logo/Martins_Logo.png"}
								title={"Martin's Metal Fabrication"}
								description={""}
								url={"http://www.martinsmetalfab.com/"}
							/>

							<SponsorModal
								img={"images/logo/Force_Logo.png"}
								title={"Force Engineering"}
								description={"Our LIM manufacturer!"}
								url={"http://www.force.co.uk/"}
							/>
						</div>
						
					</div>
				</div>

                <div className="sponsor-ratings">
					<div className="platinum">
						<h2>Platinum</h2>
						<div className="platinum-sponsors">
							<div className="platinum-sponsors-col col-1">
								<ul>
									<li>Large company logo on pod</li>
									<li>Logo on T-Shirt</li>
									<li>Website Endorsement</li>
									<li>Invitation to Campus-Review Day</li>
									<li>Facebook Post</li>
								</ul>
							</div>
							<div className="platinum-sponsors-col col-2">
								<ul>
									<li>Instagram Video Post + 1 Mention/ Month</li>
									<li>Large Signed Team Poster</li>
									<li>Monthly Updates</li>
									<li>Access to Meeting Slides</li>
									<li>Resume Booklets</li>
									<li>Team Q&A</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="gold">
						<h2>Gold</h2>
						<div className="gold-sponsors">
							<div className="gold-sponsors-col col-1">
								<ul>
									<li>Medium company logo on pod </li>
									<li>Logo on T-Shirt</li>
									<li>Website Endorsement</li>
									<li>Invitation to Campus-Review Day</li>
								</ul>
							</div>
							<div className="gold-sponsors-col col-2">
								<ul>
									<li>Instagram Video Post + 1 Mention/ Month</li>
									<li>Facebook Post</li>
									<li>Signed Team Frame</li>
									<li>Monthly Updates</li>
									<li>Access to Meeting Slides</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="silver">
						<h2>Silver</h2>
						<div className="silver-sponsors">
							<div className="silver-sponsors-col col-1">
								<ul>
									<li>Small company logo on pod </li>
									<li>Logo on T-Shirt</li>
									<li>Website Endorsement</li>
									<li>Invitation to Campus-Review Day</li>
								</ul>
							</div>
							<div className="silver-sponsors-col col-2">
								<ul>
									<li>Instagram Video Post + 1 Mention/ Month</li>
									<li>Signed Team Frame</li>
									<li>Monthly Updates</li>
								</ul>
							</div>
						</div>
					</div>
				</div>


			</div>
		</React.Fragment>
	);
}

export default Sponsors_body;