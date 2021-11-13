import Link from "next/link"
import { SRLWrapper } from "simple-react-lightbox";


const HomeWlcmVedios = () => {
    return (
        <div className="p-0 container-fluid bg_color_home21 m-0 ">
            <div className="container">
                <div className="row pt-4">
                    <div className="col-sm-6">
                        <h3 className="text-center  ">
                            <b>
                                Welcome to Niyanta Ayurveda
                            </b>
                        </h3>
                        <p className=" ">
                            Niyanta Ayurveda is a natural healing centre located in the heart of
                            the Niyanta Coast offering authentic Ayurveda services targeted to
                            individual health care.
                        </p>
                        <p className=" " >We are committed to the application of ancient healing practices
                            based on Ayurvedic principles to remedy modern diseases.</p>
                        <div className="text-center">
                            <img src="/images/logo4.png" style={{ width: "40%", height: "40%" }} />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <iframe width="100%" height="345"
                         src="https://www.youtube.com/embed/SqQ4ryagmyc">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default HomeWlcmVedios;