import React  from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./CarouselComponent.css"

function CarouselComponent(){
    return (
        <Carousel>
            <div>
                <img src="hongkong.jpg" alt="Hong Kong"/>
                <p className="legend">Hong Kong</p>
            </div>
            <div>
                <img src="japan.webp" alt="Japan" />
                <p className="legend">Japan</p>
            </div>
            <div>
                <img src="lasvegas.webp" alt="Las Vegas"/>
                <p className="legend">Las Vegas</p>
            </div>
            <div>
                <img src="maco.webp" alt="Maco"/>
                <p className="legend">Maco</p>
            </div>
        </Carousel>
    );

}
 export default CarouselComponent