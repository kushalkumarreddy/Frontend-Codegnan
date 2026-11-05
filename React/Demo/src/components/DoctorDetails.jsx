
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function DoctorDetails() {

    const [doctor, setDoctor] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();

    async function getData() {
        let res = await axios.get(`http://localhost:3000/doctors/${id}`);
        setDoctor(res.data);
    }

    async function deleteDoctor() {
        try {
            await axios.delete(`http://localhost:3000/doctors/${id}`);
            alert("Deleted successfully!");
            navigate(-1);
        }
        catch (err) {
            console.log(err);
            alert("Unable to delete doctor");
        }
    }

    useEffect(() => {
        getData();
    }, [id]);

    return (
        <div className="container mt-4">

            <h2 className="text-center mb-4">
                Doctor Details
            </h2>

            <div className="text-center mb-3">
                <h3>Dr. {doctor.name}</h3>
                <p className="text-primary">
                    {doctor.specialization} Specialist
                </p>
            </div>

            <table className="table table-bordered w-75 mx-auto">

                <tbody>

                    <tr>
                        <th>Doctor Name</th>
                        <td>{doctor.name}</td>
                    </tr>

                    <tr>
                        <th>Specialization</th>
                        <td>{doctor.specialization}</td>
                    </tr>

                    <tr>
                        <th>Gender</th>
                        <td>{doctor.gender}</td>
                    </tr>

                    <tr>
                        <th>Age</th>
                        <td>{doctor.age}</td>
                    </tr>

                    <tr>
                        <th>Salary</th>
                        <td>₹{doctor.salary}</td>
                    </tr>

                </tbody>

            </table>

            <div className="text-center mt-3">

                <button
                    className="btn btn-danger me-3"
                    onClick={deleteDoctor}
                >
                    Delete
                </button>

                <button
                    className="btn btn-primary"
                    onClick={() => navigate(`/edit/${id}`)}
                >
                    Edit
                </button>

            </div>

        </div>
    );
}

export default DoctorDetails;
