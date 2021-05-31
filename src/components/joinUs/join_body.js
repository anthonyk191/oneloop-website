import "./join_body.css";
import React, { useEffect } from "react";
import { Switch } from "react-router";
import contact_img from './contact_image.jpeg';

const Join_body = () => {
  return (
    <React.Fragment>

    <div className="oneloop-joinus-topcontainer">
      <div className="oneloop-joinus-title"> <h1> Contact Us </h1> </div>
      <img src={contact_img} className="contact_images"/><br />
      <div className="oneloop-joinus-heading25"> INTERESTED IN GAINING HANDS-ON EXPERIENCE? JOIN THE TEAM! </div>
    </div>

    <div className="oneloop-joinus">
      <h2 className="oneloop-joinus-heading1"> 
        <a href='#workwithus'className="join_link"> 
          Work with Us 
        </a>  
        | 
        <a href='#joinus'className="join_link"> 
          Join Us  
        </a> 
      </h2>
    </div>

    <div className="oneloop-joinus-contact" section id = 'workwithus'>
      <form action="/"className="joinus-contact">
        <label for="name"> Name:<br /></label>
        <input type="text" id="name" name="Fullname"className="contact_form"></input>
        <label for="email"> Email:<br /></label>
       
        <input type="text" id="email" name="email_address"className="contact_form"></input>

        <label for="Message">Message:<br /></label>
        <textarea className="Apply_message" placeholder="Type message here"></textarea>
      </form>
      <button className="JoinUs_button">Submit</button>
    </div>

    <div className = "oneloop-joinus-section" section id = 'joinus' > 
      <div className="oneloop-joinus-basic-qualifications">
        <h2 className="oneloop-joinus-heading1"> Basic Qualifications </h2>
        <li> Currently pursuing an undergraduate or graduate degree at UC Davis </li>
        <li> $40/year dues </li>
        <li> 4hr/week minimum commitment (weekly subteam meetings and individual projects) </li>
        <li> Accountable for projects assigned by leads and willing to learn; proactive </li>
      </div>

      <div className="oneloop-joinus-application">
          <h2 className="oneloop-joinus-applicationtitle"> OneLoop New Member Application </h2>
          <body>
            <form action="/" className="Application">
              <div className="oneloop-joinus-application-row1">

                <div className="oneloop-joinus-application-name">
                  <label for="name" className="form_inputs"><b>Name:</b></label>
                  <div className="oneloop-joinus-application-namebox">
                    <input type="text" id="name" name="Fullname" className="apply_input" ></input><br />
                  </div>
                </div>
            
                <div className="oneloop-joinus-application-year">
                  <label for="year"className="form_inputs"><b>Year: </b></label>
                  <div className="oneloop-joinus-application-yearbox">
                    <input type="text" id="name" name="Fullname" className="apply_input2"></input><br />
                  </div>
                </div>

                <div className="oneloop-joinus-application-major">
                  <label for="major"className="form_inputs"><b>Major:</b></label>
                  <div className="oneloop-joinus-application-majorbox">
                    <input type="text" id="name" name="Fullname" className="apply_input"></input><br />
                  </div>
                </div>
              </div>

              <div className="oneloop-joinus-application-row2">
                <div className="oneloop-joinus-application-email">
                  <label for="email"className="form_inputs"><b>UC Davis Email: </b> </label>
                  <div className="oneloop-joinus-application-emailbox">
                    <input type="text" id="email" name="email_address" className="apply_input"></input><br />
                  </div>
                </div> 

                <div className="oneloop-joinus-application-gpa">
                    <label for="gpa"className="form_inputs"><b>GPA</b>    <i className="optional">(optional):</i><br /></label>
                  <div className="oneloop-joinus-application-gpabox">
                    <input type="text" id="email" name="email_address" className="apply_input"></input>
                  </div>
                </div>
              </div>

              <div className="oneloop-joinus-application-resumecv">
                <br></br>
                <label for="Resume" className="addfile"><b>Resume</b><br /> </label><br />
                <button className="addfile_button">Add file</button><br /><br />
                <label for="Coverletter"className="addfile"><b>Cover Letter</b><i className="optional"> (optional)</i> <br /> <br /></label>
                <button className="addfile_button">Add file</button><br /><br />
              </div>

              <label for="Message" className="Q_s" >
                How many hours a week will you be able to commit to OneLoop?
              </label>
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
                <br></br><br />
              </div>

              <div className="Q1_space">
                <label for="Q1_text" className="Q_s">
                  If you chose multiple subteams, rank each subteam that you have
                  chosen. 1 = most interested
                </label><br />
                <textarea className="Apply_message"></textarea>
              </div>
              <br />
              <div className="Question2">
                <label for="Q2" className="Q_s">Software you are familiar with: </label>
                <div className="apply"><i>Select all that apply</i></div>

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
                <label for="software12" >Other:</label>

                <input type="other_text" id="software12" name="software12" className="Other_line"/>
                <br></br>
              </div>
              <br />
              <div className="Question3">
                <label for="Q3" className="Q_s">
                  Computer Programming Languages you are familiar with:
                </label>
                <div className="apply"><i>Select all that apply</i></div>

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
                <label for="Language8">Other:</label>

                <input type="other_text" id="Language8" name="Language8" className="Other_line"/>
                <br></br>
              </div>
              <br />
              <div className="Question4">
                <label for="Q4" className="Q_s">Where did you hear about us?</label>
                <div className="apply"><i>Select all that apply</i></div>

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
                <label for="hear10" >Other:</label>
                        <input
                  type="other_text"
                  id="hear10"
                  name="hear10"
                  className="Other_line"
                />

                <br></br>
                <br />
              </div>
            </form>
            <button className="JoinUs_button">Submit<br /></button>
          </body>
        </div>
      </div>

    
    </React.Fragment>
  );
};

export default Join_body;
