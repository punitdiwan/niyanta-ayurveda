
import Link from "next/link";
import Layout from '../Components/Layout'
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const AboutUs = () => {

    const url = `${process.env.NEXT_PUBLIC_BASE_URL}/${process.env.NEXT_PUBLIC_SCHOOL}/items/tabs?fields=title,heading,body,images.directus_files_id.data.full_url`;
    const { data, error } = useSWR(url, fetcher);

    console.log(data)

    return (
        <Layout>
            <div className="container-fluid bg_color_home2" style={{ color: "black" }}>
                <div className="container pb-3">
                    <h1 className="text-center">
                        {data?.data[0]?.heading}
                        {/* About Us */}
                    </h1>
                    <div className="row" >
                        <div className="col-sm-5">
                            <img src={data?.data[0]?.images[0]?.directus_files_id?.data?.full_url}
                             style={{ width: "100%", height: "300px" }} />
                        </div>

                        <div className="col-sm-7">
                            <br />
                            {data?.data[0]?.body}
                            {/* <p><b>"We are just trying to give our best for care of humanity."</b></p>
                            <p><span>Incredible   Ayurveda Clinic is the true reflection of deep Ayurvedic insights. It offers all
                                the healing modalities of Ayurveda, ranging from Shaman &amp; Panchakarma to Marma chikitsa.</span></p>
                            <p><span>Incredible  Ayurveda Clinic offers all the three streams of Ayurvedic treatment-diet,
                                day-to-day activities and drugs. It is the most authentic Ayurveda clinic in India.
                                The comprehensive regimen includes
                                counseling, consultation, dispensation of medicines and special therapeutic measures.
                                The wellness center has got state of art treatment rooms and spacious manufacturing
                                units to have
                                control on quality of the services and medicines.</span></p>
                            <p><span>All the therapies and medicines are advocated under the direct supervision
                                of renowned Ayurveda physician
                                Dr Sanjay Yadav
                                (B.A.M.S., D.N.H.E., C.A.F.E., C.N.C.C., F.R.H.C.)
                                with prior appointment.</span></p> */}
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
export default AboutUs;