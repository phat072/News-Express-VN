import { BackTop } from 'antd';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar.jsx';
import Footer from "../Footer/Footer.jsx";


const MainPage = () => {

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

export default MainPage;
