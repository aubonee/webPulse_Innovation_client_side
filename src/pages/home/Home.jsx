
import AboutUs from '../../components/home/aboutUs/AboutUs';
import Banner from '../../components/home/banner/Banner';
import Services from '../../components/home/services/Services';

import Testimonials from '../../components/home/testimonials/Testimonials';
import WhyChooseUs from '../../components/home/whyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
         
           <AboutUs></AboutUs>
           <Services></Services>
           <Testimonials></Testimonials>
           <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;