import React from 'react'

function Footer() {
  return (
    <>
    <div className="footer py-3">
        <div className="container py-3">
           <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 ">
            <h1>Reveal</h1>
            <div className="box11">
                <p>New Baneshwar, Kathmnadu</p>
                <p>Phone:9811969388</p>
                <p>Email:Shambhuchu21@gmail.com</p>
            </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <h5>Useful Link</h5>
                <div className="box12">
                    <ul>
                        <li><a href="#"><p>Home</p></a></li>
                        <li><a href="#"><p>About</p></a></li>
                        <li><a href="#"><p>Contact Us</p></a></li>
                        <li><a href="#"><p>Login</p></a></li>
                    </ul>
                </div>
            </div>
             <div className="col-lg-3 col-md-6 col-sm-12">
                <h5 className="ps-4">Our Service</h5>
                <div className="box12">
                    <ul>
                        <li><a href="#"><p>IT Support</p></a></li>
                        <li><a href="#"><p>UX/UI Design</p></a></li>
                        <li><a href="#"><p>Web Development</p></a></li>
                        <li><a href="#"><p>Apps Development</p></a></li>
                         
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
                <h4>Join Our Member</h4>
                <p>Lorem ipsum dolor sit amnet consecteture adipising sill,Sdyf iure exporlicha nonstrum vero facers error ,teneture dolorum harum doloremque.
                </p>
                <button type="button" class="btn btn-success ms-5">Join Us</button>
            </div>
           </div>
        </div>
    </div>
    </>
  )
}

export default Footer