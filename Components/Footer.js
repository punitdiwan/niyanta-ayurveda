import Link from "next/link"
const Footer = () => {
    return (
        <div className="container_fluid" style={{ background: "#198754" }}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 mt-3 text-light"  >
                        <h3 style={{ color: "black", fontFamily: "fantasy" }}>
                            <b> Links </b>
                        </h3>
                        <div className="row">
                            <div className="col-sm-3">
                                <ul>
                                    <li>
                                        <Link href="/">
                                            <a className="text-light" style={{ fontSize: "13px" }}>HOME</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/AboutUs">
                                            <a className="text-light" style={{ fontSize: "13px" }}>ABOUT&#160;US</a>

                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Hijama">
                                            <a className="text-light" style={{ fontSize: "13px" }}>HIJAMA</a>

                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/Gallery">
                                            <a className="text-light" style={{ fontSize: "13px" }}>
                                                GALLERY
                                            </a>

                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-sm-6">
                                <ul>

                                    <li>
                                        <Link href="/Testimonials">
                                            <a className="text-light" style={{ fontSize: "13px" }}>
                                                TESTIMONIALS
                                            </a>

                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/BookAnApointment">
                                            <a className="text-light" style={{ fontSize: "13px" }}>
                                                BOOK&#160;AN&#160;APPOINTMENT
                                            </a>

                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="ContactUs">
                                            <a className="text-light" style={{ fontSize: "13px" }}>
                                                CONTACTS&#160;US
                                            </a>

                                        </Link>

                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row mb-4 ">
                            <div className="col-sm-2">
                                <Link href="https://www.facebook.com/Yadav.sanjay473">
                                    <a target="_blank">
                                        <img src="/images/fb.png " style={{ width: "35px", height: "35px" }} />
                                    </a>
                                </Link>

                            </div>
                            <div className="col-sm-2">
                                <Link href="/">
                                    <a target="_blank">
                                        <img src="/images/insta.png " style={{ width: "35px", height: "35px" }} />
                                    </a>
                                </Link>
                            </div>
                            <div className="col-sm-2">
                                <Link href="https://youtu.be/SqQ4ryagmyc">
                                    <a target="_blank">
                                        <img src="/images/yutb.png " style={{ width: "35px", height: "35px" }} />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-3 mb-3  " style={{ color: "#ffffff" }}>

                        <h3 style={{ color: "black", fontFamily: "fantasy" }}>
                            <b>Contact Info </b> </h3>
                        <p className="mt-3  ">Address :Laxminarayan nagar, Berasia, Bhopal, Madhya Pradesh, India
                            <br />
                            Postal Code : 463106
                            <br />
                            City : Bhopal
                            <br />
                            Country : INDIA
                            <br />
                            Phone : +91-9039113916, +91-9425377397</p>

                    </div>



                </div>
            </div>


        </div>
    )
}
export default Footer;