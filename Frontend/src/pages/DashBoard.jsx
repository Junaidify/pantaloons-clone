import { } from 'react'
import '../styles/dashboard.css';
import { Navbar } from './Navbar'
import { FetchData } from '../redux/FetchData';
// import { Cards } from './Cards';
import { ProductCustomHook } from '../redux/ProductCustomHook';
import { DealsOfTheDay } from './DealsOfTheDay';

export const DashBoard = () => {
    return (
        <>
            <div id='dashboard'>
                <Navbar />
                <FetchData/>
                <DealsOfTheDay/>
                <ProductCustomHook/>
            </div>
        </>
    )
}
