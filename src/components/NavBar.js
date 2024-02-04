import React from 'react';
import { Link, useNavigate } from "react-router-dom";


const NavBar = () => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate('/home');
      };
    return (
        <div className=' bg-gradient-to-r from-[#fdfcfb] to-[#e2d1c3] h-16 p-5 text-center shadow-md '>
            <button onClick={goToHome} className=' font-extrabold uppercase tracking-widest text-2xl'>
            Code Doctor
            </button>
        </div>
    )
}
export default NavBar