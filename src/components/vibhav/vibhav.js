import React, { useEffect, useState } from 'react'
import profile from "../../images/profilephoto.jfif"
import "../vibhav/vibhav.css"
import svg from "../../images/Union.svg"
import { useSpring, animated } from 'react-spring'


import Drag from './drag'

import Project from '../project/project1'
import Carouselbanner from './Carousel'
import { Link } from 'react-router-dom'









function Vibhav() {

    const [flip, set] = useState(false)





    useEffect(() => {
        const hamburgerbtn = document.querySelector(".burger"),
            navmenu = document.querySelector(".nav-menu"),
            closenavbtn = document.querySelector(".close-nav-menu");




        hamburgerbtn.addEventListener("click", shownavmenu);
        closenavbtn.addEventListener("click", hidenavmenu);
        function shownavmenu() {
            navmenu.classList.add("open");

        }
        function hidenavmenu() {
            navmenu.classList.remove("open");

        }
        // _______________________________________




    }, [])



    // animation
    const heading = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 1000,

        onRest: () => set(!flip),
    })

    const effect3 = useSpring({ to: { opacity: 1 }, from: { opacity: 0, }, delay: 1000 })

    const effect2 = useSpring({ to: { opacity: 1 }, from: { opacity: 0, }, delay: 1500 })

    const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0, }, delay: 1600 })

    return (
        <>
            <animated.div style={props}>
                <header class="header">
                    <div class="container">
                        <div
                            class="row ">
                            <div class="logo "><a href="">v</a>
                            </div>
                            <div class="burger outer-shadow ">
                                |||
                            </div>

                        </div>
                    </div>
                </header>

                {/* <!-- ---------------------- --> */}

                <nav class="nav-menu">
                    <div class="close-nav-menu outer-shadow hover-in-shadow">
                        &times;
                    </div>
                    <div class="nav-menu-inner">
                        <ul>
                            <li><a href="" class="inner-shadow active outer-shadow hover-in-shadow">menu</a></li>
                            <li><a href="https://vibhavtrivediwebdev.github.io/vibhavtrivediportfolio/" class=" link-item outer-shadow hover-in-shadow">home</a></li>
                            <li><a href="#services" class=" link-item outer-shadow hover-in-shadow">services</a></li>
                            <li><a href="#portfolio" class=" link-item outer-shadow hover-in-shadow">portfolio</a></li>
                            
                        </ul>
                    </div>

                    {/* <!-- __________________________ --> */}
                    <p class="copyright-text">&copy; 2022 by-vibhav</p>


                </nav>
                <div class="fade-out-effect"></div>

            </animated.div>

            {/* <!-- ---home section start----------- --> */}

            <section class="home-section section active" id="home">
                {/* <!-- ------effect------ --> */}
                <div class="effect-wrap">
                    <div class="effect effect-1"></div>

                    <animated.div style={effect2} class="effect effect-2">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>

                    </animated.div>

                    <div class="effect effect-3"></div>
                    <div class="effect effect-4"></div>
                    <animated.div style={effect3} class="effect effect-5">
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </animated.div>

                </div>


                {/* <!-- --------effect end -------- --> */}
                <div className="container">
                    <div className="row">
                        <div className='content'>

                            <animated.h5 className='first' style={heading}>hello !</animated.h5><br />

                            <h5 className='second'> Im vibhav</h5><br />
                            <h5 className='third'> designer  <em className="gradient">& </em> frounted developer</h5>
                            <br /><br />
                            <a className=' play ' href="#section5"><ion-icon name="play-circle"></ion-icon></a>
                        </div>

                    </div>
                </div>


            </section>

            <img className='svg' id='svg' style={{ "height": "340px" }} src={svg} alt="" />


            <div className="section2 container">


                <div className="row">
                    <div className="about">
                        <animated.div  >
                            <Drag />
                        </animated.div>





                        <div className="social-links">
                            <a class="social outer-shadow hover-in-shadow"><ion-icon name="logo-facebook"></ion-icon></a>
                            <div class="social outer-shadow hover-in-shadow"><ion-icon name="logo-instagram"></ion-icon></div>
                            <a href='https://www.linkedin.com/in/vibhav-trivediwebdev/' class="social outer-shadow hover-in-shadow"><ion-icon name="logo-linkedin"></ion-icon></a>
                            <div class="social outer-shadow hover-in-shadow"><ion-icon name="logo-behance"></ion-icon></div>
                        </div>

                    </div>
                    <div className="about">
                        <h5> hi i m creative  <em className="gradient">UI </em>/<em className="gradient">UX </em>   designer</h5>
                        <p>I’m a freelance UX consultant from India creating hign-performing digital interfaces using emotional design principals and sprincle of Wonder <em>i hope you find something and that'll make you go </em> <em className="gradient">"woah" </em> </p>
                        <div className="flex">
                            <div class="btn"><a href={profile} download>download cv</a></div>
                            <div class="btn" ><a href="mailto:vibhavtrivedi6@gmail.com">hire me</a></div>
                        </div>
                    </div>

                </div>



            </div>

             <div className="mg">
                 


            <div className="section4">
                <center>
                    <h1 className='gradient'> Recent Projects</h1>
                </center>
                <div className="row">
                    <div className="recent">
                        <img src={profile} alt="" />
                    </div>
                    <div className="recent">
                        <img src={profile} alt="" />
                    </div>
                    <div className="recent">
                        <img src={profile} alt="" />
                    </div>
                </div>
            </div>

            <center>
                <div className="describe">
                    <center>
                        <h2 className='gradient'>About my works</h2>
                    </center><br />
                    <br />
                    <div className="row">
                        <div className="desc">
                            <h3>lifecyle</h3>
                            <ion-icon name="code-slash-outline"></ion-icon>
                            <p>my coding lifecycle is first i prototyping and then creating the wireframing of the project in <b>Figma</b> and next procedure is to converting it into <b>html </b>&<b>css</b> and trying to making every thing creative that user loves In one go including functionalty and animations. </p>
                        </div>
                        <div className="desc">
                            <h3>works_with</h3>
                            <ion-icon name="hammer-outline"></ion-icon>
                            <p>In the role of <b>frountend</b> + <b>designer </b> i use various tools which makes me motivating to go towards my goals
                                <li>vs code editor</li>
                                <li>figma  design</li>
                                <li>svg & sass</li>
                                <li>crome developer tool</li>
                                <li>react libraries</li>
                            </p>
                        </div>
                        <div className="desc">
                            <h3>user interview</h3>
                            <ion-icon name="people-outline"></ion-icon>
                            <p>I conduction three remote <b>user interview</b> to gain a well-rounded understanding of my users' needs ,goals , and points of friction the reserch helped me to confirm or revise my possible solution and user stories from there .</p>
                        </div>
                        <div className="desc">
                            <h3>user love</h3>
                            <ion-icon name="heart-outline"></ion-icon>
                            <p>I 'm asking to some childrens whose age  b/w 10 to 15 that about how was my work and all are happy to see  like aniamtions and all ,  I'm also posting my designs in <i>linkdin , instagram  and behance </i> and many people shows their love in these posts</p>
                        </div>
                    </div>

                </div>
                <br /><br />
            </center>
            <div className="peoplesay">
                <Carouselbanner />
            </div>


            <div className="section5" id="section5">
                <center>
                    <Project />
                </center>
            </div>


             </div>
       

        </>
    )
}

export default Vibhav;
