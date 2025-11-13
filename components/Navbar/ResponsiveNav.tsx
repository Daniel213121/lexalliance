"use client";
import React, { useState } from 'react';
import Nav from './Nav';
import MobileNav from "./MobileNav";

function ResponsiveNav() {
    // State to toggle mobile navigation visibility
    const [showNav, setShowNav] = useState(false);

    // Open mobile nav
    const handNavShow = () => setShowNav(true);

    // Close mobile nav
    const handleCloseNav = () => setShowNav(false);

    return (
        <div>
            {/* Desktop + Tablet Nav */}
            <Nav openNav={handNavShow} />

            {/* Mobile Nav Overlay + Links */}
            <MobileNav showNav={showNav} CloseNav={handleCloseNav} />
        </div>
    );
}

export default ResponsiveNav;
