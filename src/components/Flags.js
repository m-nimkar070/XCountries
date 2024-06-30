import React, { useEffect, useState } from 'react'
import "./flag.css";

const Flags = ({url}) => {
    const [flagData , setFlagData] = useState(null)
    console.log(url)
    const performApiCall =async (url)=>{
        await fetch(url).then(
            (res)=> res.json()
        ).then(
            (res)=>{
                setFlagData(res)
                console.log(res)
            }
        ).catch((error)=>{
            console.log(error)
        })
    }

    useEffect(
        ()=>{
            performApiCall(url);
        }
    ,[]);
    
  return (
    <>
        <div className='flag__Container'>
            {flagData && flagData.map((item)=>
                <div className="flag__card" key={item.name}>
                <img src={item.flag} alt="a" />
                <p>{item.name}</p>
            </div>
            )}
        </div>
    </>
  )
}

export default Flags
