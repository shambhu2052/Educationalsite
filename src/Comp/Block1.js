import React, { useEffect, useState } from 'react'

function Block1() {
  let [post, setPost]=useState('')
  useEffect(()=>{
    window.addEventListener('scroll',stickArrow);
    return()=>window.removeEventListener('scroll',stickArrow);
  },[]);
  let stickArrow=()=>{
    let windowHeight=window.scrollY;
    windowHeight> 600? setPost('sticky-arrow'):setPost('');
  }
  return (
    <>
    <div className="container py-3">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12 image">
         <a href=""> <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej.png" alt="avatar" width="550px" height="400px"/></a>
        </div>
        <div className="col-lg-6 col-sm-12 col-md-6 who">
          <h1>Who We Are ?</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam velit hic excepturi ullam? Adipisci, numquam!</p>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, enim</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ex!. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et, illo.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, porro!. Lorem ipsum dolor sit amet consectetur adipisicing elit. At, corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,.</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className={`arrow ${post}`}>
      <a href="#"><i class="fa-sharp fa-solid fa-arrow-up px-3 py-3"></i></a>
        </div>
    </div>
    </>
  )
}

export default Block1