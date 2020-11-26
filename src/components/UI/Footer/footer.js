import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Row, Col, Card } from 'react-bootstrap';
import Logo from '../../../assets/images/Logo-Black-256w-min.png';
import Container from 'react-bootstrap/Container';
import classes from './footer.css';
import ScrollAnimation from 'react-animate-on-scroll';


class Footer extends Component {
    render() {
        return (
            <div>
                <Jumbotron fluid className={classes.footerjumb}>
                    <Container>
                        <Row>
                            <div className="col-md-6">
                                <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                    <a href="#"><img className={classes.footerlogoimg} src={Logo} /></a>
                                </ScrollAnimation>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                    <h6 className={classes.footerheading}>Online boutique for busy independent women</h6>
                                </ScrollAnimation>

                            </div>
                            <div className="col-md-6">
                                <Row className={classes.footermenu}>
                                    <div className="col-md-4">
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                        <th>Menu</th>
                                        <li><a className={classes.left} href="#">Home</a></li>
                                        <li><a className={classes.left} href="#">FAQ</a></li>
                                        <li><a className={classes.left} href="#">Reviews</a></li>
                                        </ScrollAnimation>
                                    </div>
                                    <div className="col-md-4">
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                        <th>Company</th>
                                        <li><a className={classes.left} href="#">About</a></li>
                                        <li><a className={classes.left} href="#">Privecy Policy</a></li>
                                        <li><a className={classes.left} href="#">Terms</a></li>
                                        </ScrollAnimation>
                                    </div>
                                    <div className="col-md-4">
                                        <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                            <th>Contact</th>
                                            <li><a href="#">hello@getbinks.com</a></li>
                                            <li>1st Floor, Sri Sai Sadan, #9, St. John's Road, Ulsoor, Bangalore - 42</li>
                                        </ScrollAnimation>
                                    </div>
                                </Row>
                            </div>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}
export default Footer;