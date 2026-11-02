import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Loading from "./Loading";

function Demo() {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getData() {
        try {
            setLoading(true);

            let res = await axios.get(
                "https://doc-back-v2nv.onrender.com/doctors"
            );

            console.log(res.data);
            setData(res.data);

        } catch (err) {
            console.log(err);
            alert("Something went wrong");
        } finally {
            setLoading(false);
        }
    }

    let newArr = data.map((item, ind) => {
        return <Card details={item} key={item.id ?? ind} />;
    });

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <div className="doctor-header">
                <h2>Doctors App</h2>
                <button onClick={getData}>Refresh Doctors</button>
            </div>

            <div className="doctor-container">
                {loading ? <Loading /> : newArr}
            </div>
        </div>
    );
}

export default Demo;