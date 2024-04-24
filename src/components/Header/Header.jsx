
import { BackTop } from 'antd';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from "../Footer/Footer.jsx";


const Header = () => {

    return (
        <>
            <Navbar/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
            <BackTop/>
        </>
    );
};

export default Header;
