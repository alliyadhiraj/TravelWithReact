import React from 'react'
import Social from './Social'


export default function Services(props) {
  return (
    <div>
        <div class="showcase"> 
        
        <div class="services-container">
            <div class="photography">
                <h2>Photography</h2>
        <p class="desc">Photography is the art, application, and practice of creating 
        durable images by recording light, either electronically by means of an image 
        sensor, or chemically by means of a light-sensitive material such as photographic 
        film.

                    <a class="read" href="#"><span>Read More...</span></a>
                </p>

            </div>
            <div class="video">
                <h2>Videography</h2>
                <p class="desc">It includes story development and writing, pre-productio  
                and planning, a huge variety in types of shooting scenarios, creative 
                post-production including sound design, and even marketing and 
                distribution. Brand Documentaries help in creating the perfect narrative 
                for a business. Videos help translate the vision.
                    <a class="read" href="#"><span>Read More...</span></a>
                </p>

            </div>
        </div>
    
        {props.social}
    </div>
    </div>
  )
}
