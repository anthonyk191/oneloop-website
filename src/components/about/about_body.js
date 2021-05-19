import './about_body.css';

import React, { useEffect } from 'react';

const About_body = () =>{
	return(
		<React.Fragment>
			<div className="oneloop-about-body">
				<h1>This is for Minh and Wanyue!</h1>

				<h1 className="AboutUs">About Us</h1>
				<p className="imgsub">Team 2018 - 2019</p>
				<div className="OurMission">
					<h2 className="secTitle"> Our Mission </h2>
					<li>
						OUR MISSION IS TO FURTHER EXPLORE HYPERLOOP TECHNOLOGIES BY PROMOTING FASTER, CLEANER, AND MORE ENERGY EFFICIENT SOLUTIONS TO THE TRANSPORTATION SECTOR. 
					</li>
					<li>
						WE SEEK TO ACHIEVE THIS THROUGH CULTIVATING AN ENVIRONMENT THAT FOSTERS CONTINUOUS IMPROVEMENT, COLLABORATION WITH INDUSTRY PROFESSIONALS, AND TEAMWORK.
					</li>
					<li>
 						ONELOOP WAS FOUNDED IN 2016 BY A GROUP OF ENGINEERING STUDENTS AT UC DAVIS IN RESPONSE TO SPACEX’S ANNOUNCEMENT OF ITS ANNUAL HYPERLOOP COMPETITION. 
					</li>
					<li>
						ONELOOP BECAME ONE OF THE TOP 21 TEAMS IN THE 2019 HYPERLOOP POD COMPETITION AND WAS INVITED TO THE SPACEX HQ IN HAWTHORNE TO TAKE PART IN THE FINAL ROUND OF THE COMPETITION. BASED ON THE NUMBER OF TESTS PASSED, ONELOOP PLACED 3RD IN THE UNITED STATES AND TOP-TEN IN THE WORLD.
					</li>
				</div>
				<div className="OurFacultyAdv">
					<h2 className = "secTitle"> Our Faculty Advisor </h2>
					<img></img>

					<div className="ProfIntro">
						<p id="bolder">PROFESSOR C.P “CASE” VAN DAM</p>
						<p>PROFESSOR OF MECHNANICAL AND AEROSPACE ENGINEERING</p>
						<p>UNIVERSITY OF CALIFORNIA, DAVIS</p>
					</div>
				</div>
				<div className="OurHistory">
					<h2 className="secTitle"> Our History </h2>
					<p className="YearNum">2017</p>
					<p>In 2017-2018 OneLoop applied to SpaceX hyperloop competition. In this year the team was highly ambitious and in preparation for that competition implemented within the pod air bearings, linear induction motor (LIM) propulsion, eddy current brakes, friction brakes, and wheels. OneLoop was able to make it to top 40 through the preliminary design.</p>
					<div className="Popup2017">
						<p>It is important to mention that during this time the linear induction motor had not yet been perfected. However the team wanted to test their current version of the LIM as it is a system crucial for energy efficient long distance travel. The industrial air bearings were chosen at the time to allow travel over non ideal surfaces that had small cracks such as shop floors. The bearings can lift up to 1000 lbs making its potential payload particularly effective. </p>
					</div>
					<p className="YearNum">2018</p>
					<p>OneLoop produced a robust pod capable of reaching 100 mph that was designed with safety as a top priority. With the increased level of safety the team implemented in design, OneLoop managed to place 9th out of the 40 teams that entered the SpaceX competition of 2019. </p>
					<div className="Popup2018">
						<p>Safety standards such as OSHA and ASME were adhered to with the regards to pod design, testing, and operation whenever relevant. Furthermore, the year’s propulsion system was modified to be cold gas thrusters which was primarily chosen to reduce the pod’s high voltage requirements and increase electrical safety.</p>
					</div>
					<p className="YearNum">2019</p>
					<p>Due to the concerns created by COVID-19, there were no official announcements for SpaceX’s competition. The team switched to a two-year design cycle to adjust to these changes spending more of their time on research and simulations. The acquisition of sponsorship with ANSYS allowed the team to extensively simulate their pod models. With the help of computer aided software, the team was able to drastically improve their mathematical models as well as better ways to integrate the pod. </p>
				</div>
				
			</div>
		</React.Fragment>
	);
}

export default About_body;