
import { useState } from 'react';
import axios from 'axios';

function AddDoctor() {
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[gender,setGender]=useState("");
    const[specialization,setSpecialization]=useState("");
    const[salary,setSalary]=useState("");

    async function submit(event) {
        event.preventDefault();

        if(name==""||age==""||gender==""||specialization==""||salary==""){
            alert("please fill all the details");
            return;
        }

        let doctorObj = {
            name,
            age,
            gender,
            specialization,
            salary
        }

        try{
            let res = await axios.post("http://localhost:3000/doctors",doctorObj);
            console.log(res);
            alert("data added!!")
            setName("");
        }
        catch(err){
            alert("Something went wrong.....");
        }
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="text" placeholder='name' onChange={(e)=>setName(e.target.value)} value={name}/> <br/>
                <input type="number" placeholder='age' onChange={(e)=>setAge(e.target.value)}/> <br/>
                <select onChange={(e)=>setGender(e.target.value)}>
                    <option value="">select</option>
                    <option value="male">male</option>
                    <option value="female">female</option>
                </select> <br/>
                <input type="text" placeholder='Specialization' onChange={(e)=>setSpecialization(e.target.value)}/> <br/>
                <input type="number" placeholder='salary' onChange={(e)=>setSalary(e.target.value)}/> <br/>

                <input type="submit" value="Add Doctor" />

            </form>
        </div>
    )
}

export default AddDoctor;
