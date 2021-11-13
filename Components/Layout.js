import Header from './Header'
import Footer from './Footer'
import Head from 'next/head'
const Layout = ({ children }) => {
    return (
        <div>

            <Head>
                <title>Niyanta Ayurveda </title>
                <link rel="icon" type="image/jpg" href="/images/logo4.png" />
            </Head>

            <Header />
            {children} 
            <Footer />

        </div>
    )
}

export default Layout;