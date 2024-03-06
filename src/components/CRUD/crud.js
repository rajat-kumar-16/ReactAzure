import React from "react";
import { Link } from "react-router-dom";
function Crud(props)
{
    return (
        <div >
            <h1 className="text-center">{props.Opd}</h1><br></br>
            <div className="mt-2 d-flex justify-content-around">
                <Link className="btn btn-primary" to="/crud/insert">Insert</Link>
                <Link className="btn btn-primary" to="/crud/display">Display</Link>
                <Link className="btn btn-primary" to="/crud/displayById">Display By Id</Link>
                <Link className="btn btn-primary" to="/crud/update">Update</Link>
                <Link className="btn btn-primary" to="/crud/delete">Delete</Link>
                <Link className="btn btn-primary" to="/crud/deleteById">Delete By Id</Link>
            </div>
        </div>
    )
}
export default Crud;