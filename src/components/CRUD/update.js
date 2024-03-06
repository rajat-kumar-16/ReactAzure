import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const Update = () => {
    const [productId, setProductId] = useState('');
    const [productData, setProductData] = useState({});
    const [updatedData, setUpdatedData] = useState({pid:"", pname:"", subscription:"", price:""});
    // const [message, setMessage] = useState('');
    // const [error, setError] = useState('');
 
    useEffect(() => {
        fetchData();
    }, [productId]);
 
    const fetchData = async () => {
        try {
            const response = await axios.get(`https://secondary:cuT9FsyNVdKk23RhI3RWXJ0TmXTIZvAiePhWwUyBddtX6dTq4iyZMwN7CQdCUeTZ@backenddemo1.test.azuremicroservices.io/springboot1/default/getProduct/${productId}`);
            setUpdatedData(response.data);
            setProductData(response.data);
        } catch (error) {
            console.log(error);
            // setError(error.message);
        }
    };
 
    const handleChange = (e) => {
        setUpdatedData({ ...updatedData, [e.target.name]: e.target.value });
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
       
        try {
            console.log(updatedData)
            const response = await axios.post(`https://primary:zZkTOQfCiQFvDDP3VZAzAkiB4Eq2fmXsagfcDPztt3gtjc1SBOmqrRu3yrmszia9@backenddemo1.test.azuremicroservices.io/springboot1/default/addProduct`, updatedData);
            console.log(response.data.message);
            setUpdatedData({pid:"", pname:"", subscription:"", price:""})
        } catch (error) {
            console.log(error);
            // setError(error.message);
        }
    };
 
    return (
        <div className="container">
            <h2 className="mt-5">Update Product</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="productId">Product ID:</label>
                    <input type="number" className="form-control" id="productId" value={productId} onChange={(e) => setProductId(e.target.value)} required />
                </div>
                {productData && (
                    <div>
                        <div className="form-group">
                            <label htmlFor="pname">Product Name:</label>
                            <input type="text" className="form-control" id="pname" name="pname" defaultValue={productData.pname} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="price">Price:</label>
                            <input type="number" className="form-control" id="price" name="price" defaultValue={productData.price} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subscription">Description:</label>
                            <input type="text" className="form-control" id="subscription" name="subscription" defaultValue={productData.subscription} onChange={handleChange} required />
                        </div>
                    </div>
                )}
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update</button>
            </form>
            {/* {message && <p className="text-success">{message}</p>}
            {error && <p className="text-danger">{error}</p>} */}
        </div>
    );
};
 
export default Update;