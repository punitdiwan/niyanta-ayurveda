import Link from "next/link";
import Layout from "../Components/Layout";
import useSWR from "swr";
import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const ContactUs = () => {
  const { addToast } = useToasts();

  const [yourname, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const [nameErr, setNameErr] = useState({});
  const [emailErr, setEmailErr] = useState({});
  const [mobileErr, setMobileErr] = useState({});
  const [messageErr, setMessageErr] = useState({});

  var pattern = new RegExp(/^[0-9\b]+$/);

  const detail_data = `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`;
  const { data, error } = useSWR(detail_data, fetcher);

  const submit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
    if (isValid) {
      fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/contact_form`,
        {
          method: "POST",
          body: JSON.stringify({ full_name: yourname, email, mobile, message }),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        }
      )
        .then((response) => {
          response.json();
          if (response.status === 200) {
            setName("");
            setEmail("");
            setMobile("");
            setMessage("");
          }
        })
        .then((json) =>
          addToast("form submitted Sucessfully", {
            appearance: "success",
            autoDismiss: true,
          })
        )
        .catch((err) => console.log(err));
    }
  };


  const formValidation = () => {
    const nameErr = {};
    const emailErr = {};
    const mobileErr = {};
    const messageErr = {};
    let isValid = true;

    if (yourname === "") {
      nameErr.firstNameEmpty = "Name is required";
      isValid = false;
    } else if (yourname.trim().length < 3) {
      nameErr.firstNameShort = "Full name is too short";
      isValid = false;
    }
    if (email === "") {
      emailErr.emailEmpty = "Email is required";
      isValid = false;
    } else if (!email.includes("@")) {
      emailErr.emailerror = "You have entered a wrong email";
      isValid = false;
    }
    if (mobile === "") {
      mobileErr.mobileEmpty = "Contact is required";
      isValid = false;
    } else if (!pattern.test(mobile)) {
      mobileErr.mobilenumbershort = "Mobile number should be numeric";
      isValid = false;
    } else if (mobile.trim().length != 10) {
      mobileErr.mobilenumbershort = "Mobile number should be in ten digit";
      isValid = false;
    }
    if (message === "") {
      messageErr.messageEmpty = "Message is required";
      isValid = false;
    } else if (message.trim().length < 5) {
      messageErr.mobilenumbershort = "Message length should be 5 words or more";
      isValid = false;
    }
    setNameErr(nameErr);
    setEmailErr(emailErr);
    setMobileErr(mobileErr);
    setMessageErr(messageErr);
    return isValid;
  };

  return (
    <Layout>
      <div
        className="container-fluid bg_color_home2"
        style={{ color: "black" }}
      >
        <div className="container">
          <div class="row ">
            <div className="col-sm-6">
              <br />
              <br />
              <h3 style={{ color: "#983d00" }}>Contact Us</h3>
              <p>
                <span></span>
              </p>
              <h4>Incredible Ayurveda Clinic </h4>
              <h4>Dr. Sanjay Yadav</h4>
              <br />
              Address : {data?.data[0]?.address}
              <br />
              <br />
              <strong>Email&#160;: </strong>
              {data?.data[0]?.email}
              <br />
              <strong>Tel :</strong> {data?.data[0]?.phone},{" "}
              {data?.data[0]?.mobile}
              <br />
              <br />
              <div className="row">
                <div className="col-sm-12  upi_scanner">
                  <img src="/images/upiscanner.jpeg" className="upi_scanner1" />

                  <div className="upi_id mt-3">
                    <p className="text-light p-4">
                      <b>UPI ID : sanjayyadav13723@ibl</b>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6">
              <br />
              <br />
              <h2>Get in touch with us</h2>

              <div class="row">
                <div class="col-25">
                  <label for="fname"> Name</label>
                </div>
                <div class="col-75">
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    value={yourname}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name.."
                  />
                </div>
                {Object.keys(nameErr).map((key) => {
                  return (
                    <div
                      style={{
                        color: "red",
                        fontWeight: "700",
                        fontSize: "15px",
                      }}
                    >
                      {nameErr[key]}
                    </div>
                  );
                })}
              </div>
              <div class="row">
                <div class="col-25">
                  <label for="lname"> Email</label>
                </div>
                <div class="col-75">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email.."
                  />
                </div>
                {Object.keys(emailErr).map((key) => {
                  return (
                    <div
                      style={{
                        color: "red",
                        fontWeight: "700",
                        fontSize: "15px",
                      }}
                    >
                      {emailErr[key]}
                    </div>
                  );
                })}
              </div>
              <div class="row">
                <div class="col-25">
                  <label for="lname"> Phone</label>
                </div>
                <div class="col-75">
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Your Phone.."
                  />
                </div>
                {Object.keys(mobileErr).map((key) => {
                  return (
                    <div
                      style={{
                        color: "red",
                        fontWeight: "700",
                        fontSize: "15px",
                      }}
                    >
                      {mobileErr[key]}
                    </div>
                  );
                })}
              </div>

              <div class="row">
                <div class="col-25">
                  <label for="subject">Subject</label>
                </div>
                <div class="col-75">
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something.."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ height: "100px" }}
                  />
                </div>
                {Object.keys(messageErr).map((key) => {
                  return (
                    <div
                      style={{
                        color: "red",
                        fontWeight: "700",
                        fontSize: "15px",
                      }}
                    >
                      {messageErr[key]}
                    </div>
                  );
                })}
              </div>
              <br />
              <div class="row">
                <input type="submit" onClick={submit} value="Submit" />
              </div>
            </div>

            <div className="col-sm-12">
              <br /> <br />
              <h2>Locate Us</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14661.713217675751!2d77.380641!3d23.263882!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7797f29e5e387a46!2sIncredible+Ayurveda!5e0!3m2!1sen!2sin!4v1538299453280"
                style={{ width: "100%", height: "350px" }}
                frameborder="0"
                allowfullscreen=""
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default ContactUs;
