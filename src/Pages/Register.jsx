import React from 'react'

const Register = () => {
  return (
    <div className="container py-5">
      <div className="row g-5 align-items-start mb-5">
        <div className="col-lg-7">
          <h2 className="fw-bold text-dark mb-3">
            Manage Projects With Ease -{" "}
            <span className="text-success">ProManage</span>
          </h2>

          <p className="text-muted fs-5 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            ullam suscipit quia, corrupti dolorem vitae quas non itaque sint
            doloru
          </p>
          <p className="text-muted fs-5 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            ullam suscipit quia, corrupti dolorem vitae quas non itaque sint
            dolorum?
          </p>
          <p className="text-muted fs-5 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            ullam suscipit quia, corrupti dolorem vitae quas non itaque sint
            dolorum?
          </p>
          <p className="text-muted fs-5 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            ullam suscipit quia, corrupti dolorem vitae quas non itaque sint
            dolorum?
          </p>
          <div className="d-flex gap-3 mt-5">
            <button className="btn btn-outline-success px-4 py-2">
              Learn More
            </button>

            <button className="btn btn-success px-4 py-2">
              Start Now
            </button>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="p-4 border rounded shadow-sm bg-white">
            <h4 className="text-center fw-bold mb-4">Register Now</h4>

            <form>
              <div className="mb-4">
                <label className="form-label fw-semibold">Full Name</label>
                <input type="text" className="form-control form-control-lg" />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Email</label>
                <input type="email" className="form-control form-control-lg" />
              </div>

              <div className="mb-4">
                <label className="form-label fw-semibold">Phone</label>
                <input type="number" className="form-control form-control-lg" />
              </div>
              <div className="mb-4">
                <label className="form-label fw-semibold">Select plan</label>

                <select name="plan" id="plan" className="form-select form-select-lg">
                  <option>Free Plan</option>
                  <option>Pro Plan</option>
                  <option>Enter Plan</option>
                </select>
              </div>

              <button className="btn btn-success w-100 py-2 fs-5">
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
     <div className="text-center mb-4">
  <h3 className="fw-bold mb-3">Unlock Your Project Power</h3>
  <p className="text-muted fs-6 mb-4">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
    doloremque!
  </p>
</div>
<div className="row g-4">
  <div className="col-md-3">
    <div className="card h-100 shadow-sm p-2">
      <img src="https://images.unsplash.com/photo-1787647561274-d48d803795a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTJ8fHNtYXJ0JTIwcGxhbm5pbmd8ZW58MHx8MHx8fDA%3D" alt="" className="card-img-top" />

      <div className="card-body">
        <h6 className="fw-bold mb-1">Smart Planning</h6>
        <p className="text-muted small mb-0">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
    
  </div>
    <div className="col-md-3">
    <div className="card h-100 shadow-sm p-2">
      <img src="https://images.unsplash.com/photo-1578230324022-5d4fa1b9676b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q3JhdGl2ZSUyMGJvYXR8ZW58MHx8MHx8fDA%3D" alt="" className="card-img-top" />

      <div className="card-body">
        <h6 className="fw-bold mb-1">Crative boat</h6>
        <p className="text-muted small mb-0">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
    
  </div>
      <div className="col-md-3">
    <div className="card h-100 shadow-sm p-2">
      <img src="https://plus.unsplash.com/premium_photo-1723773736797-8d05f469c6df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q29sbGFib3JhdGlvbnN8ZW58MHx8MHx8fDA%3D" alt="" className="card-img-top" />

      <div className="card-body">
        <h6 className="fw-bold mb-1">Collaborations</h6>
        <p className="text-muted small mb-0">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
    
  </div>
     <div className="col-md-3">
    <div className="card h-100 shadow-sm p-2">
      <img src="https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QUklMjBTdXBwb3J0fGVufDB8fDB8fHww" alt="" className="card-img-top" />

      <div className="card-body">
        <h6 className="fw-bold mb-1">AI Support</h6>
        <p className="text-muted small mb-0">
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
    
  </div>
</div>
    </div>
  )
}

export default Register
