import "./join_body.css";
import React, { useEffect } from "react";
import join_us_img from './DSC_0056F.jpg';

console.log(join_us_img);
const Join_body = () => {
  return (
    <React.Fragment>
      <div className="oneloop-join-body">
        <h1>This is for Ronvic, Nivrithi, and Raunak pt.2</h1>
        <h1 className="JoinUs_Title">Join Us</h1>
        <p>INTERESTED IN GAINING HANDS-ON EXPERIENCE? JOIN THE TEAM!</p>
      </div>
      <div className="Basic_Qualifications">
        <h1 className="JoinUs_Title">Basic Qualifications</h1>
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
        <h1 className="JoinUs_Title">How To Apply</h1>
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
        <h1 className="JoinUs_Title">Contact Us</h1>

        <form action="/">
          <label for="name"className="Join_Name">Name:</label>
          <input type="text" id="name" name="Fullname"></input>
          <label for="email">Email:</label>
          <input type="text" id="email" name="email_address"></input>
          <label for="Message">Message:</label>
          <input type="message_text" id="Message" name="Full_message"></input>
        </form>

        <button className="JoinUs_button">Submit</button>
      </div>
    </React.Fragment>
  );
};

export default Join_body;
