
import Link from "next/link";
import Layout from '../Components/Layout'
import CheckIcon from '@material-ui/icons/Check';
import Image from 'next/image'

const BookAnApointment = () => {
    return (
        <Layout>
            <div className="container-fluid bg_color_home1">
                <div className="container"> 
                    <div className="row ">
                        <div className="col-lg-3"></div>
                        <div className="col-sm-6">
                            <h3 style={{ color: "#983d00" }}>Appointments</h3>
                            <p><span>
                            </span></p><h4 style={{ color: "#983d00" }}>Incredible Ayurveda Clinic </h4>
                            {/* <h5>Dr.Demo1  
                                
                            </h5>
                            Sun - Fri (3:00 PM - 9:00 PM) <br />
                            Sat (Weekly Off) <br /> */}
                            <h5>Dr. Sanjay Yadav</h5>
                            Timing : 10am to 3pm
                            <br />
                            &#160;&#160;&#160;&#160;
                            &#160;&#160;&#160;&#160;
                            &#160;&#160;&#160;
                            5pm to 8 pm <br /><br />
                        </div>
                        <div className="col-lg-3 mt-4">
                        <h5 style={{ color: "#983d00" }}>Registration number : 57393</h5></div>
                        <div className="row">
                            <div className="col-lg-3">

                            </div>
                            <div className="col-sm-6">


                                <h3 style={{ color: "#983d00" }}>Book an Appointment</h3>
                                <label><strong><span style={{ color: "red" }}></span></strong></label>
                                <form action="appointments_submit.php" method="post">
                                    <div className="py-2">
                                        <strong>Patient Name :&#160;&#160; </strong>
                                        <input name="name" required="" type="text" id="name" size="" />
                                    </div>
                                    <div>
                                        <strong>Patient Mobile :&#160;&#160;</strong>
                                        <input name="mobile" required="" type="text" id="mobile" s
                                            ize="10" maxlength="10" pattern="[0-9]{10}" />
                                    </div>
                                    <div>
                                        <strong>Patient Gender : &#160;&#160;</strong>
                                        <br/>
                                        <input name="gender" required="" type="radio" id="gender" value="Male" /><label for="Male">Male</label>
                                        &#160;  <input name="gender" required="" type="radio" id="gender"
                                            value="Female" /><label for="Female">Female</label>
                                        &#160;
                                        {/* <input name="gender" required="" type="radio" id="gender"
                                         value="Others" /><label for="Others">Others</label> */}
                                    </div>

                                    <div style={{marginTop:"10px"}}>
                                        <strong>Patient Age (in Years) :&#160;&#160;</strong>
                                        <input name="age" required="" type="number" id="age" size="10" maxlength="3" min="1" max="130" />
                                    </div>
                                    &#160;
                                    <div>
                                        <strong>City: &#160; &#160; </strong>

                                        <input name="city" required="" type="text" id="city" />

                                    </div>
                                    <div style={{marginTop:"10px"}}>
                                        <strong  >Appointment with Doctor : &#160; &#160;</strong>

                                        <select name="doctor" required="" id="doctor">
                                            <option value="">Select Doctor</option>
                                            <option value="1">Dr. Sanjay Yadav</option>
                                        </select>
                                    </div>

                                    <div style={{marginTop:"10px"}}> 
                                        <strong>Appointment Date : </strong>
                                        <select name="appdate" required="" id="appdate">
                                            <option value="">Select Doctor First</option>
                                        </select>
                                    </div>
                                    <div style={{marginTop:"10px"}}>
                                        <strong>Appointment Time: </strong>
                                        <select name="apptime" required="" id="apptime">
                                            <option value="">Select Date First</option>
                                        </select>
                                    </div>
                                    &#160;
                                    <div>
                                        <input name="submit" type="submit" id="submit" value="Submit" />
                                    </div>


                                </form>
                            </div>
                            <div className="col-lg-3">

                            </div>
                        </div>

                        <p></p>

                    </div>
                </div>
            </div >
        </Layout >
    )
}
export default BookAnApointment;