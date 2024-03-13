export default function BookApoinment(){
    return(
        <>
          <section class="bg-light py-5 py-xl-6">
            <div class="container mb-5 mb-md-6">
              <div class="row justify-content-md-center">
                <div class="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6 text-center">
                  <h2 class="mb-4 display-5">Book Appointment</h2>
                  {/* <p class="text-secondary mb-4 mb-md-5">Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque et neque id ligula mattis commodo.</p> */}
                  <hr class="w-50 mx-auto mb-0 text-secondary" />
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
                          <label for="fullname" class="form-label">Full Name <span class="text-danger">*</span></label>
                          <input type="text" class="form-control" id="fullname" value="" placeholder="Enter your name" required />
                        </div>
                        <div class="col-12 col-md-6">
                          <label for="email" class="form-label">Date <span class="text-danger">*</span></label>
                          <div class="date-group">
                            <input type="date" class="form-control" id="email" value="" required />
                          </div>
                        </div>
                        <div class="col-12 col-md-6">
                          <label for="phone" class="form-label">Time</label>
                          <div class="input-group">
                            <input type="time" class="form-control" id="phone" value="" />
                          </div>
                        </div>
                        <div class="col-12">
                          <label for="message" class="form-label">Location <span class="text-danger">*</span></label>
                          <input type="text" class="form-control" id="location" value="" placeholder="Enter your city here."/>
                        </div>
                        <div class="col-12">
                          <div class="d-grid">
                            <button class="btn btn-primary btn-lg" type="submit">Submit</button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
    )
}