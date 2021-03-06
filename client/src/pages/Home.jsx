import React from 'react';
import {Link} from "react-router-dom";
import piggy from "../assets/piggy64.png"

export default function Home() {
    return (
        <div>
            <div className="flex items-center justify-between mx-32 mt-6">
                <div className='flex flex-row items-center'>
                <img src={piggy} alt="piggy" className='bg-white-'/>
                <p className="font-semibold flex justify-items-center py-10">Piggy</p>
                </div>
                <div className="flex">
                    <Link to="/login">
                        <button className="border-transparent bg-red-400 text-white w-28 mr-6   text-sm p-3 rounded-lg">Login</button>
                    </Link>
                    <Link to="/register">
                        <button className="border-transparent bg-red-400 text-white w-28 text-sm p-3 rounded-lg">Registrasi</button>
                    </Link>
                </div>
            </div>

            <div className="flex items-center flex-col">
            <h1 className="flex justify-center items-center text-6xl font-extrabold text-center mt-40 mr-32 ml-32 text-red-400 leading-tight">SELAMAT DATANG DI HALAMAN WEBSITE PIGGY</h1>
            <Link to="/login">
                <button className="border-transparent bg-red-400 text-white w-42 font-bold text-xl mt-8 text-sm px-10 py-5 rounded-lg">GET STARTED</button>
            </Link>
            </div>
            
            
        </div>
    )
}
