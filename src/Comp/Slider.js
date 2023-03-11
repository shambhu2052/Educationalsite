import React from 'react'

function Slider() {
  return (
    <>
    <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" className="d-block w-100" alt="Avatar"/>
      <div className="box1">
        <h1>Meaking <span>your ideas</span><br/>
                  <div className="text-center">happen!</div> </h1>
<p className="text-center">It is a long established fact that a reader will be distracted by<br/> the readable content of a page when looking at its layout.
</p>
<div className="btn-group">
   <a href="#" className="btn btn-primary mx-2">Get Started</a>
   <a href="#" className=" btn btn-secondary mx-2">Our Project</a>
</div>
      </div>
      </div>
      <div className="carousel-item ">
    <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" className="d-block w-100" alt="Avatar"/>
      <div className="box1">
        <h1>Meaking <span>your ideas</span><br/>
                  <div className="text-center">happen!</div> </h1>
<p className="text-center">It is a long established fact that a reader will be distracted by<br/> the readable content of a page when looking at its layout.
</p>
<div className="btn-group">
   <a href="#" className="btn btn-primary mx-2">Get Started</a>
   <a href="#" className=" btn btn-secondary mx-2">Our Project</a>
</div>
      </div>
      </div>
    <div className="carousel-item">
      <img src="https://img.freepik.com/premium-photo/aerial-view-chicago-skylines-south-sunset_63253-7235.jpg?w=2000" className="d-block w-100" alt="Avatar" />
      <div className="box1">
        <h1>Meaking <span>your ideas</span><br/>
        <div className="text-center">happen!</div> </h1>
<p className="text-center">It is a long established fact that a reader will be distracted by<br/> the readable content of a page when looking at its layout.
</p>
<div className="btn-group">
   <a href="#" className="btn btn-primary mx-2">Get Started</a>
   <a href="#" className=" btn btn-secondary mx-2">Our Project</a>
</div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

    </>
  )
}

export default Slider