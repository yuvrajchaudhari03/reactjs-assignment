import React, { Component } from 'react';
import classes from './carousel.css';
import Slider from "react-slick";
import { Row, Col, Card } from 'react-bootstrap';
import Img1 from '../../../assets/carousalimg/img1.jpg'
import Img2 from '../../../assets/carousalimg/img2.jpg'
import Img3 from '../../../assets/carousalimg/img3.jpg'
import Img4 from '../../../assets/carousalimg/img4.jpg'
import Img5 from '../../../assets/carousalimg/img5.jpg'
import Img6 from '../../../assets/carousalimg/img6.jpg';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black" }}
            onClick={onClick}
        />
    );
}

class Carousel1 extends Component {
    render() {
        const settings = {
            dots: false,
            centerMode: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        };
        return (
            <Row className={classes.carousel}>
                <div className="col-lg-12">
                    <Slider {...settings}>
                        <div className="col-md-12">
                            <img className={classes.images} src={Img1} />
                        </div>
                        <div>
                            <img className={classes.images} src={Img2} />

                        </div>
                        <div>
                            <img className={classes.images} src={Img3} />

                        </div>
                        <div>
                            <img className={classes.images} src={Img4} />

                        </div>
                        <div>
                            <img className={classes.images} src={Img5} />

                        </div>
                        <div>
                            <img className={classes.images} src={Img6} />

                        </div>
                    </Slider>
                </div>
            </Row>
        )
    }
}

export default Carousel1; 