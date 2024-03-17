import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ApoinmentDetail()
{
    const [data,setData] =useState({});
    const params = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        fetch("http://localhost:5000/ApoinmentShaduler/"+params.AppointmentID, {
            method: "GET",
        })
     .then((res) =>{ 
        return res.json()
     })
     .then((res)=>{
        setData(res);
        console.log(data.AppointmentID);
        console.log("Data has been fetched");
     })
    },[])

   


    return (
        <div className="container w-100 mt-5 ">
            <div class="card text-bg-dark mb-3 w-80 mt-50" >
            <div class="card-body">
                <h5 class="card-title">Appointment <b>Details</b></h5>
            </div>
            <div class="card-body ">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">AppointmentID</th>
                            <th scope="col">ClientName</th>
                            <th scope="col">Date</th>
                            <th scope="col">Time</th>
                            <th scope="col">Location</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.AppointmentID}</td>
                            <td>{data.ClientName}</td>
                            <td>{data.Date}</td>
                            <td>{data.Time}</td>
                            <td>{data.Location}</td>
                            <td>
                                <button type="button" class="btn btn-primary me-3" onClick={()=>{
                                    
                                    fetch("http://localhost:5000/ApoinmentShaduler/"+params.AppointmentID, {
                                        method: "PUT",
                                        headers: {
                                            "Content-Type": "application/json",
                                        },
                                    }).then(()=>{
                                        navigate('/ApoinmentShaduler/BookApoinment/'+params.AppointmentID);
                                    })
                                }}>Edit</button>


                                <button type="button" class="btn btn-danger" onClick={()=>{
                                    
                                    fetch("http://localhost:5000/ApoinmentShaduler/"+params.AppointmentID, {
                                        method: "DELETE",
                                    })
                                 .then(() =>{
                                    navigate('/');
                                 })
                                }}>Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    );
}