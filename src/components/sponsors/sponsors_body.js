import React, { useEffect, useState } from 'react';
import SponsorModal from "./sponsor";
import './sponsors_body.css';

const Sponsors_body = () => {
	return (
		<React.Fragment>
			<div className="oneloop-sponsors-body">
				<div className="oneloop-sponsors-title">
					<h1>Sponsors</h1>
					<h3>Meet our sponsors!</h3>
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
								img={"images/logo/air-caster-squarelogo.png"}
								title={"AirCaster"}
								description={"AirCaster designs & builds air bearing systems that transport heavy loads across industries which includes but is not limited to aerospace, oil, defense, and automotive. They are known for their durability and customization to meet unique needs."}
								url={"https://www.aircaster.com"}
							/>
							<SponsorModal
								img={"images/logo/FluidFlow_logo.jpg"}
								title={"Fluid Flow"}
								description={"FluidFlow is a pipe flow design software allowing users to design pressure drop systems of any needs. Flows can include non-newtonian and slurry flow, two-phase flow, thermal energy transfer and compressible flow for example."}
								url={"https://fluidflowinfo.com"}
							/>
						</div>
					</div>
					<div className="sponsor-row">
						<div className="sponsor-row-top-half">
							<SponsorModal
								img={"images/logo/AquaEnvironment_Logo.png"}
								title={"Aqua Environment"}
								description={"Specialize in manufacturing high pressure components such as valves and regulators for gas and fluid control. Products are used in wide rage of commercial firefighting, military, sports-diving, natural gas, natural gas fill stations, and other applications (shipping worldwide)."}
								url={"https://www.aquaenvironmentinc.com/index.html"}
							/>
							<SponsorModal
								img={"images/logo/TitanFittings_logo.png"}
								title={"Titan Fittings"}
								description={"Stainless steel line is composed of over 10,000 stainless fittings in multiple product families that include hydraulic adapters, stainless hose ends, instrumental tube fittings, and Titan stainless valves. Company manufactures precise stainless components for large corporate and government clients nationally and has evolved into supplying high quality standard fittings for industrial applications globally."}
								url={"https://www.titanfittings.com/"}
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
								img={"images/logo/Rockwell_Automation_Logo.png"}
								title={"Rockwell Automation"}
								description={"A provider of both information technology and industrial automation. Many of their products are recognized across the globe for excellence."}
								url={"https://www.rockwellautomation.com/en-us.html"}
							/>
						</div>
						<div className="sponsor-row-bottom-half">
							<SponsorModal
								img={"images/logo/Citris_logo.svg"}
								title={"CITRIS"}
								description={"An institute opened by the university of california to help further the research might of the general university of california system, and help it to connect with the entrepreneurial spirit of silicon valley, bridging the gap between companies, students, and policy makers. "}
								url={"https://citris-uc.org"}
							/>
							<SponsorModal
								img={"images/logo/TCMetal_Electric_Steel_Logo.png"}
								title={"TCMetal Electric Steel"}
								description={"Provides high quality grain oriented and non-oriented electrical steel to the leading manufacturers in North America. With high efficiency cores that meet their high quality standards."}
								url={"https://tcmetal.com/"}
							/>
						</div>
					</div>
					<div className="sponsor-row">
						<div className="sponsor-row-top-half">
							<SponsorModal
								img={"images/logo/KeySight_Technology_Logo.png"}
								title={"Keysight Technology"}
								description={"Provides many services in technology consultation, design, and software to address pressing issues for business and technological advancement."}
								url={"https://www.keysight.com/us/en/home.html"}
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
								img={"images/logo/Ubiquiti_Networks_Logo.svg.png"}
								title={"Ubiquiti Networks"}
								description={"A provider of multi-application network operating systems that offers many services such as identification across networks, network management, and IT customization."}
								url={"https://www.ui.com"}
							/>
							<SponsorModal
								img={"images/logo/CompositeOne_Logo.png"}
								title={"Composite One"}
								description={"Lead supplier in composite materials with high performance ratings and used across many industries including aerospace, construction and infrastructure."}
								url={"https://www.compositesone.com"}
							/>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}

export default Sponsors_body;