import React from 'react';
import { Link } from 'react-router-dom'

export default function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer className='py-2 bg-dark'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="mb-0 text-white text-center">&copy; {year}. All Rights Reserved. Powered by <Link to="https://www.linkedin.com/in/shehroz-arshad-b91227272/" target='blank' className='text-light'>Shehroz Arshad</Link>.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
