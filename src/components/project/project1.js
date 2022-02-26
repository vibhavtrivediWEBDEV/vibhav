import React from 'react'
import "../../components/project/project1.css"
import pro1 from "../../images/pro1.png"
import pro2 from "../../images/pro2.jpeg"
import pro3 from "../../images/pro3.jpg"
import pro4 from "../../images/pro4.jpg"
import pro5 from "../../images/pro5.png"
import pro6 from "../../images/pro6.png"
import proc1 from "../../images/proc1.jpg"
import proc2 from "../../images/proc2.jpg"
import proc3 from "../../images/proc3.jpg"
import proc4 from "../../images/proc4.jpg"
import proc5 from "../../images/proc5.jpg"
import proc6 from "../../images/proc6.jpg"
import "./project1.css"
import Carousel from "react-material-ui-carousel"


function Project() {

 const bannerData = [
    {
      img1:proc5,
      img2:pro1
    },
    {
      img1:proc2,
      img2:pro2
    },
    {
      img1:proc3,
      img2:pro4
    },
    {
      img1:proc6,
      img2:pro5
    },
    {
      img1:proc1,
      img2:pro6
    }
];





return <div className='proj'>
<h1 className='gradient'> <b>*</b> Case study</h1>
<Carousel
    autoPlay={true}
    animation='fade'
    indicators={true}
    navButtonsAlwaysVisible={false} >
    {
        bannerData.map(img => (
            <div className="rows">
            <img src={img.img1} />
            <img className='z' src={img.img2} />
            </div>
            
        ))
    }
</Carousel>
</div>;






 
}

export default Project;



// proc5 = pro1
// proc2 = pr2
// proc3 =pro4
// proc6=pro5
// proc1=pro6