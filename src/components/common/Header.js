import React from 'react';
import HeadNav from '../Navbar/Navbar';
import '../../assets/header.css';

export default function Header() {
    return (
        <header>
            <div className="title">
                <h1>Commerce Liquor</h1>
                <h3>9936 Commerce ave, Tujunga CA, 91042</h3>
                <h4>Open weekdays Sun-Thurs 7am - 11pm</h4>
                <h4>Open weekends Fri-Sat 7am - 12am</h4>
            </div>
            <HeadNav />
        </header>

    
    );
}
