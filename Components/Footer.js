import Link from "next/link"
import FavoriteIcon from '@material-ui/icons/Favorite';

const Footer = () => {
    return (
        <div className="container_fluid" style={{ background: "black" }}>
            <div className="container">
                <div className=" row ">
                    <div className="col-sm-6 mt-5 text-light"  >
                        <h3 style={{ color: "#425cbb", fontFamily: "fantasy" }}>
                            <b> Links </b> </h3>
                        <h5 className=" " style={{ fontSize: "12px" }}>
                            Terms & Conditions
                            Privacy Policy
                            Sitemap
                        </h5>
                    </div>
                    <div className="col-sm-6 mt-5" style={{ color: "#ffffff" }}>
                         
                        <h3 style={{ color: "#425cbb", fontFamily: "fantasy" }}>
                            <b>Contact Info </b> </h3>
                        <p>Address :Laxminarayan nagar, Berasia, Bhopal, Madhya Pradesh, India
                            <br/>
                            Postal Code : 463106
                            <br/>
                            City : Bhopal
                            <br/>
                            Country : INDIA
                            <br/>
                            Phone : +91-9039113916, +91-9425377397</p>

                    </div>



                </div>
            </div>


        </div>
    )
}
export default Footer;