import React from 'react'

const Contact = () => {
  return (
    <div className="contact-wrapper d-flex align-items-center justify-content-center text-white text-center">
      <div className="overlay">
        </div>
        <div className="content position-relative">
          <h1 className="fw-bold mb-2">Contact Us</h1>
          <div className="bg-white rounded-pill shadow mx-auto d-flex align-items-center p-2 gap-2 form-box">
            <input
              type="text"
              className="form-control rounded-pill border-1"
              placeholder="Enter Your Name"
            />
            <input
              type="email"
              className="form-control rounded-pill border-1"
              placeholder="Enter Your Email Address"
            />
            <button className='btn bg-success text-white rounded-pill fw-bold px-4'>Submit</button>
          </div>
          <div className="container mt-5">
            <div className="row gy-4 justify-content-center">
              <div className="col-md-4 d-flex justify-content-center">
                <div
                  className="p-4 text-white rounded-4 bg-success text-start"
                  style={{ width: "260px" }}
                >
                  <h5 className="fw-bold mb-3">Call Us 📞</h5>
                  <p className="mb-1">1 (234) 567-891</p>
                  <p>1 (234) 987-654</p>
                </div>
              </div>
                  <div className="col-md-4 d-flex justify-content-center">
                <div
                  className="p-4 text-white rounded-4 bg-success text-start"
                  style={{ width: "260px" }}
                >
                  <h5 className="fw-bold mb-3">📍LOCATION</h5>
                  <p className="mb-1">1123 ROCK SOCIETY 21 AVENUES</p>
                  <p>NEW YORK NY (987-654)</p>
                </div>
              </div>
                  <div className="col-md-4 d-flex justify-content-center">
                <div
                  className="p-4 text-white rounded-4 bg-success text-start"
                  style={{ width: "260px" }}
                >
                  <h5 className="fw-bold mb-3">⏱️HOURSE</h5>
                  <p className="mb-1">MON-FRI,11AM-7PM</p>
                  <p>SAT-SUN,3PM-8PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Contact
