import './home_body.css';

import React, { useEffect } from 'react';
import Slideshow from './slideshow'

const Home_body = () =>{
	return(
		<React.Fragment>
			<div className="oneloop-home-body">

                <h1>What is OneLoop?</h1>

                <Slideshow/>
				
				<div class="home-section2">
				<h2>Our Mission</h2>
				<p>Our mission is to further explore Hyperloop Technologies by promoting faster, cleaner, and more energy efficient solutions to the transporation sector.
					We seek to achieve this through cultivating an environment that fosters continuous improvement, collaboration with industry professionals, and teamwork. </p>
				<p>	OneLoop was founded in 2016 by a group of engineering students at UC Davis in response to SpaceX's announcement of its annual hyperloop competition.
					OneLoop became one of the top 21 teams in the 2019 Hyperloop Pod Competition and was invited to the SpaceX HQ in Hawthorne to take part in the final round of the compeition.
					<em> Based on the number of tests passed, OneLoop placed 3rd in teh United States</em> and <em>top-ten in the world.</em>
				</p>
				
				</div>
				<div class="home-section3">
				<h2>We're building a high-speed vehicle for European Hyperloop Week</h2>
				<p>The Hyperloop is a novel form of low-cost, fast transportation, consisting of levitating pods propelled through a vacuum tube at transonic speeds. 
					The concept is projected to be able to transport passengers from San Francisco to Los Angeles in 30 minutes.</p>
				<p>To further research and innovation at the university level, European Hyperloop Week provides an opportunity for student teams, startups, and companies 
					to present their research and development in the field of Hyperloop.</p>
				<p>UC Davis was one of the top 21 teams that competed in the final round of the 2019 SpaceX Hyperloop Pod Competition. The team remarkably passed the full functional test at 
					SpaceX Headquarters in Hawthorne, California placing third in the United States and Top-Ten in the world. </p>
				<p>This year, Oneloop was one of 8 U.S. teams that passed the first round of the European Hyperloop Week competition, which will take place in Valencia, Spain in July.</p>
				</div>
				
				<div class="home-section4">
				<h2>What is European Hyperloop Week?</h2>
				<p>EHW is an international organization bringing together the world’s best university teams developing hyperloop systems. Their goal is to foster an ecosystem of innovation 
					and challenge in the hopes of strengthening the current infrastructure for hyperloop technology.</p>
				<p>For this competition, the 2020-2021 OneLoop Team is working to design a groundbreaking hyperloop pod, capable of traveling upwards of 350 miles per hour, featuring a propulsion system of 
					linear induction motors, variable frequency inverter, carbon fiber chassis, as well as an advanced control system using state of the art IPC technology from Beckhoff Automations.</p>
				<p>For more information visit <a href ="https://hyperloopweek.com/">https://hyperloopweek.com/</a></p>
				</div>
			
			</div>
		</React.Fragment>
	);
}

export default Home_body;