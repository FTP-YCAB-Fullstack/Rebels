import axios from 'axios'
import React , {useEffect , useState} from 'react'
import '../styles/currency.css'
import {Link} from "react-router-dom";

// import Logoconvert from "../assets/logoconverts.png"
// import Footer from "./Footer"
// import back2 from "../assets/bck2.png"

function Api() {
    const [useCurrent,SetCurrent] = useState([])
    const [first, setFirst] = useState("")
    const [second, setSecond] = useState("")
    const [third , setThird] = useState("")
    const [rate,setRate]= useState("")
    const [hasil,setHasil] = useState("")
    useEffect(() => 
    {
        axios ({
            method : "GET",
            url : "https://free.currconv.com/api/v7/currencies?apiKey=41511e3a3b599b0d09f7"
        })
        .then ((response) => {
           SetCurrent([...Object.keys(response.data.results)]) 
        })
        .catch ((error)=>{
            console.log(error)
        })
    }, [])

    const getRate = (first,second,third) =>{
        
        axios ({
            method : "GET",
            url : `https://free.currconv.com/api/v7/convert?q=${first}_${second}&compact=ultra&apiKey=d4284863b553b14d5089`
        })
        .then ((response) => {
            // console.log(response)
                setRate(response.data[`${first}_${second}`])
        })
        .catch ((error)=>{
            console.log(error)
        })
    }

    return (
        <div className="bodyconverter">
        <div class="body">
                <div className="titleconvert">
                    <Link className="link" to="/main">
                    <button className="border-transparent text-md font-semibold mx-6">Home</button>
                    </Link>
                    <h1>Currency Exchange</h1>       
                </div>
                <div className="mainconvert">
                    <div className="inputform">
                        <div class="contInput">
                            <input  type="number" value={third} onChange={e => setThird(e.target.value)} placeholder="Input number "></input>
                        </div>
                        <div className="option">
                        <div class="optionmenu1">
                            <span>From </span>
                            <select class="select" value={first} onChange={e => setFirst(e.target.value)} >
                                    {useCurrent.map(data =>( <option key={data} value={data} >{data}</option>))}
                            </select>
                        </div>
                        <div class="optionmenu2">
                            <span> To </span>
                            <select class="select" value={second} onChange={e => setSecond(e.target.value)} >
                                {useCurrent.map(data =>(<option key={data} value={data} >{data}</option>))}         
                            </select>
                        </div>
                        </div>
                    </div>

                    <div className="panah">
                        {/* <img src={Logoconvert} alt=""/> */}
                    </div>

                    <div className="formresult">
                        <div className="note">
                            <h6>Result Exchange</h6>
                            <span>note : </span>
                        </div>
                        <div className="pembungkus">
                            <div className="boxresult">
                                <p class="hasil">{third} {first}= {rate * +third} {second}</p>
                            </div>
                        </div>
                    </div>
                </div>
                    
                <div className="buttonsub">
                    <button class="btn1" onClick={()=> {getRate(first,second)}}> Convert </button>

                </div>
        </div>

            {/* <Footer /> */}
        </div>
    )
}

export default Api
