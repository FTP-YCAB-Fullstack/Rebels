import axios from '../axios';
import React,{useState} from 'react'

function ModalCreate({closeModal, listen, setListen}) {

    const[tipe,setTipe]=useState(null)
    const[simpanGambar, setSimpanGambar]=useState([])

    

    const tambahData =async(event)=>{

        event.preventDefault()
        let topik = event.target.topik.value;
        let nominal = event.target.nominal.value;
        let tanggal = event.target.tanggal.value;
        let foto = event.target.foto.value;
        let keterangan = event.target.keterangan.value;
        let tipedata = tipe;

        console.log(tanggal)

    const data = {
        topik : topik,
        nominal : nominal,
        tanggal : tanggal,
        foto : foto,
        keterangan : keterangan,
        tipedata : tipedata,
    }

    console.log(data)
    const item = localStorage.getItem("token")

    const result = await axios({
        headers : {
            token : item
        },
        method : "POST",
        url : "http://localhost:4000/datatable",
        data : data
    })
    console.log(result)
    // console.log(data)

    setListen(listen+1)
    closeModal(false)
    }

    return (
        <div className="fixed w-screen h-screen bg-black top-0 left-0 flex justify-center items-center bg-opacity-40">
            <div className="fixed p-6 w-1/3 bg-white drop-shadow-xl rounded-xl">
                <div className="flex flex-row-reverse mr-3">
                    <button className="font-bold mb-4 text-red-300" onClick={()=>{
                        closeModal(false)
                    }}>X</button>
                </div>
                <form onSubmit={tambahData} action="/uploadfile" enctype="multipart/form-data" method="POST" className="flex flex-col">
                    <input type="text" placeholder="Topic" name="topik" className="bg-black bg-opacity-10 border-none drop-shadow-xl p-2 rounded-lg my-2"/>
                    <input type="text" placeholder="Nominal" name="nominal" className="bg-black bg-opacity-10 border-none drop-shadow-xl p-2 rounded-lg mb-2"/>
                        <div>
                            <input type="date" name="tanggal" className="bg-black bg-opacity-10 border-none drop-shadow-xl p-2 rounded-lg mb-2"/>
                            <input type="file" name="foto" className="mb-4 mt-2"/>
                        </div>
                            <textarea placeholder="Keterangan" name="keterangan" className="bg-black bg-opacity-10 border-none drop-shadow-xl h-32 p-2 rounded-lg mb-2"></textarea>
                            <p className="text-sm my-2 text-gray-500" name = "myFile">Catat sebagai</p>
                    <div>
                        <button onClick={()=>setTipe("pemasukan")} className="py-2 px-6 mr-5 rounded-lg border-transparent bg-green-500 text-white">Pemasukan</button>
                        <button onClick={()=>setTipe("pengeluaran")} className="py-2 px-6 rounded-lg border-transparent bg-red-500 text-white">Pengeluaran</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalCreate
