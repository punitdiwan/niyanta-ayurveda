
import Link from "next/link";
import Layout from '../Components/Layout'
import CheckIcon from '@material-ui/icons/Check';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const Services = () => {
    return (
        <Layout>
            <div className="container_fluid">
                <div className="row bg_MeetSurgeon_img">
                </div>
                <div className="pt-4 pb-5 row" style={{ width: "100%" }}>
                    <div className="col-12 d-flex justify-content-center" style={{ fontFamily: "times", color: "#13bfb1" }}>
                        <h1 style={{ textAlign: "center" }} className="anim_serv"><b>  Only Top Quality Services</b></h1>
                    </div>
                </div>
                <div className="mt-5 row bg_color_meet" style={{ width: "100%" }}>
                    <div className="row d-flex justify-content-center" style={{ width: "100%" }} >
                        <div className="mt-4 mb-5 col-lg-4 col-md-6 col-sm-6 col-10 d-flex justify-content-center"   >
                            <div style={{ width: "100%" }} className="ml-4">
                                <div className="ml-5" style={{ width: "80%" }}>
                                    <div className="row d-flex justify-content-center" style={{ color: "white", fontFamily: "times" }}>
                                        <div className="pt-3 col-md-12 col-sm-12 justify-content-center bg_hover_services"
                                            style={{ backgroundColor: "#13bfb1", borderRadius: "0px 30px" ,transition: "0.7s" }}>
                                            <div className="col-sm-12 d-flex justify-content-center">
                                                <span style={{ backgroundColor: "white", borderRadius: "0px 15px" }} className="p-2">
                                                    <LocalHospitalIcon className="" style={{ height: "40px", width: "36px", color: "black" }} />
                                                </span>
                                            </div>
                                            <div className="pt-3 col-sm-12">
                                                <h6 style={{ textAlign: "center", fontSize: "19px" }}><b>Breast-Conditions</b></h6>
                                            </div>
                                            <center> <div className="line_anim"></div> </center>
                                            
                                            <div className="pt-3 col-sm-12">
                                                <h6 style={{ textAlign: "center", fontSize: "18px" }}>I manage both benign and malignant breast
                                                    conditions in the utmost professional way..........</h6>
                                            </div>
                                            <div className="pt-2 pb-4 col-sm-12 read_m_hover d-flex justify-content-center">
                                                <span
                                                    style={{ backgroundColor: "#dcdcdc", borderRadius: "0px 15px", color: "black" }}
                                                    className="p-2 read_m_hover">
                                                    <Link href="#">
                                                        <a className="pl-2 pr-2" style={{ color: "#444" }}>
                                                            READ MORE
                                                        </a>
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 mb-5 col-lg-4 col-md-6 col-sm-6 col-10 d-flex justify-content-center"   >
                            <div style={{ width: "100%" }} className="ml-4">
                                <div className="ml-5" style={{ width: "80%" }}>
                                    <div className="row d-flex justify-content-center" style={{ color: "white", fontFamily: "times" }}>
                                        <div className="pt-3 col-md-12 col-sm-12 justify-content-center bg_hover_services"
                                            style={{ backgroundColor: "#13bfb1", borderRadius: "0px 30px" ,transition: "0.7s" }}>
                                            <div className="col-sm-12 d-flex justify-content-center">
                                                <span style={{ backgroundColor: "white", borderRadius: "0px 15px" }} className="p-2">
                                                    <LocalHospitalIcon className="" style={{ height: "40px", width: "36px", color: "black" }} />
                                                </span>
                                            </div>
                                            <div className="pt-3 col-sm-12">
                                                <h6 style={{ textAlign: "center", fontSize: "19px" }}><b>Breast-Conditions</b></h6>
                                            </div>
                                            <center> <div className="line_anim"></div> </center>
                                            <div className="pt-3 col-sm-12">
                                                <h6 style={{ textAlign: "center", fontSize: "18px" }}>I manage both benign and malignant breast
                                                    conditions in the utmost professional way..........</h6>
                                            </div>
                                            <div className="pt-2 pb-4 col-sm-12 read_m_hover d-flex justify-content-center">
                                                <span
                                                    style={{ backgroundColor: "#dcdcdc", borderRadius: "0px 15px", color: "black" }}
                                                    className="p-2 read_m_hover">
                                                    <Link href="#">
                                                        <a className="pl-2 pr-2" style={{ color: "#444" }}>
                                                            READ MORE
                                                        </a>
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 mb-5 col-lg-4 col-md-6 col-sm-6 col-10 d-flex justify-content-center"   >
                            <div style={{ width: "100%" }} className="ml-4">
                                <div className="ml-5" style={{ width: "80%" }}>
                                    <div className="row d-flex justify-content-center" style={{ color: "white", fontFamily: "times" }}>
                                        <div className="pt-3 col-md-12 col-sm-12 justify-content-center bg_hover_services"
                                            style={{ backgroundColor: "#13bfb1", borderRadius: "0px 30px" ,transition: "0.7s" }}>
                                            <div className="col-sm-12 d-flex justify-content-center">
                                                <span style={{ backgroundColor: "white", borderRadius: "0px 15px" }} className="p-2">
                                                    <LocalHospitalIcon className="" style={{ height: "40px", width: "36px", color: "black" }} />
                                                </span>
                                            </div>
                                            <div className="pt-3 col-sm-12">
                                                <h6 style={{ textAlign: "center", fontSize: "19px" }}><b>Breast-Conditions</b></h6>
                                            </div>
                                            <center> <div className="line_anim"></div> </center>
                                            <div className="pt-3 col-sm-12">
                                                <h6 style={{ textAlign: "center", fontSize: "18px" }}>I manage both benign and malignant breast
                                                    conditions in the utmost professional way..........</h6>
                                            </div>
                                            <div className="pt-2 pb-4 col-sm-12 read_m_hover d-flex justify-content-center">
                                                <span
                                                    style={{ backgroundColor: "#dcdcdc", borderRadius: "0px 15px", color: "black" }}
                                                    className="p-2 read_m_hover">
                                                    <Link href="#">
                                                        <a className="pl-2 pr-2" style={{ color: "#444" }}>
                                                            READ MORE
                                                        </a>
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 mb-5 col-lg-4 col-md-6 col-sm-6 col-10 d-flex justify-content-center"   >
                            <div style={{ width: "100%" }} className="ml-4">
                                <div className="ml-5" style={{ width: "80%" }}>
                                    <div className="row d-flex justify-content-center" style={{ color: "white", fontFamily: "times" }}>
                                        <div className="pt-3 col-md-12 col-sm-12 justify-content-center bg_hover_services"
                                            style={{ backgroundColor: "#13bfb1", borderRadius: "0px 30px",transition: "0.7s" }}>
                                            <div className="col-sm-12 d-flex justify-content-center">
                                                <span style={{ backgroundColor: "white", borderRadius: "0px 15px" }} className="p-2">
                                                    <LocalHospitalIcon className="" style={{ height: "40px", width: "36px", color: "black" }} />
                                                </span>
                                            </div>
                                            <div className="pt-3 col-sm-12">
                                                <h6 style={{ textAlign: "center", fontSize: "19px" }}><b>Breast-Conditions</b></h6>
                                            </div>
                                            <center> <div className="line_anim"></div> </center>
                                            <div className="pt-3 col-sm-12">
                                                <h6 style={{ textAlign: "center", fontSize: "18px" }}>I manage both benign and malignant breast
                                                    conditions in the utmost professional way..........</h6>
                                            </div>
                                            <div className="pt-2 pb-4 col-sm-12 read_m_hover d-flex justify-content-center">
                                                <span
                                                    style={{ backgroundColor: "#dcdcdc", borderRadius: "0px 15px", color: "black" }}
                                                    className="p-2 read_m_hover">
                                                    <Link href="#">
                                                        <a className="pl-2 pr-2" style={{ color: "#444" }}>
                                                            READ MORE
                                                        </a>
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 mb-5 col-lg-4 col-md-6 col-sm-6 col-10 d-flex justify-content-center"   >
                            <div style={{ width: "100%" }} className="ml-4"> 
                                <div className="ml-5" style={{ width: "80%" }}>
                                    <div className="row d-flex justify-content-center" style={{ color: "white", fontFamily: "times" }}>
                                        <div className="pt-3 col-md-12 col-sm-12 justify-content-center bg_hover_services"
                                            style={{ backgroundColor: "#13bfb1", borderRadius: "0px 30px",transition: "0.7s" }}>
                                            <div className="col-sm-12 d-flex justify-content-center">
                                                <span style={{ backgroundColor: "white", borderRadius: "0px 15px" }} className="p-2">
                                                    <LocalHospitalIcon className="" style={{ height: "40px", width: "36px", color: "black" }} />
                                                </span>
                                            </div>
                                            <div className="pt-3 col-sm-12">
                                                <h6 style={{ textAlign: "center", fontSize: "19px" }}><b>Breast-Conditions</b></h6>
                                            </div>
                                            <center> <div className="line_anim"></div> </center>
                                            <div className="pt-3 col-sm-12">
                                                <h6 style={{ textAlign: "center", fontSize: "18px" }}>I manage both benign and malignant breast
                                                    conditions in the utmost professional way..........</h6>
                                            </div>
                                            <div className="pt-2 pb-4 col-sm-12 read_m_hover d-flex justify-content-center">
                                                <span
                                                    style={{ backgroundColor: "#dcdcdc", borderRadius: "0px 15px", color: "black" }}
                                                    className="p-2 read_m_hover">
                                                    <Link href="#">
                                                        <a className="pl-2 pr-2" style={{ color: "#444" }}>
                                                            READ MORE
                                                        </a>
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 mb-5 col-lg-4 col-md-6 col-sm-6 col-10 d-flex justify-content-center"   >
                            <div style={{ width: "100%" }} className="ml-4"> 
                                <div className="ml-5" style={{ width: "80%" }}>
                                    <div className="row d-flex justify-content-center" style={{ color: "white", fontFamily: "times" }}>
                                        <div className="pt-3 col-md-12 col-sm-12 justify-content-center bg_hover_services"
                                            style={{ backgroundColor: "#13bfb1", borderRadius: "0px 30px" ,transition: "0.7s"}}>
                                            <div className="col-sm-12 d-flex justify-content-center">
                                                <span style={{ backgroundColor: "white", borderRadius: "0px 15px" }} className="p-2">
                                                    <LocalHospitalIcon className="" style={{ height: "40px", width: "36px", color: "black" }} />
                                                </span>
                                            </div>
                                            <div className="pt-3 col-sm-12">
                                                <h6 style={{ textAlign: "center", fontSize: "19px" }}><b>Breast-Conditions</b></h6>
                                            </div>
                                            <center> <div className="line_anim"></div> </center>
                                            <div className="pt-3 col-sm-12">
                                                <h6 style={{ textAlign: "center", fontSize: "18px" }}>I manage both benign and malignant breast
                                                    conditions in the utmost professional way..........</h6>
                                            </div>
                                            <div className="pt-2 pb-4 col-sm-12 read_m_hover d-flex justify-content-center">
                                                <span
                                                    style={{ backgroundColor: "#dcdcdc", borderRadius: "0px 15px", color: "black" }}
                                                    className="p-2 read_m_hover">
                                                    <Link href="#">
                                                        <a className="pl-2 pr-2" style={{ color: "#444" }}>
                                                            READ MORE
                                                        </a>
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default Services;