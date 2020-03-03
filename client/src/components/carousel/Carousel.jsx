import React from 'react';
import './Carousel.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import product from '../../assets/product.png'

function ProductCarousel() {

    return (

        <Carousel>
                <div>
                    <img src={product} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={product} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={product} />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={product} />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={product} />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={product} />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
    )
}

export default ProductCarousel;