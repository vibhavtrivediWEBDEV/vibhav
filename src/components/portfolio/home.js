import React, { useEffect, useState } from 'react'
import "../../components/portfolio/home.css"
import main from "../../images/main.png"
import pro1 from "../../images/pro1.png"
import pro2 from "../../images/pro2.jpeg"
import pro3 from "../../images/pro3.jpg"
import pro4 from "../../images/pro4.jpg"
import pro5 from "../../images/pro5.png"
import pro6 from "../../images/pro6.png"
import profile from "../../images/profilephoto.jfif"
import "./home.css"



function Home() {



  const [count,setcount] =useState(4)
  useEffect(()=>{
    setcount(count+1)
  },[])

  




  return (
    <>
      <div className="section1">
     <div className="name"> I'm vibhav</div>

        <div className="row">

          <div className="content">
            <h2>i build digital products & brands <br /> users love it  </h2>
            <p>I’m a freelance UX consultant from kanpur 
            </p>
            <div className="flex">
              <input type="text" />
              <button className='button'>get started</button>
            </div>
          </div>
          <div className="img">
            <img src={main} alt="" />
          </div>
        </div>

      </div>
      <div className="effect1"></div>

      <section class="section">
        <h1 >our <b class="our">design</b></h1>


        <div class="row">
          <div class="course-col">
            <h3>web-design</h3>
            <p>I have the enthusiasm and hunger to create things that are beautiful and functional. Things that makes life easier, that is simple and effective. After getting Post Graduate Diploma in Multimedia and Animation, </p>
          </div>
          <div class="course-col">
            <h3>photo-editing</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi beatae ex, hic deleniti itaque quia
              tenetur quisquam id corrupti ad omnis cupiditate assumenda? Debitis, hic.</p>
          </div>
          <div class="course-col">
            <h3>vedio-editing</h3>
            <p>The hunger to learn more and do better has helped me stay out of the box and fresh. I love admiring beautiful art and try to infuse my learnings into beautiful & intelligence looking identities</p>
          </div>
          <div class="course-col">
            <h3>mobile responsive</h3>
            <p>Every single visual design task, either for a website or Mobile, challenges me to do distinct, user friendly, modern and stay aligned to the user experience phenomenon.</p>
          </div>
        </div>


      </section>

      <div className="section3">
        <div className="row">
          <div className="model ">
            <div className="projects">50+</div>
            <p>project's completed</p>
          </div>
          <div className="model ">
            <div className="projects">{count}+</div>
            <p>designing complement</p>
          </div>
          <div className="model ">
            <div className="projects">8+</div>
            <p>month 's experience</p>
          </div>
          <div className="model ">
            <div className="projects">22+</div>
            <p>happy clients</p>
          </div>
        </div>

      </div>



      <div className="effect1"></div>

      <div className="section4">
        <section class="campus">
          <h1 >lets deep dive in projects</h1>


          <div class="row">
            <div class="campus-col">
              <img   src={pro1} alt="" />
              <div class="layer">
            <h3 >coinzz</h3>
              </div>
            </div>
            <div class="campus-col">
              <img src={pro2} alt="" />
              <div class="layer">
                <h3>dashboard</h3>
              </div>
            </div>
            <div class="campus-col">
              <img src={pro3} alt="" />
              <div class="layer">
                <h3>portfolio</h3>
              </div>
            </div>
          </div>

          <br /><br /><br /><br />

          <div class="row">
            <div class="campus-col">
              <img src={pro4} alt="" />
              <div class="layer">
                <h3>wire framing</h3>
              </div>
            </div>
            <div class="campus-col">
              <img src={pro5} alt="" />
              <div class="layer">
                <h3>ui design</h3>
              </div>
            </div>
            <div class="campus-col">
              <img src={pro6} alt="" />
              <div class="layer">
                <h3>ux interface</h3>
              </div>
            </div>
          </div>

        </section>
      </div>





      <div className="section7">
        <section class="testimonial">
          <h1 data-aos="zoom-in-down" data-aos-offset="100" data-aos-delay="100">what our client says</h1>


          <div class="member-card">
            <img src={profile} alt="" />
            <p>vibhav was fantastic! He intuitively got what I was asking for, even if I wasn’t entirely clear in my own head and his designs were really awesome. He was always responsive, a great communicator and kept his cool professionalism through many rounds of iterations to our web design. I’d highly recommend him to anyone (and already have!)</p>
            <h2 data-aos="flip-left" data-aos-offset="100" data-aos-delay="300">* Alan walker</h2>


          </div>


        </section>
      </div>



    </>
  )
}

export default Home;