import React from 'react';
import { Link } from 'react-router-dom';


export default function SiteHeader() {
    return (
        <div className="site-header">
                <div className="logo">M2 REACT</div>
                <div className="nav">
                <Link to="/">Home</Link>
                <Link to="/category">Category</Link> 
                <Link to="/category/2">Men</Link> 
                </div>
        </div>
    )
}
