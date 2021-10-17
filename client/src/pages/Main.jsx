import React, {useState} from 'react'
import DashboardCard from '../components/DashboardCard'
import ModalCreate from '../components/ModalCreate'
import {BrowserRouter as Link } from "react-router-dom";

function Main() {

    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="min-h-screen">
            <div className="flex content-between justify-between mx-32 mt-7">
                <div><p>Logo</p></div>
                <div>
                    <Link to="/">
                        <button className="border-transparent bg-green-500 text-white w-28 text-sm p-3 rounded-lg">Logout</button>
                    </Link>
                    <button className="border-transparent text-md font-semibold mx-6">Bantuan</button>
                    <button className="border-transparent bg-green-500 text-white text-sm p-3 rounded-lg" onClick={()=>{
                        setOpenModal(true)
                    }}>Tambah Aktifitas</button>
                    {openModal && <ModalCreate closeModal={setOpenModal} />}
                    
                </div>
            </div>
            <div>
                <DashboardCard />
            </div>
        </div>
    )
}

export default Main
