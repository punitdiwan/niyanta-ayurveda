
import Link from "next/link";
import Layout from '../Components/Layout'

const ContactUs = () => {
    return (
        <Layout>
            <div className="container-fluid bg_color_home2" style={{ color: "black" }}>
                <div className="container">
                    <div class="row ">
                        <div className="col-sm-6">
                            <br /><br />
                            <h3 style={{ color: "#983d00" }}>Contact Us</h3>
                            <p><span>
                            </span></p><h4>Incredible Ayurveda Clinic </h4>
                            <h4>Dr. Sanjay Yadav</h4>
                             <br />
                           Maitretech Madhya Pradesh, INDIA<br /><br />
                            <strong>Email&#160;: </strong>dr.sanjay.yadav20@gmail.com<br />
                            <strong>Tel :</strong> +91-9425377397, +91-9039113916
                        </div>

                        <div className="col-sm-6">
                            <br /><br />
                            <h2>Get in touch with us</h2>
                            <form action="submit.php" method="post">
                                <div className="my-2">
                                    Name : <input name="name" type="text" id="name"
                                        autocomplete="off" />

                                </div>

                                <div className="my-2">
                                Email  &#160;: <input name="name" type="text" id="name"
                                        autocomplete="off" />

                                </div>
                                <div className="my-2">
                                Mobile: <input name="name" type="text" id="name"
                                        autocomplete="off" />

                                </div>

                                <div className="my-2  ">
                              <span>  Message :</span> <textarea name="name" type="text" id="name"
                                        autocomplete="off" />

                                </div>

                                 
                                 
                                
                                <tr>
                                    <td>&nbsp;</td>
                                    <td><input name="" type="submit" value="Submit" />&#160;
                                        <input name="" type="reset" value="Reset" /></td>
                                </tr>

                            </form>
                        </div>
                        
                        <div className="col-sm-12">
                        <br/> <br/> 
                            <h2>Locate Us</h2>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14661.713217675751!2d77.380641!3d23.263882!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7797f29e5e387a46!2sIncredible+Ayurveda!5e0!3m2!1sen!2sin!4v1538299453280"
                                style={{ width: "100%", height: "350px" }} frameborder="0" allowfullscreen=""></iframe>

                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}
export default ContactUs;