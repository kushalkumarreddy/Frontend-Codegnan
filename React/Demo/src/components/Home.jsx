import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card';

function Home() {
    const[data,setData]=useState([]);

    async function getData(){
        let res=await axios.get("http://localhost:3000/doctors")
        setData(res.data)
    }
    let newArr=data.map((item)=>{
        return(
            <Card details={item} key={item.id}/>
        )
    });

    useEffect(()=>{
        getData();
    },[])

  return (
    <div>
        <div>
            {newArr}
        </div>
    </div>
  )
}

export default Home