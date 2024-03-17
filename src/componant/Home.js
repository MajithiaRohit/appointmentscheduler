import { useEffect, useState } from "react";
import { Link, useParams} from "react-router-dom";

export default function Home() {
  const [data, setData] = useState(); // Initialize data as null

  useEffect(() => {
    fetch("http://localhost:5000/ApoinmentShaduler", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setData(res);
        console.log("All Data has been fetched");
      });
  }, []); // Add an empty dependency array to ensure useEffect runs only once

  return (
    <>

    <div class="container-lg mt-5">
        <div class="table">
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row bg-dark text-light">
                        <div class="col-10"><h2>All <b>Appoinments</b></h2></div>
                        <div class="col">
                            <Link class="btn btn-info add-new"to={"/ApoinmentShaduler/BookApoinment"}>Book Appoinment</Link>
                           
                        </div>
                    </div>
                </div>
                <table class="table table-bordered table-striped">
                    <thead>
                      <tr>
                        <th scope="col">AppointmentID</th>
                        <th scope="col">ClientName</th>
                        <th scope="col">Date</th>
                        <th scope="col">Time</th>
                        <th scope="col">Location</th>
                        <td  align="center"><b>Actions</b></td>
                      </tr>
                    </thead>
                    <tbody>
                      {data &&
                      data.map((item)=>{
                        return(
                          <tr key={item.AppointmentID}>
                            <td>{item.AppointmentID}</td>
                            <td>{item.ClientName}</td>
                            <td>{item.Date}</td>
                            <td>{item.Time}</td>
                            <td>{item.Location}</td>
                            <td align="center">
                              <Link className="btn btn-primary " to={'/ApoinmentShaduler/'+item.AppointmentID}>View</Link>
                            </td>
                          </tr>
                        )
                      })}
                       
                       
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    </>
  );
}
