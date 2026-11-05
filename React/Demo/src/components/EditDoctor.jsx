import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function EditDoctor() {
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[gender,setGender]=useState("");
    const[specialization,setSpecialization]=useState("");
    const[salary,setSalary]=useState("");

    const navigate=useNavigate();
    const {id}=useParams();

    async function submit(event){
        event.preventDefault();
        if(name==""||age==""||gender==""||specialization==""||salary==""){
            alert("please fill all the details")
            return;
        }

        let doctorObj={
            name,
            age,
            gender,
            specialization,
            salary
        }
        try{
            let res=await axios.put(`http://localhost:3000/doctors/${id}`,doctorObj);
            console.log(res);
            alert("data updated!!")
            navigate(-1);
            
        }
        catch(err){
            alert("somthing went worng....");
        }
    }

    async function getData(){
        let res=await axios.get(`http://localhost:3000/doctors/${id}`)
        console.log(res.data);
        setName(res.data.name)
        setAge(res.data.age)
        setGender(res.data.gender)
        setSalary(res.data.salary)
        setSpecialization(res.data.specialization)
    }
    
    useEffect(()=>{
        getData();
    },[])
  return (
    <div>
        <form onSubmit={submit}>
            <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)} value={name}/> <br />
            <input type="number" placeholder='age' onChange={(e)=>setAge(e.target.value)} value={age}/> <br />
            <select onChange={(e)=>setGender(e.target.value)} value={gender}>
                <option value="">select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select> <br />
            <input type="text" placeholder='Specialization' onChange={(e)=>setSpecialization(e.target.value)} value={specialization}/> <br />
            <input type="number" placeholder='salary' onChange={(e)=>setSalary(e.target.value)} value={salary}/> <br />

            <input type="submit" value="Update"/>
        </form>
    </div>
  )
}

export default EditDoctor