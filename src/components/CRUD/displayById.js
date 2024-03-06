import React, { useState } from "react";
import axios from 'axios';
import Display from "./display";
function DisplayByID() {
    const [data, setData] = useState([]);
    // const er= true;
    const displayDataByID = async (e) => {
        e.preventDefault();
        //setData(d);
        try {
            const response = await axios.get(`https://primary:zZkTOQfCiQFvDDP3VZAzAkiB4Eq2fmXsagfcDPztt3gtjc1SBOmqrRu3yrmszia9@backenddemo1.test.azuremicroservices.io/springboot1/default/getProduct/${e.target[0].value}`).then(response => {
                setData(response.data);
            }).catch(error => {
                if (error.response.status === 500) {
                    setData([]);
                }
                console.log(error);

            });
            handleClick(e);
        } catch (error) {
            console.log('Error fetching data:', error.message);
        }

    }
    const handleClick = (e) => {
        e.preventDefault(); //page dont reload
        e.target[0].value = null;
    }
    return (
        <div>
            <div className=" m-3">
                <form onSubmit={displayDataByID}>
                    <div className="form-group ">
                        <label for="exampleInputId1">Id</label>
                        <input type="text" className="form-control" id="exampleInputId1" placeholder="Enter id" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
                {
                data.pid ? ( 
                <table className="table table-striped table-hover">

                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Subscription</th>
                        </tr>
                    </thead>
                    <tbody> 
                            <tr>
                                <th scope="row">{data.pid}</th>
                                <td>{data.pname}</td>
                                <td>{data.price}</td>
                                <td>{data.subscription}</td>

                            </tr>
                    </tbody>
                </table> ):(
                <div className="mt-2 text-center">Nothing to Show here</div>)
                }
            </div>
        </div>

    )
}
export default DisplayByID;