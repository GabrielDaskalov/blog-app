import React, {useContext} from 'react';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer'
import {AppRouter} from '../../routes';
import UserContext from '../../context/userContext'
import PrivateLayout from './PrivatePart/PrivateLayout';

function Layout(props) {

    const {userData} = useContext(UserContext);
    console.log(`User data: ${userData.user}`)

    return (
        <div>
            {console.log(userData.user)}
            {userData.user ?
            <PrivateLayout></PrivateLayout>
            :
            <Navbar></Navbar>
            }
            <AppRouter></AppRouter>
             {/* <Footer></Footer> */}
        </div>
    );
}

export default Layout;