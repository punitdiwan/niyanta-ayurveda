
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel';
// import Image from 'next/image' 

const Homeslider = () => {
    const slides = [
        { title: "/images/slider1.jpg", description: 'Lorem ipsum' },

    ];
    return (
        <div className="container-fluid bg_color_home2">
            <div className="row slider_img_home">
                <div className="p-0 col-lg-12">
                    <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}  >
                        {slides.map((slide, index) => {
                            return <div className="carousel-inner "   role="listbox" key={index}>
                                <div className='carousel items1' role="listbox">
                                    <img
                                        src={slide.title}
                                        alt="sorry_no_img"
                                        label="string1ssddfsds"
                                        style={{width:"100%",height:"550px"}}
                                    />
                                    <div className="row">
                                        <div className="col-lg-6 col-md-8 col-sm-9 col-12">
                                            <div className="legend">
                                                <h1 className="moto-text_system_4 "
                                                 style={{fontFamily:"curveFont"}}> 
                                                 About ayurveda</h1>
                                                <p className=" mt-4   "   >
                                                    <b>
                                                Ayurveda is a comprehensive system of holistic<br/>
                                                 health care that originated in India several 
                                                 thousand years ago.</b></p>
                                                {/* <button>BOOK AN APPOINTMENT</button> */}
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        })}
                    </Carousel>

                </div>
            </div>
        </div>


    )
}
export default Homeslider;