import { Outlet } from 'react-router-dom';
import Footer from '../components/shared/footer/Footer';
import Navbar from '../components/shared/nav/Navbar';

const MainLayout = () => {
    // const location =useLocation();
    // console.log(location);
    // const noHeaderFooter =location.pathname.includes('login')
    return (
        <div>
          {/* {noHeaderFooter || <Nav></Nav>}  */}
          <Navbar></Navbar>
            <div className='mx-auto pt-8'><Outlet></Outlet></div>
            {/* {noHeaderFooter ||  <Footer></Footer>}   */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;