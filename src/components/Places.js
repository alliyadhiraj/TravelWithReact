import React from "react";
import images from "../components/images/goldenTemple.jpg";
import tajmahal from "../components/images/tajmahal.jpg";

// let {images} = this.props;

const places = ()=> (

   

    <div className="places-container">
            <div className="card">
                <img src={images}/>
                <h2>Taj Mahal</h2>
            </div>
            <div className="card">
                <img src={tajmahal} />
                <h2>Golden Temple</h2>
            </div>
        </div>

);

export default places;