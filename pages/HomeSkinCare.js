
import Link from "next/link";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import PrintIcon from '@material-ui/icons/Print';
import LinkIcon from '@material-ui/icons/Link';
// import img from 'next/image'

const HomeSkinCare = () => {
    return (
        <>
            <div className="container_fluid bg_color_home2  ">
                <div className="container mt-5 ">
                    <div className="row m-0 p-0">
                        <div className="col-lg-6 m-0 p-0">
                            <img src="/images/wlcm1.png" style={{ width: "80%" }} alt="no_Image" />
                        </div>
                        <div className="col-lg-6  ">
                            <p className="  text-dark">WELCOME</p>
                            <div className="mt-3" style={{ border: "1px solid blue ", width: "34px" }}>
                            </div>

                            <p className=" mt-3" style={{ color: "#676767", fontSize: "15px", }}> 
                                Incredible Ayurveda Clinic is the true reflection of deep Ayurvedic insights.
                                It offers all the healing modalities of Ayurveda, ranging from Panchakarma
                                to Marma chikitsa.
                                <br /><br /> 
                                Incredible Ayurveda Clinic offers all the three streams of Ayurvedic
                                treatment-diet, day-to-day activities and drugs. The comprehensive
                                regimen includes counseling, consultation, dispensation of medicines
                                and special therapeutic measures. The wellness centre has got state of
                                art treatment rooms and spacious manufacturing units to have control on
                                quality of the services and medicines.
                                <br /><br />

                                All the therapies and medicines are advocated under the direct
                                supervision of
                                Dr Sanjay Yadav (B.A.M.S., D.N.H.E., C.A.F.E., C.N.C.C., F.R.H.C.)
                                with prior appointment.
                                <br /><br />
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default HomeSkinCare;