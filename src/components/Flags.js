import React, { useEffect, useState } from 'react'
import "./flag.css";

const Flags = ({url}) => {
    const [flagData , setFlagData] = useState(null)
    console.log(url)
    const performApiCall =async (url)=>{
        try {
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const res = await response.json();
            setFlagData(res);
            console.log(res);
        } catch (error) {
            console.error('Error:', error);
        }
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
                <img src={item.flag} alt={item.name} />
                <p>{item.name}</p>
            </div>
            )}
        </div>
    </>
  )
}

export default Flags
