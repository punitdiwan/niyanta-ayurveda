import "react-responsive-carousel/lib/styles/carousel.min.css";
import Layout from '../Components/Layout';
import Homeslider from './Homeslider';
import HomeSkinCare from './HomeSkinCare'; 
 import HomeWlcmVedios from "./HomeWlcmVedios";

export default function Home() {

    return (
        <div>
            <link
                rel="preload"
                href="../public/AbrilFatface-Regular.ttf"
                as="font"
                crossOrigin=""
            />
            <Layout>
                <Homeslider />
                <HomeSkinCare />
               <HomeWlcmVedios/>
            </Layout>
        </div>


    )
}

