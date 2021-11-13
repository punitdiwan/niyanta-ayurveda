import Link from "next/link"
import Layout from '../Components/Layout' 
import { SRLWrapper } from "simple-react-lightbox";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());
const Gallery = () => {

    const url = (`${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/gallery?fields=*.*.*`)
    const { data, error } = useSWR(url, fetcher); 
    const slides = [
        { title: "/images/h1.jpeg", description: 'View Gallery' },
        { title: "/images/7.jpg ", description: 'View Gallery' },
        { title: "/images/h4.jpeg ", description: 'View Gallery' },
        { title: "/images/13.jpg", description: 'View Gallery' },
        { title: "/images/h2.jpeg ", description: 'View Gallery' }, 
        { title: "/images/9.jpg", description: 'View Gallery' },
        { title: "/images/h3.jpeg", description: 'View Gallery' }, 
        { title: "/images/7.jpg", description: 'View Gallery' },
    ];


    return (
        <Layout>
            <div className="p-0   container-fluid gallery_top">
                <div style={{ color: "white", backgroundColor: "black" }}>
                    <center className="p-2">  <h2><b>GALLERY </b></h2>
                         
                    </center>
                </div>
                <div className="container">  
                    <SRLWrapper> 
                        <div className="container"> 
                            <div className="mb-5 row">
                                {data?.data.map((item, i) => {
                                    return (
                                        <div key={i} className="col-lg-3" >
                                            <img
                                                src={item?.photo?.data?.full_url}
                                                className="mt-3 imght "
                                                style={{ height: "200px", width: "100%" }}
                                            />
                                        </div>
                                    );
                                })}
                            </div>  
                        </div>

                    </SRLWrapper>

                </div>

            </div>
        </Layout>
    )
}
export default Gallery;