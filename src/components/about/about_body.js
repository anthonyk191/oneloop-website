import './about_body.css';

import React, { useEffect, useState } from 'react';
import Modal from './Modal'
import Modal2 from './Modal2'

const About_body = () =>{
	const [showResults, setShowResults] = React.useState(false)
  	const onClick = () => setShowResults(true)

	const [showResults1, setShowResults1] = React.useState(false)
  	const onClick1 = () => setShowResults1(true)
	const [isOpen,setIsOpen] = useState(false)
	  return(
		<React.Fragment>
			<div className="oneloop-about-body">

				<h1 className="AboutUs">About Us</h1>
				<p className="imgsub">Team 2018 - 2019</p>
				<div className="Upper">
				<div className="OurMission">
					<h2 className="secTitle"> Our Mission </h2>
					<li>
					Our mission is to further explore hyperloop technologies by promoting faster, cleaner, and more energy-efficient solutions to the transportation sector.
					</li>
					<li>
					We seek to achieve this through cultivating an environment that fosters continuous improvement, collaboration with industry professionals, and teamwork.
					</li>
					<li>
					OneLoop was founded in 2016 by a group of engineering students at UC Davis in response to SpaceX's announcement of its annual hyperloop competition. 
					</li>
					<li>
					OneLoop became one of the top 21 teams in the 2019 hyperloop pod competition and was invited to the SpaceX HQ in Hawthorne to take part in the final round of the competition. Based on the number of tests passed, OneLoop placed 3rd in the united states and top ten in the world.
					</li>
				</div>
				<div className="OurFacultyAdv">
					<h2 className = "secTitle"> Our Faculty Advisor </h2>
					<img></img>

					<div className="ProfIntro">
						<p id="bolder">Professor C.P “Case” Van Dam</p>
						<p>Professor of Mechanical and Aerospace Engineering</p>
						<p>University of California, Davis</p>
					</div>
				</div>
				</div>
				<div className="OurHistory">
					<h2 className="secTitle"> Our History </h2>
					

				<div className="timeline">
					
					<img></img>
					
  					<div className="container right">
   						<div className="content">
							<p className="YearNum">2017</p>
							<p>In 2017-2018 OneLoop applied to SpaceX hyperloop competition. In this year the team was highly ambitious and in preparation for that competition implemented within the pod air bearings, linear induction motor (LIM) propulsion, eddy current brakes, friction brakes, and wheels. OneLoop was able to make it to top 40 through the preliminary design.</p>
							<p className="collapable">It is important to mention that during this time the linear induction motor had not yet been perfected. However the team wanted to test their current version of the LIM as it is a system crucial for energy efficient long distance travel. The industrial air bearings were chosen at the time to allow travel over non ideal surfaces that had small cracks such as shop floors. The bearings can lift up to 1000 lbs making its potential payload particularly effective. </p>	
						</div>
						<button onClick={() => setIsOpen(true)}>click here to learn more</button>
						<Modal2 open ={isOpen} onClose = {() => setIsOpen(false)}>
							
						</Modal2>
 					</div>


  					<div className="container left">
    					<div className="content">
							<p className="YearNum">2018</p>
							<p>OneLoop produced a robust pod capable of reaching 100 mph that was designed with safety as a top priority. With the increased level of safety the team implemented in design, OneLoop managed to place 9th out of the 40 teams that entered the SpaceX competition of 2019. </p>
							<p className="collapable">Safety standards such as OSHA and ASME were adhered to with the regards to pod design, testing, and operation whenever relevant. Furthermore, the year’s propulsion system was modified to be cold gas thrusters which was primarily chosen to reduce the pod’s high voltage requirements and increase electrical safety.</p>
							
						</div>
						<button onClick={() =>setIsOpen(true)}>click here to learn more</button>
						<Modal open ={isOpen} onClose = {() => setIsOpen(false)}>
							
						</Modal>
  					</div>

  					
					<img></img>
  					

  					
    				<img></img>
					

  					<div className="container right">
    					<div className="content">
							<p className="YearNum">2019</p>
							<p>Due to the concerns created by COVID-19, there were no official announcements for SpaceX’s competition. The team switched to a two-year design cycle to adjust to these changes spending more of their time on research and simulations. The acquisition of sponsorship with ANSYS allowed the team to extensively simulate their pod models. With the help of computer aided software, the team was able to drastically improve their mathematical models as well as better ways to integrate the pod. </p>
    					</div>
  					</div>
				</div>
				</div>
			</div>
		</React.Fragment>
	);
}


export default About_body;