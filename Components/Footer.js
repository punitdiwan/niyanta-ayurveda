import Link from "next/link";
import useSWR from "swr"; 
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Footer = () => {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/config?fields=*,logo.data.full_url`;
  const { data, error } = useSWR(url, fetcher); 
  return (
    <div className="container_fluid footer_bg_clr">
      <div className="container">
        <div className="row pb-2">
          <div className="col-sm-6 mt-3 text-light">
            <h3 style={{ color: "black", fontFamily: "fantasy" }}>
              <b> Links </b>
            </h3>
            <div className="row">
              <div className="col-sm-3 col-4">
                <ul>
                  <li>
                    <Link href="/">
                      <a className="text-light" style={{ fontSize: "13px" }}>
                        HOME
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/AboutUs">
                      <a className="text-light" style={{ fontSize: "13px" }}>
                        ABOUT&#160;US
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/Hijama">
                      <a className="text-light" style={{ fontSize: "13px" }}>
                        HIJAMA
                      </a>
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

              <div className="col-sm-6 col-7">
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
            <div className="row pt-2 pb-2 ">
              <div className="col-sm-2 col-4 text-center">
                <Link href="https://www.facebook.com/Yadav.sanjay473">
                  <a target="_blank">
                    <img
                      src="/images/fb.png "
                      style={{ width: "35px", height: "35px" }}
                    />
                  </a>
                </Link>
              </div>
              <div className="col-sm-2 col-4 text-center">
                <Link href="https://www.instagram.com/dr.sanjay_yadav?r=nametag">
                  <a target="_blank">
                    <img
                      src="/images/insta.png "
                      style={{ width: "35px", height: "35px" }}
                    />
                  </a>
                </Link>
              </div>
              <div className="col-sm-2 col-4 text-center">
                <Link href="https://youtu.be/SqQ4ryagmyc">
                  <a target="_blank">
                    <img
                      src="/images/yutb.png "
                      style={{ width: "35px", height: "35px" }}
                    />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-6 mt-3 mb-3  " style={{ color: "#ffffff" }}>
            <h3 style={{ color: "black", fontFamily: "fantasy" }}>
              <b>Contact Info </b>{" "}
            </h3>
            <p className="mt-3  ">
              Address :{data?.data[0]?.address}
              <br />
              Postal Code : 463106
              <br />
              City : Bhopal
              <br />
              Country : INDIA
              <br />
              Phone : {data?.data[0]?.phone}, {data?.data[0]?.mobile}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
