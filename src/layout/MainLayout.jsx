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
            <Outlet></Outlet>
            {/* {noHeaderFooter ||  <Footer></Footer>}   */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;