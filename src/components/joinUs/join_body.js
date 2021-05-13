import "./join_body.css";

import React, { useEffect } from "react";

const Join_body = () => {
  return (
    <React.Fragment>
      <div className="oneloop-join-body">
        <h1>This is for Ronvic, Nivrithi, and Raunak pt.2</h1>
        <h1>Join Us</h1>
        <p>INTERESTED IN GAINING HANDS-ON EXPERIENCE? JOIN THE TEAM!</p>
      </div>
      <div className="Basic_Qualifications">
        <h1>Basic Qualifications</h1>
        <li>
          Currently pursuing an undergraduate or graduate degree at UC Davis
        </li>
        <li>$40/year dues</li>
        <li>
          4hr/week minimum commitment(weekly subteam meetings and individual
          projects)
        </li>
        <li>
          Accountable for projects assigned by leads and willing to learn;
          proactive
        </li>
      </div>

      <div classname="How_to_Apply">
        <h1>How To Apply</h1>
        <li>
          Send an email to <a href="/">davishyperloop@gmail.com</a> with your
          resume, cover-letter and transcript
        </li>
        <li>
          If we think you are a good fit, we will get back to you with an
          interview offer
        </li>
      </div>

      <div className="Contact-Us">

		  <h1>Contact Us</h1>

		  <form action="/">
			  <label for ="name">Name:</label>
			  <input type="text" id="name" name="Fullname"></input>
			  <label for="email">Email:</label>
			  <input type="text" id="email" name="email_address"></input>
			  <label for="Message">Message:</label>
			  <input type="text" id="Message" name="Full_message"></input>
		  </form>
	  </div>
    </React.Fragment>
  );
};

export default Join_body;
