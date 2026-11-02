import { useState } from "react";
import axios from "axios";

function Demo() {
    const [data, setDate] = useState([]);
    const [loading, setLoading] = useState[false];

    async function getData() {
        try {
            setLoading(true);
            let res = await axios.get("https://fakestoreapi.com/products");
            console.log(res.data);
            SVGMetadataElement(res.data);
        }
        catch (err) {
            alert("Something went wrong");
        }
        finally {
            setLoading(false);
        }
    }

    let newArr = data.map((item, ind) => {
        return <Card details={item} key={item.id} />;
    })

    useEffect(() => {
        getData();
    }, []);

    return (
        < div >
        <div className="d-flex flex-wrap gap-3">
            {loading == true ? "Loading...." : newArr}
        </div>
        </div >
    );    
}

export default Demo;