import React , {useState} from "react";
import axios from 'axios';
import Alert from "../alert";

function Insert()
{
  //  const [data,setData] =useState([]);
    const addData = async(e) =>{
        e.preventDefault();
        let d={
            pid: e.target[0].value,
            pname: e.target[1].value,
            price: e.target[2].value,
            subscription: e.target[3].value
        }
        
        //setData(d);
        try {
            const response = await axios.post('https://primary:zZkTOQfCiQFvDDP3VZAzAkiB4Eq2fmXsagfcDPztt3gtjc1SBOmqrRu3yrmszia9@backenddemo1.test.azuremicroservices.io/springboot1/default/addProduct', d);
            handleClick(e);
            console.log(response)
            // if(response.status==500){
            //   alert("successfully Registered ....!")
            // }
        } catch (error) {
            console.error('Error fetching data:', error.message);
        }
    }
    const handleClick =(e) =>{
        e.preventDefault(); //page don.t reload
        e.target[0].value=null;
        e.target[1].value=null;
        e.target[2].value=null;
        e.target[3].value=null;
    }
    return(
        <div>
            <div className=" m-3">
                <form onSubmit={addData}>
                    <div className="form-group ">
                        <label for="exampleInputId1">Id</label>
                        <input type="text" className="form-control" id="exampleInputId1"  placeholder="Enter id" required/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputName1">Name</label>
                        <input type="text" className="form-control" id="exampleInputName1" placeholder="Enter name" required/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputprice1">Price</label>
                        <input type="text" className="form-control" id="exampleInputName1" placeholder="Enter price" required/>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputSubscription1">Subscription</label>
                        <input type="text" className="form-control" id="exampleInputSubscription1" placeholder="Subscription Model" required/>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Submit</button>
                </form>
            </div>
        </div>
        
    )
}
export default Insert;