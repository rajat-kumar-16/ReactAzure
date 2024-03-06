import React, { useState } from "react";
import axios from 'axios';
function DeleteById()
{
    const [pid, setPid] =useState([]);
    const deleteDataByID = async(e) =>{
        e.preventDefault();
        
        //setData(d);
        try {
            const response = await axios.delete(`https://primary:zZkTOQfCiQFvDDP3VZAzAkiB4Eq2fmXsagfcDPztt3gtjc1SBOmqrRu3yrmszia9@backenddemo1.test.azuremicroservices.io/springboot1/default/deleteProduct/${e.target[0].value}`);
            handleClick(e);
            console.log(response)
            // if(response.status==200){
            //   alert("successfully Registered ....!")
            // }
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
        
    }
    const handleClick =(e) =>{
        e.preventDefault(); //page don.t reload
        e.target[0].value=null;
        
    }
    return(
        <div>
            <div className=" m-3">
                <form onSubmit={deleteDataByID}>
                    <div className="form-group ">
                        <label for="exampleInputId1">Id</label>
                        <input type="text" className="form-control" id="exampleInputId1"  placeholder="Enter id" />
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
                {
                    
                }
            </div>
        </div>
        
    )
}
export default DeleteById;