import { useState, useEffect } from 'react';
import axios from 'axios'


function DoctorDetails() {
    const[doctor,setDoctor] = useState({});

    async function getData() {
        let res = await axios.get("http://localhost:3000/doctors/3");
        console.log(res);
        setDoctor(res.data);
    }

    async function deleteDoctor() {
        try{
            await axios.delete("http://localhost:3000/doctors/3")
            alert("deleted!!")
        }
        catch(err){
            console.log(err.response.data.error);
            alert(err.response.data.error);
        }
    }

    useEffect(()=>{
        getData();
    },[])
    return (
        <div>
            <h1>Doctor Details</h1>
            <h2>{doctor.specialization}</h2>
            <h2>{doctor.name}</h2>
            <h2>{doctor.gender}</h2>
            <h2>{doctor.age}</h2>
            <h2>{doctor.salary}</h2>
            <button onClick={deleteDoctor}>Delete</button>
        </div>
    )

}

export default DoctorDetails