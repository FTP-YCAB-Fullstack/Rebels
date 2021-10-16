import React, {useState} from 'react'
import DashboardCard from '../components/DashboardCard'
import ModalCreate from '../components/ModalCreate'

function Main() {

    const [listen, setListen] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    return (
        <div className="min-h-screen">
            <div className="flex content-between justify-between mx-32 mt-7 mb-16">
                <div><p>Logo</p></div>
                <div>
                    <button className="border-transparent text-md font-semibold mx-6">Bantuan</button>
                    <button className="border-transparent bg-green-500 text-white text-sm p-3 rounded-lg" onClick={()=>{
                        setOpenModal(true)
                    }}>Tambah Aktifitas</button>
                    {openModal && <ModalCreate closeModal={setOpenModal} listen={listen} setListen={setListen} />}
                </div>
            </div>
            <div>
                <DashboardCard listen={listen} />
            </div>
        </div>
    )
}

export default Main
