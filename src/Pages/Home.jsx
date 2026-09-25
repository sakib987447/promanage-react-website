import React from 'react'

const Home = () => {
  return (
    <div className='container-fluid mt-4'>
      <header className='text-center d-flex align-items-center justify-content-center'
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJ1c2luZXNzfGVufDB8fDB8fHww')",
          height:"80vh",
          backgroundSize:"cover",
          backgroundPosition:"center",
          position:"relative",
          color:"white"
         }}>
          <div style={{position:"absolute" ,top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,0.7)"
          }}></div>
<div
  className="container position-relative"
  style={{ zIndex: 2, color: "white" }}
>
  <div className="row py-lg-5">
    <div className="col-lg-8 col-md-10 mx-auto">
      <h1 style={{color:"white"}}>Manage Project with Ease - ProManage</h1>
      <p style={{color:"white"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
        doloremque nostrum cumque. Provident id hic nisi placeat eum corporis
        voluptatibus?
      </p>
      <a href="#" className='btn btn-success me-2'>Get Started</a>
      <a href="#" className='btn btn-outline-light'>Learn more</a>
    </div>
  </div>
</div>
      </header>

      {/* section2 */}
      <section className="py-5">
  <h2 className="mb-4 text-center">Why Choose Us?</h2>
  <div className="row">
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <div className="card-body text-center">
          <h5 className="card-title">Quality</h5>
          <p className="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum, aspernatur?
          </p>
        </div>
      </div>
    </div>
      <div className="col-md-4 mb-3">
      <div className="card h-100">
        <div className="card-body text-center">
          <h5 className="card-title">Reliability</h5>
          <p className="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum, aspernatur?
          </p>
        </div>
      </div>
    </div>
      <div className="col-md-4 mb-3">
      <div className="card h-100">
        <div className="card-body text-center">
          <h5 className="card-title">Support</h5>
          <p className="card-text">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum, aspernatur?
          </p>
        </div>
      </div>
    </div>
    
  </div>
</section>


{/* section3 */}
<div className='text-center py-5 bg-success text-white rounded'>
<h2>Get Started Today</h2>
<p className='mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, facere!</p>
<a href="/register" className='btn btn-light btn-lg'>Register Now</a>
</div>
    </div>
  )
}

export default Home
