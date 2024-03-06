import React ,{useEffect, useState, startTransition} from "react";
import axios from 'axios';


function Display()
{
    const [data, setData] = useState([]);
    useEffect(()=>{
        startTransition(()=>{
            fetchData();
        })
    }, []);
    const fetchData= ()=>{
        // http://localhost:9999/getProduct
        axios.get(`https://secondary:h9olwFKgaS2wObfx3miV84UYevOBw7aTmfPuKqSOYkTmsFbB4zm1URuaQZp3AMLC@backenddemo1.test.azuremicroservices.io/springboot1/default/getProduct`).then(response =>{
            setData(response.data);
        }).catch(error => {
            console.log(error);
        });
    }
    return(
        <div className="mt-4">
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
                    {
                        data.map((item)=>
                        <tr>
                            <th scope="row">{item.pid}</th>
                            <td>{item.pname}</td>
                            <td>{item.price}</td>
                            <td>{item.subscription}</td>
                        </tr>
                        )
                    }
                    
                </tbody>
            </table>
        </div>
    )
}
export default Display;