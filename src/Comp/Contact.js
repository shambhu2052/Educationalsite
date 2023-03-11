import React from 'react'

function Contact() {
  return (
    <>
    <div className="container py-5 contact">
        <h1>Contact Us</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, saepe dolorem obcaecati repudiandae rem consequatur modi optio placeat neque ex.</p>
        <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12">
           <div className="box7">
           <i class="fa-solid fa-phone text-success"></i>
            <div className="box8">
             <h2 className="text-success">Phone Number</h2>
             <p className="number">9811969388</p>
            </div>
           </div>
           <div className="box7">
           <i class="fa-regular fa-envelope text-success"></i>
            <div className="box8">
             <h2 className="text-success">Email</h2>
             <p className="number">Shambhuchu21@gmail.com</p>
            </div>
           </div>
           <div className="box7">
           <i class="fa-solid fa-location-dot text-success"></i>
            <div className="box8">
             <h2 className="text-success">Address</h2>
             <p className="number">Bhaktapur, NayaThimi</p>
            </div>
           </div>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-12 ">
           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25474.35364374568!2d85.36588047430513!3d27.68034710805172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1674659545000!5m2!1sen!2snp" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"className="map" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact