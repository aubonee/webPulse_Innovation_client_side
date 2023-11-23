
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../../assets/banner/1.png'
import img2 from '../../../assets/banner/2.png'
import img3 from '../../../assets/banner/3.png'
import img4 from '../../../assets/banner/4.png'

const Banner = () => {
    return (
       <div className="w-full">
         <Carousel  className="text-center" autoPlay>
        
        <div>
            <img className="w-full" src={img1} />
           
        </div>
        <div>
            <img className="w-full" src={img2} />
           
        </div>
        <div>
            <img className="w-full" src={img3} />
           
        </div>
        <div>
            <img className="w-full" src={img4} />
           
        </div>
       
        

    </Carousel>
       </div>
    );
};

export default Banner;