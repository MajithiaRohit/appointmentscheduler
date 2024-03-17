import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function BookAppointment() {

  const [data, setData] = useState({});
  const navigate = useNavigate();
  const params = useParams();


  
    useEffect(() => {
      if(params.AppointmentID !== undefined)
    {
      fetch("http://localhost:5000/ApoinmentShaduler/"+params.AppointmentID, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((res) => {
          setData(res);
          console.log("All Data has been fetched");
        });
      }
    }, {});
  
  


  return (
    <>
<section class="bg-light py-3 py-md-5">
  <div class="container">
    <div class="row justify-content-md-center">
      <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
        <h2 class="mb-4 display-5 text-center"><b>Book Appointment</b></h2>
        <hr class="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
      </div>
    </div>
  </div>

  <div class="container">
    <div class="row justify-content-lg-center">
      <div class="col-12 col-lg-9">
        <div class="bg-white border rounded shadow-sm overflow-hidden">

          <form action="#!">
            <div class="row gy-4 gy-xl-5 p-4 p-xl-5">
              <div class="col-12">
                <label for="AppointmentID" class="form-label">Appointment ID <span class="text-danger">*</span></label>
                <div class="input-group">
                  <span class="input-group-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
                  </svg>
                  </span>
                  <input type="text" value={data.AppointmentID} className="form-control" onChange={(e) => {
                setData({ ...data, AppointmentID: e.target.value });
              }} />
                </div>
              </div>
              <div class="col-12">
                <label for="ClientName" class="form-label">Client Name <span class="text-danger">*</span></label>
                <div class="input-group">
                  <span class="input-group-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                  </svg>
                  </span>
                  <input type="text" value={data.ClientName} className="form-control" onChange={(e) => {
                setData({ ...data, ClientName: e.target.value });
              }} />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <label for="Date" class="form-label">Date of Appointment <span class="text-danger">*</span></label>
                <div class="input-group">
                  <span class="input-group-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                  </svg>
                  </span>
                  <input type="Date" value={data.Date} className='form-control' onChange={(e) => {
                setData({ ...data, Date: e.target.value });
              }} />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <label for="Time" class="form-label">Time of Appointment</label>
                <div class="input-group">
                  <span class="input-group-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                  </svg>
                  </span>
                  <input type="time" value={data.Time} className="form-control" onChange={(e) => {
                setData({ ...data, Time: e.target.value });
              }} />
                </div>
              </div>
              <div class="col-12 ">
                <label for="Time" class="form-label">Location</label>
                <div class="input-group">
                  <span class="input-group-text">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
                  </svg>
                  </span>
                  <input type="text" value={data.Location} className="form-control" onChange={(e) => {
                setData({ ...data, Location: e.target.value });
              }} />
                </div>
              </div>
              <div class="col-12">
                <div class="d-grid">
                  <button type="button" class="btn btn-primary btn-lg" onClick={() => {
                 if(params.AppointmentID == undefined) 
                {
                  fetch("http://localhost:5000/ApoinmentShaduler", {
                  method: "post",
                  body: JSON.stringify(data),
                  headers: {
                    "Content-Type": "application/json"
                  }
                  })
                  .then(() => {
                    navigate('/');
                  })
                }else{

                  fetch("http://localhost:5000/ApoinmentShaduler/"+params.AppointmentID, {
                    method: "put",
                    body: JSON.stringify(data),
                    headers: {
                      "Content-Type": "application/json"
                    }
                    })
                    .then(() => {
                      navigate('../ApoinmentShaduler/'+params.AppointmentID);
                    })
                }
              }}>

                {params.AppointmentID > null && "Edit "}
                {!(params.AppointmentID > null) && "Book "}
                Appointment</button>
                </div>
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  </div>
</section>





      {/* <table>
        <tbody>
          <tr>
            <td>
              <input type="text" value={data.AppointmentID} onChange={(e) => {
                setData({ ...data, AppointmentID: e.target.value });
              }} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" value={data.ClientName} onChange={(e) => {
                setData({ ...data, ClientName: e.target.value });
              }} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="date" value={data.Date} onChange={(e) => {
                setData({ ...data, Date: e.target.value });
              }} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="time" value={data.Time} onChange={(e) => {
                setData({ ...data, Time: e.target.value });
              }} />
            </td>
          </tr>
          <tr>
            <td>
              <input type="text" value={data.Location} onChange={(e) => {
                setData({ ...data, Location: e.target.value });
              }} />
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" className="btn btn-primary me-3" onClick={() => {
                 if(params.AppointmentID == undefined) 
                {
                  fetch("http://localhost:5000/ApoinmentShaduler", {
                  method: "post",
                  body: JSON.stringify(data),
                  headers: {
                    "Content-Type": "application/json"
                  }
                  })
                  .then(() => {
                    navigate('/');
                  })
                }else{

                  fetch("http://localhost:5000/ApoinmentShaduler/"+params.AppointmentID, {
                    method: "put",
                    body: JSON.stringify(data),
                    headers: {
                      "Content-Type": "application/json"
                    }
                    })
                    .then(() => {
                      navigate('../ApoinmentShaduler/'+params.AppointmentID);
                    })
                }
              }}>

                {params.AppointmentID > null && "Edit "}
                {!(params.AppointmentID > null) && "Book "}
                Appointment</button>
            </td>
          </tr>

        </tbody>
      </table> */}
    </>
  );
}
