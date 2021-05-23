import "./join_body.css";
import React, { useEffect } from "react";
import { Switch } from "react-router";

const Join_body = () => {
  return (
    <React.Fragment>

    <div className="oneloop-joinus-topcontainer">
      <div className="oneloop-joinus-title"> Contact Us </div>
      <div className="oneloop-joinus-heading25"> INTERESTED IN GAINING HANDS-ON EXPERIENCE? <br /> JOIN THE TEAM! </div>
    </div>

    <div className="oneloop-joinus">
      <h1 className="oneloop-joinus-heading1"> 
        <a href='#workwithus'> 
          Work with Us 
        </a>  
        | 
        <a href='#joinus'> 
          Join Us  
        </a> 
      </h1>
    </div>

    <div className="oneloop-joinus-contact" section id = 'workwithus'>
      <form action="/"className="joinus-contact">
        <label for="name">Name:<br /></label>
        <input type="text" id="name" name="Fullname"></input><br />

        <label for="email"> Email:<br /></label>
        <input type="text" id="email" name="email_address"></input><br />

        <label for="Message">Message:<br /></label>
        <textarea className="Apply_message" placeholder="Type message here"></textarea>
      </form>
      <button className="JoinUs_button">Submit<br /></button>
    </div>

    <div className = "oneloop-joinus-section" section id = 'joinus' > 
      <div className="oneloop-joinus-basic-qualifications">
        <h2 className="oneloop-joinus-heading1"> Basic Qualifications </h2>
        <li className="BasicQ"> Currently pursuing an undergraduate or graduate degree at UC Davis </li>
        <li className="BasicQ"> $40/year dues </li>
        <li className="BasicQ"> 4hr/week minimum commitment (weekly subteam meetings and individual projects) </li>
        <li className="BasicQ"> Accountable for projects assigned by leads and willing to learn; proactive </li>
      </div>

      <div className="oneloop-joinus-application">
          <h2 className="Application_title"> OneLoop New Member Application </h2>
          <body>
            <form action="/" className="Application">
              <label for="name"><b>Name:</b><br /> </label>
              <input type="text" id="name" name="Fullname" className="apply_input"></input><br />

              <label for="year"><b>Year:</b><br /> </label>
              <input type="text" id="name" name="Fullname" className="apply_input"></input><br />

              <label for="major"><b>Major:</b><br /> </label>
              <input type="text" id="name" name="Fullname" className="apply_input"></input><br />

              <label for="email"><b>UC Davis Email:</b><br /> </label>
              <input type="text" id="email" name="email_address" className="apply_input"></input><br />

              <label for="gpa"><b>GPA</b>    <i className="optional">(optional):</i> <br /> </label>
              <input type="text" id="email" name="email_address" className="apply_input"></input><br />

              <div className="resume_letter">
                <label for="Resume"><b>Resume</b><br /> </label>
                <button className="addfile_button">Add file</button><br />
                <label for="Coverletter"><b>Cover Letter</b>   <i className="optional">(optional)</i> <br /> </label>
                <button className="addfile_button">Add file</button><br />
              </div>

              <label for="Message" className="Q_s" >
                How many hours a week will you be able to commit to OneLoop?
              </label><br />
              <textarea className="Apply_message"></textarea>
            </form><br />

            <form action="/" className="Questionnare">
              <div className="Question1">
                <label for="Q1" className="Q_s">
                  Which subteams are you interested in? For more information about
                  each subteam use this link:{" "}
                 
                </label>
                <div>
                <label className="apply"><i>Select all that apply</i></label>
                </div>
             
                <input
                  type="checkbox"
                  id="subteam1"
                  name="subteam1"
                  value="Brakes"
                />
                <label for="subteam1">Brakes</label>
                <br></br>

                <input
                  type="checkbox"
                  id="subteam2"
                  name="subteam2"
                  value="Business"
                />
                <label for="subteam2">Business</label>
                <br></br>

                <input
                  type="checkbox"
                  id="subteam3"
                  name="subteam3"
                  value="Controls"
                />
                <label for="subteam3">Controls</label>
                <br></br>

                <input
                  type="checkbox"
                  id="subteam4"
                  name="subteam4"
                  value="Power"
                />
                <label for="subteam4">Power</label>
                <br></br>

                <input
                  type="checkbox"
                  id="subteam5"
                  name="subteam5"
                  value="Propulsion"
                />
                <label for="subteam5">Propulsion</label>
                <br></br>

                <input
                  type="checkbox"
                  id="subteam6"
                  name="subteam6"
                  value="Stability"
                />
                <label for="subteam6">Stability</label>
                <br></br>

                <input
                  type="checkbox"
                  id="subteam7"
                  name="subteam7"
                  value="Structures"
                />
                <label for="subteam7">Structures</label>
                <br></br>
              </div>

              <div className="Q1_space">
                <label for="Q1_text" className="Q_s">
                  If you chose multiple subteams, rank each subteam that you have
                  chosen. 1 = most interested
                </label><br />
                <textarea className="Apply_message"></textarea>
              </div>

              <div className="Question2">
                <label for="Q2" className="Q_s">Software you are familiar with: </label>
                <p className="apply"><i>Select all that apply</i></p>

                <input
                  type="checkbox"
                  id="software1"
                  name="software1"
                  value="Adobe Program"
                />
                <label for="software1">Adobe Program</label>
                <br></br>

                <input
                  type="checkbox"
                  id="software2"
                  name="software2"
                  value="Ansys Electromagnetic"
                />
                <label for="software2">Ansys Electromagnetic</label>
                <br></br>

                <input
                  type="checkbox"
                  id="software3"
                  name="software3"
                  value="Ansys Mechanical"
                />
                <label for="software3">Ansys Mechanical</label>
                <br></br>

                <input
                  type="checkbox"
                  id="software4"
                  name="software4"
                  value="Ansys Thermal"
                />
                <label for="software4">Ansys Thermal</label>
                <br></br>

                <input
                  type="checkbox"
                  id="software5"
                  name="software5"
                  value="HTML"
                />
                <label for="software5">HTML</label>
                <br></br>

                <input
                  type="checkbox"
                  id="software6"
                  name="software6"
                  value="MATLAB"
                />
                <label for="software6">MATLAB</label>
                <br></br>

                <input
                  type="checkbox"
                  id="software7"
                  name="software7"
                  value="MATLAB Simulink"
                />
                <label for="software7">MATLAB Simulink</label>
                <br></br>

                <input
                  type="checkbox"
                  id="software8"
                  name="software8"
                  value="Simens NX"
                />
                <label for="software8">Simens NX</label>
                <br></br>

                <input
                  type="checkbox"
                  id="software9"
                  name="software9"
                  value="Solidworks"
                />
                <label for="software9">Solidworks</label>
                <br></br>

                <input
                  type="checkbox"
                  id="software10"
                  name="software10"
                  value="Twincat3"
                />
                <label for="software10">Twincat3</label>
                <br></br>

                <input
                  type="checkbox"
                  id="software11"
                  name="software11"
                  value="N/A"
                />
                <label for="software11">N/A</label>
                <br></br>

                <input
                  type="checkbox"
                  id="software12"
                  name="software12"
                  value="Other"
                />
                <label for="software12">Other: </label>

                <input type="other_text" id="software12" name="software12" />
                <br></br>
              </div>

              <div className="Question3">
                <label for="Q3" className="Q_s">
                  Computer Programming Languages you are familiar with:
                </label>
                <p className="apply"><i>Select all that apply</i></p>

                <input
                  type="checkbox"
                  id="Language1"
                  name="Language1"
                  value="Python"
                />
                <label for="Language1">Python </label>
                <br></br>

                <input
                  type="checkbox"
                  id="Language2"
                  name="Language2"
                  value="JavaScript"
                />
                <label for="Language2">JavaScript </label>
                <br></br>

                <input
                  type="checkbox"
                  id="Language3"
                  name="Language3"
                  value="Java"
                />
                <label for="Language3">Java</label>
                <br></br>

                <input type="checkbox" id="Language4" name="Language4" value="C#" />
                <label for="Language4">C#</label>
                <br></br>

                <input type="checkbox" id="Language5" name="Language5" value="C" />
                <label for="Language5">C</label>
                <br></br>

                <input
                  type="checkbox"
                  id="Language6"
                  name="Language6"
                  value="C++"
                />
                <label for="Language6">C++</label>
                <br></br>

                <input
                  type="checkbox"
                  id="Language7"
                  name="Language7"
                  value="N/A"
                />
                <label for="Language7">N/A</label>
                <br></br>

                <input
                  type="checkbox"
                  id="Language8"
                  name="Language8"
                  value="Other"
                />
                <label for="Language8">Other: </label>

                <input type="other_text" id="Language8" name="Language8" />
                <br></br>
              </div>

              <div className="Question4">
                <label for="Q4" className="Q_s">Where did you hear about us?</label>
                <p className="apply"><i>Select all that apply</i></p>

                <input type="checkbox" id="hear1" name="hear1" value="Website" />
                <label for="hear1">Website</label>
                <br></br>
                <input type="checkbox" id="hear2" name="hear2" value="Instagram" />
                <label for="hear2">Instagram</label>
                <br></br>
                <input type="checkbox" id="hear3" name="hear3" value="Facebook" />
                <label for="hear3">Facebook</label>
                <br></br>
                <input type="checkbox" id="hear4" name="hear4" value="LinkedIn" />
                <label for="hear4">LinkedIn</label>
                <br></br>
                <input
                  type="checkbox"
                  id="hear5"
                  name="hear5"
                  value="From another member"
                />
                <label for="hear5">From another member</label>
                <br></br>
                <input type="checkbox" id="hear6" name="hear6" value="Professor" />
                <label for="hear6">Professor</label>
                <br></br>

                <input
                  type="checkbox"
                  id="hear7"
                  name="hear7"
                  value="Recruitment Flyer"
                />
                <label for="hear7">Recruitment Flyer</label>
                <br></br>

                <input type="checkbox" id="hear8" name="hear8" value="Discord" />
                <label for="hear8">Discord</label>
                <br></br>

                <input
                  type="checkbox"
                  id="hear9"
                  name="hear9"
                  value="Tabling Event"
                />
                <label for="hear9">Tabling Event</label>
                <br></br>
                <input type="checkbox" id="hear10" name="hear10" value="Other" />
                <label for="hear10">Other:</label>
                        <input
                  type="other_text"
                  id="hear10"
                  name="hear10"
                />

                <br></br>

              </div>
              <label for="team">Select a team:</label>
              <input type="text" id="team" name="team"></input>
    
            </form>
          </body>
        </div>
      </div>

    
    </React.Fragment>
  );
};

export default Join_body;
