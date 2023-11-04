import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';

function AppLayout({ children }) {
    return (
        <div className="app-layout">
            <Navbar />
            <main className="content">{children}</main>
            <Footer />
        </div>
    );
}

export default AppLayout;
