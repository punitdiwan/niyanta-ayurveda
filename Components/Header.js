

import Link from 'next/link'

const Header = () => {
    return (
        <div className="container-fluid">
            <div>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css" />
                <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/js/bootstrap.bundle.min.js"></script>
            </div>
            {/* <div style={{float:"right"}}>Registration number-57393</div> */}
            <div className="row ">
                <div className="  col-lg-3 col-md-8 col-sm-8 col-9 logo_img"
                    style={{ textAlign: "center" }}>
                    <Link href="#">
                        <a>
                            <img src="/images/logo4.jpeg" style={{ width: "70%", height: "80%" }} />

                        </a>
                    </Link>
                </div>
                <div className="pt-1 col-lg-9 col-md-12 col-sm-4 col-12 nav_main_menu ">
                    <div className="bg-dark nav_main_menu0"> 
                        <nav className=" navbar navbar-expand-md navbar-light bg-light
                         justify-content-center nav_main_menu1 pb-3"
                        style={{ backgroundColor: "transparent !important" }} 
                        >  
                            <div>
                                <button
                                    type="button"
                                    className="navbar-toggler nav_float_right"
                                    data-toggle="collapse"
                                    data-target="#navbarCollapse"
                                >
                                    <span className="navbar-toggler-icon"></span>
                                </button>

                                <div className="collapse navbar-collapse menu_flex" id="navbarCollapse">
                                    <div className="navbar-nav  ">
                                        <ul className="mt-4 nav_ul" >
                                            <li>
                                                <Link href="/">
                                                    <a className="text-success"><b>HOME</b></a>
                                                </Link>

                                            </li>
                                            <li>
                                                <Link href="/AboutUs">
                                                    <a className="text-success"><b>ABOUT&#160;US</b></a>

                                                </Link>
                                            </li>
                                            {/* <li>
                                                <Link href="#">
                                                <a className="text-success"><b>QUOTES</b></a>
                                                     
                                                </Link>

                                            </li> */}
                                            <li>
                                                <Link href="#">
                                                    <div class="dropdown  ">
                                                        <a class="text-success  dropdown-toggle"
                                                            type="button" id="dropdownMenuButton"
                                                            data-toggle="dropdown" aria-haspopup="flase"
                                                            aria-expanded="true">
                                                            <b>TREAMENTS </b>
                                                        </a>
                                                        <div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                                                            <Link href="/KidneyStone">
                                                                <a className="dropdown-item"><b>Kidney Stone</b></a>
                                                            </Link>
                                                            <Link href="/ArthritisPain">
                                                                <a className="dropdown-item"><b>Arthritis OR Joint Pain</b></a>
                                                            </Link>
                                                            <Link href="/SciaticaPain">
                                                                <a className="dropdown-item"><b>Sciatica Pain</b></a>
                                                            </Link>
                                                            <Link href="/CervicalSpondylitis">
                                                                <a className="dropdown-item"><b>Cervical Spondylitis</b></a>
                                                            </Link>
                                                            <Link href="/MigraneHeadache">
                                                                <a className="dropdown-item"><b>Migrane & Other Headache</b></a>
                                                            </Link>
                                                            <Link href="/ParalysisEpilepsy">
                                                                <a className="dropdown-item"><b>Paralysis & Epilepsy</b></a>
                                                            </Link>
                                                            <Link href="/Psoriasis">
                                                                <a className="dropdown-item"><b>Psoriasis</b></a>
                                                            </Link>
                                                            <Link href="/VitiligoSpots">
                                                                <a className="dropdown-item"><b>Vitiligo OR White Spots </b></a>
                                                            </Link>

                                                            <Link href="/SkinDisease">
                                                                <a className="dropdown-item"><b>Skin Disease</b></a>
                                                            </Link>
                                                            <Link href="/HeartDiseases">
                                                                <a className="dropdown-item"><b>Heart Diseases</b></a>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/Hijama">
                                                    <a className="text-success"><b>HIJAMA</b></a>

                                                </Link>

                                            </li>
                                            <li>
                                                <Link href="/Gallery">
                                                    <a className="text-success"><b>GALLERY</b></a>

                                                </Link>

                                            </li>
                                            <li>
                                                <Link href="/Testimonials">
                                                    <a className="text-success"><b>TESTIMONIALS</b></a>

                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/BookAnApointment">
                                                    <a className="text-success"><b> BOOK&#160;AN&#160;APPOINTMENT</b></a>

                                                </Link>

                                            </li>
                                            <li>
                                                <Link href="ContactUs">
                                                    <a className="text-success"><b>CONTACTS&#160;US</b></a>

                                                </Link>

                                            </li>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Header;