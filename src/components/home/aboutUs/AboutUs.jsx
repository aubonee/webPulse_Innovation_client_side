
import SectionTitle from '../../shared/sectinTitle/SectionTitle';
import aboutImg from '../../../assets/5.png'
const AboutUs = () => {
    return (
    <div className='w-11/12 mx-auto max-w-screen-xl'>
        <SectionTitle heading="About Us" subHeading="Crafting Digital Excellence, One Code at a Time"></SectionTitle>
        <div className=' flex flex-col lg:flex-row-reverse'>
            <div className='w-11/12 lg:w-1/2'>
                
           <div>
            <p className='text-center lg:text-justify gap-5'>At WEbPulse Innovation, we are the architects of digital success, dedicated to transforming visions into virtual realities. With a passion for innovation and an unwavering commitment to excellence, we specialize in crafting dynamic and visually stunning websites that leave a lasting impression. Our diverse range of services, from bespoke web development and e-commerce solutions to mobile app development and SEO optimization, is tailored to meet the unique needs of each client. What sets us apart is not just our technical prowess but our dedication to understanding your business goals, ensuring that every line of code contributes to your success story.</p>
           </div >
            </div >
            <div className='w-11/12 lg:w-1/2'> <img src={aboutImg} alt="" /></div>
        </div>
    </div>
       
    );
};

export default AboutUs;