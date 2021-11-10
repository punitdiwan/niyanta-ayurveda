
import Link from "next/link";
import Layout from '../Components/Layout'
import CheckIcon from '@material-ui/icons/Check';
import Image from 'next/image' 
const MeetSurgeon = () => {
    return (
        <Layout>
            <div className="container_fluid">
                <div className="row bg_MeetSurgeon_img">
                </div>
                <div className="pt-4 pb-5 row" style={{ width: "100%" }}>
                    <div className="col-12 d-flex justify-content-center" style={{ fontFamily: "times", color: "#13bfb1" }}>
                        <h1 style={{ textAlign: "center" }} className="anim_serv"><b>  My Professional Synopsis</b></h1>
                    </div>
                </div>
                <div className="container mb-5">
                    <div className="row" style={{ width: "100%" }}>
                        <div className="col-sm-5 col-12">
                            <Image src="/images/drimg1.png" alt="no_img" style={{ width: "100%" }} />
                        </div>
                        {/* <div className="col-sm-1 col-12">
                            <button  style={{borderRadius:"18px"}}>
                             </button > 
                             </div> */}
                        <div className="col-sm-7 col-12" style={{ fontFamily: "times", fontSize: "15px" }}>
                            <div className="row circle_row" style={{ width: "100%" }}>
                            <div className="col-sm-1 circle_hover mt-2 "><center><button></button></center></div>
                                <div className="col-sm-11 float_left_anim">
                                    <h5>
                                        Education
                                    </h5>
                                    <p style={{ color: "#626262" }}>I obtained my undergraduate medical degree (MD) with honours from an EU country. After working for five years
                                        overseas. I came to New Zealand and undertook five years’ general surgical training and in General Surgery
                                        by Royal Australasian College of Surgeons (RACS) in 2014. In year 2017, I undertook 2 years’ post-fellowship
                                        (sub-specialist) training (PFT) in “Breast Oncoplastic and Endocrine Surgery” with The Breast Society of Australia
                                        and New Zealand (BreastSurg ANZ). I was also trained to manage endocrine surgery conditions i.e. thyroid, parathyroid,
                                        and adrenal glands. I also learnt to manage surgical conditions of salivary glands
                                        (parotid and submandibular glands), skin cancers including melanoma as well as soft tissue sarcoma.</p>
                                </div>
                            </div>
                            <div className="row circle_row">
                                <div className="col-sm-1 circle_hover mt-2 "><center><button></button></center></div>
                                <div className="col-sm-11 float_left_anim">
                                    <h5>
                                        Achievements
                                    </h5>
                                    <p style={{ color: "#626262" }}>I was awarded “FRACS” in General Surgery by Royal Australasian College of Surgeons (RACS).In 2014, in year 2016 I was a staff specialist in Bundaberg hospital in Queensland). I am also GESA (Gastroenterology Society of Australia) certified.And for 2nd year (2018) I was appointed in Nepean Public hospital in Sydney.
                                    </p>
                                </div>
                            </div>
                            <div className="row circle_row">
                            <div className="col-sm-1 circle_hover mt-2 "><center><button></button></center> </div>
                                <div className="col-sm-11 float_left_anim">
                                    <h5>
                                        Experienece
                                    </h5>
                                    <p style={{ color: "#626262" }}>I obtained my undergraduate medical degree (MD) with honours from an EU country. After working for five years
                                        overseas. I came to New Zealand and undertook five years’ general surgical training and in General Surgery
                                        by Royal Australasian College of Surgeons (RACS) in 2014. In year 2017, I undertook 2 years’ post-fellowship
                                        (sub-specialist) training (PFT) in “Breast Oncoplastic and Endocrine Surgery” with The Breast Society of Australia
                                        and New Zealand (BreastSurg ANZ). I was also trained to manage endocrine surgery conditions i.e. thyroid, parathyroid,
                                        and adrenal glands. I also learnt to manage surgical conditions of salivary glands
                                        (parotid and submandibular glands), skin cancers including melanoma as well as soft tissue sarcoma.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mt-5 row bg_color_meet" style={{ width: "100%" }}>
                    <div className="row d-flex justify-content-center" style={{ width: "100%" }}>
                        <div className="mt-4 col-sm-4" >
                            <div className="float-end" style={{ width: "85%" }}>
                                <div className="row " style={{ color: "white", fontFamily: "times" }}>
                                    <div className="pt-3 pb-3 col-md-12 col-sm-12 justify-content-center" style={{ backgroundColor: "#13bfb1" }}>
                                        <h5 className="pb-3" style={{ textAlign: "center" }}>A PERSONAL APPROACH</h5>

                                        <p>I practice evidence based medicine and tend to have a holistic approach in managing patients
                                            with a surgical condition. My usual intentions are to empower you with an understanding of
                                            your condition and wellness plan
                                            .</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="mt-4 mb-5 col-sm-4 d-flex justify-content-center"   >
                            <div className="" style={{ width: "85%" }}>
                                <div className="row d-flex justify-content-center" style={{ color: "white", fontFamily: "times" }}>
                                    <div className="pt-3 col-md-12 col-sm-12 justify-content-center" style={{ backgroundColor: "#13bfb1" }}>
                                        <h5 style={{ textAlign: "center" }}>AFFILIATIONS</h5>

                                        <div className="pt-3 pb-3 row">

                                            <div className="col-sm-2">
                                                <CheckIcon style={{ color: "black" }} />
                                            </div>
                                            <div className="col-sm-10">
                                                Fellow of Royal Australasian College of Surgeons (www.surgeons.org)
                                            </div>
                                            <div className="pt-3 col-sm-2">
                                                <CheckIcon style={{ color: "black" }} />
                                            </div>
                                            <div className="pt-3 col-sm-10">
                                                Fellow of Royal Australasian College of Surgeons (www.surgeons.org)
                                            </div>
                                            <div className="pt-3 col-sm-2">
                                                <CheckIcon style={{ color: "black" }} />
                                            </div>
                                            <div className="pt-3 col-sm-10">
                                                Fellow of Royal Australasian College of Surgeons (www.surgeons.org)
                                            </div>
                                            <div className="pt-3 col-sm-2">
                                                <CheckIcon style={{ color: "black" }} />
                                            </div>
                                            <div className="pt-3 col-sm-10">
                                                Fellow of Royal Australasian College of Surgeons (www.surgeons.org)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 mb-4 col-sm-4 float-start d-flex justify-content-center"   >
                            <div className="float-start" style={{ width: "85%" }}>
                                <div className=" rowd-flex justify-content-center" style={{ color: "white", fontFamily: "times" }}>
                                    <div className="pt-3 col-md-12 col-sm-12 justify-content-center" style={{ backgroundColor: "#13bfb1" }}>
                                        <h5 style={{ textAlign: "center" }}>LANGUAGES SPOKEN</h5>

                                        <div className="pt-3 pb-3 row">

                                            <div className="col-sm-2 col-4">
                                                <CheckIcon style={{ color: "black" }} />
                                            </div>
                                            <div className="col-sm-10 col-8">
                                                English
                                            </div>
                                            <div className="pt-3 col-sm-2 col-4">
                                                <CheckIcon style={{ color: "black" }} />
                                            </div>
                                            <div className="pt-3 col-sm-10 col-8">
                                                Hindi
                                            </div>
                                            <div className="pt-3 col-sm-2 col-4">
                                                <CheckIcon style={{ color: "black" }} />
                                            </div>
                                            <div className="pt-3 col-sm-10 col-8">
                                                Urdu
                                            </div>
                                            <div className="pt-3 col-sm-2 col-4">
                                                <CheckIcon style={{ color: "black" }} />
                                            </div>
                                            <div className="pt-3 col-sm-10 col-8">

                                                Punjabi
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
export default MeetSurgeon;