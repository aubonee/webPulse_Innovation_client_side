
import { Helmet } from 'react-helmet-async';
import AboutUs from '../../components/home/aboutUs/AboutUs';
import Banner from '../../components/home/banner/Banner';
import Services from '../../components/home/services/Services';

import Testimonials from '../../components/home/testimonials/Testimonials';
import WhyChooseUs from '../../components/home/whyChooseUs/WhyChooseUs';
import FAQ from '../../components/home/faq/FAQ';

const Home = () => {
    return (
        <div className='mx-auto'>
            <Helmet>
                <title>WebPulse | Home</title>
            </Helmet>
           <Banner></Banner>
         
           <AboutUs></AboutUs>
           <Services></Services>
           <FAQ></FAQ>
           <Testimonials></Testimonials>
           <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;