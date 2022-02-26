import React from 'react'
import Carousel from "react-material-ui-carousel"

function Carouselbanner() {

    const bannerData = [
        {
            id: 1,
            name: "fedrick josh",
            posts: "founder of bradely",
            desc: "very creative and has a deep knowlwdge of his field his problem solving extends to all domains",
            img: "https://media.istockphoto.com/photos/portrait-of-young-designer-picture-id590158408?b=1&k=20&m=590158408&s=170667a&w=0&h=huwABISGjj-w2BA_Mi-RkjVC3jkRpmB38uSkq6uBdfY=",

        },
        {
            id: 2,
            name: "anjela yu",
            posts: " seniur ui designer ",
            desc: "an expert in the are of crafting a product to have high conversation rates vibhav will walk on broken glass if the project needs him too",
            img: "https://media.istockphoto.com/photos/portrait-of-young-woman-smiling-picture-id1304581885?b=1&k=20&m=1304581885&s=170667a&w=0&h=B7KElxD35m6lKn6R7aeKb70Lyft_fpf6CkuXRdUyBzI="
        },
        {
            id: 3,
            name: " ritesh ",
            posts: "project engineer",
            desc: "a friendly clilled out guy who is easy fit to any earlier stage startup his designs and codes like a pro !!!",
            img: "https://media-exp1.licdn.com/dms/image/C5603AQE3tQvOjUaOsA/profile-displayphoto-shrink_100_100/0/1632557555317?e=1651104000&v=beta&t=JDddgGdRvwxWo_w-GDq60rO4_xv6MTSIS9W4j5kuijA"
        },
        {
            id: 4,
            name: " vedang",
            posts: "ux designer Concentrix",
            desc: "extremly driven and talented young guy very passionate about creating these stuff",
            img: "https://media-exp1.licdn.com/dms/image/C4E03AQHmoAd_ofFGfA/profile-displayphoto-shrink_100_100/0/1613083322422?e=1651104000&v=beta&t=PSp8CvFUBd4sIXmiciJ3gxWdTVwgc97b0Gj91ZfcJQY"
        },
        {
            id: 5,
            name: "mahi doe",
            posts: "founder of loom",
            desc: "ui /ux comes naturly to him , his free thinking makes him an ideal pick for any product or service design team",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRlc2lnbmVyJTIwbWFuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
        }

    ];

    return (
        <>
            <Carousel
                autoPlay={true}
                animation='slide'
                indicators={false}
                navButtonsAlwaysVisible={true}
                navButtonsProps={{
                    style: {
                    
                        color: "#333",
                        borderRadius: 50,
                        height: "40px",
                        width: "40px",
                        marginTop: "-30px",
                        marginLeft: "0px",
                        border: "1px solid black"
                    }
                }}
            >
                {
                    bannerData.map(post => (
                        <center>
                        <br /><br />
                        <h2 className='gradient'>Testimonial</h2>
                            <div className="banner">
                                <p className='para'> {post.desc} </p>
                              
                              
                                <img src={post.img} alt="" /><br /><br />
                                 <h6>{post.name}</h6>
                                <p>{post.posts}</p>
                            </div>
                        </center>
                    ))

                }
            </Carousel>
        </>
    )
}

export default Carouselbanner;