import React from "react";
import Social from "./Social";


const HelpPage = (props)=> (

    <div>
            <div className="showcase"> 
             
        <div className="about-container">
            <div className="map">
                {/* <img src={map} width="350px" alt="" srcset=""/> */}
            </div>
            <div className="about-video">
                <iframe className="abt-vid" width="350" height="312" src="https://www.youtube.com/embed/F599PQZUyf8"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen></iframe>
            </div>

        </div>

        {props.social}
    </div>
    </div>

);

export default HelpPage;

