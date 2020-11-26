
import React, { Component } from 'react';
import Navbar from '../../components/UI/Navbar/navbar';
import classes from './home.css';
import Logo from '../../../src/assets/images/Logo-Blue-min-p-500.png';
import Img1 from '../../../src/assets/images/princess-saree-blouse-min.png';
import Img2 from '../../../src/assets/images/for_by_women-min.png';
import Img3 from '../../../src/assets/images/sofa.png';
import Bg1 from '../../../src/assets/images/icon-bg-1-min.png';
import Bg2 from '../../../src/assets/images/icon-bg-2-min.png';
import Bg3 from '../../../src/assets/images/icon-bg-3-min.png';
import Img4 from '../../../src/assets/images/home_pickup-min.png';
import Img5 from '../../../src/assets/images/personal_designer-min.png';
import Img6 from '../../../src/assets/images/doorstep_delivery-min.png';
import Quotation from '../../assets/images/quotation-marks-1.png'
import Lefticon from '../../assets/images/chevron_left.png';
import Rightticon from '../../assets/images/chevron_right.png';
import Carousel1 from '../../components/UI/carousel/carousel';
import Accordion from 'react-bootstrap/Accordion'
import { Row, Col, Card } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import InstaLogo from '../../assets/images/instagram.svg';
import Insta1 from '../../assets/images/insta-1.jpg';
import Insta2 from '../../assets/images/insta-2.jpg';
import Insta3 from '../../assets/images/insta-3.jpeg';
import Insta4 from '../../assets/images/insta-4.jpg';
import HomeRight from '../../assets/images/hero_blouse-min.png';
import InstaGray from '../../assets/images/instagram_grey-min.png';
import Footer from '../../components/UI/Footer/footer';
import ScrollAnimation from 'react-animate-on-scroll';
import { Animated } from "react-animated-css";



class Home extends Component {
    state = {
        active: false,
    };

    toggleClass = () => {
        const currentstate = this.state.active;
        if (currentstate) {

            this.setState({ active: false });
        }
        else {
            this.setState({ active: true });

        }
    };
    render() {
        return (
            <div className={classes.rootdiv}>

                <div className={classes.homeback}>
                    <Navbar />
                    <div >
                        <Row>
                            {/* <div className={classes.homeleft}> */}
                            <div className="col-md-6">
                                <Animated animationIn="fadeInUp" isVisible={true}>
                                    <img className={classes.logoimg} src={Logo} alt="alal" />
                                </Animated>
                                <Animated animationIn="fadeInUp" isVisible={true}>
                                    <h1 className={classes.heading1}>Don't go looking for the perfect fit.<br></br>
                            Let it come home to you.</h1>
                                </Animated>
                                <Animated animationIn="fadeInUp" isVisible={true}>
                                    <h4 className={classes.heading2}>Great fit. Doorstep pickup & delivery. Design consultation.</h4>
                                </Animated>
                                <Animated animationIn="fadeInUp" isVisible={true}>
                                    <button className={classes.button2}  ><a>Place An Online Stitching Order</a></button>
                                </Animated>
                                <Animated animationIn="fadeInUp" isVisible={true}>
                                    <button className={classes.button1} ><a>Check Our Price</a></button>
                                </Animated>
                            </div>
                            {/* <div className={classes.homeright}> */}
                            <div className="col-md-6">

                                <img className="img-fluid" src={HomeRight} />
                            </div>
                        </Row>
                    </div>
                </div>

                <Container className={classes.trybinkscontainer}>
                    <div className={classes.roottrybinksdiv}>
                        <h6 >Try Binks</h6>
                        <h4>Enjoy a delightful experience, every time.</h4>
                        <Row className={classes.trybinksdiv}>
                            <div className="col-md-4 text-center" >
                                {/* <img className={classes.bg1} src={Bg1} /> */}
                                <div>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                        <img className={classes.img1} src={Img1} />
                                    </ScrollAnimation>
                                </div>
                                <div >
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                        <h4 style={{ fontSize: "20px", fontWeight: "300" }}>A great fit, that gets better</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                        <p className="text-left" style={{ marginBottom: "10px", color: "#81848a", fontSize: "17px", lineHeight: "1.8" }}>Feel out of shape and out of sorts in your clothes? It’s not you, it’s them. A great fit is not just important, it’s everything. That’s why we pull out all the stops to get it right.</p>
                                    </ScrollAnimation>
                                </div>
                            </div>
                            <div className="col-md-4 text-center" >
                                {/* <img className={classes.bg2} src={Bg2} /> */}
                                <div>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                        <img className={classes.img2} src={Img2} />
                                    </ScrollAnimation>
                                </div>
                                <div >
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                        <h4 style={{ fontSize: "20px", fontWeight: "300" }}>Personal design consultant</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                        <p className="text-left" style={{ marginBottom: "10px", color: "#81848a", fontSize: "17px", lineHeight: "1.8" }}>Work with a dedicated designer to bring your outfit to life. Our consultants are qualified, talented women with ideas who understand the intricacies of stitching for Indian body types.</p>
                                    </ScrollAnimation>
                                </div>
                            </div>
                            <div className="col-md-4 text-center" >
                                {/* <img className={classes.bg3} src={Bg3} /> */}
                                <div>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                        <img className={classes.img3} src={Img3} />
                                    </ScrollAnimation>
                                </div>
                                <div >
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                        <h4 style={{ fontSize: "20px", fontWeight: "300" }}>Convenience all the way</h4>
                                    </ScrollAnimation>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                        <p className="text-left" style={{ marginBottom: "10px", color: "#81848a", fontSize: "17px", lineHeight: "1.8" }}>Have you stopped getting clothes tailored because it’s such a time-sink? We hear you! We offer a low effort, no-hiccups experience: pickup and delivery, regular updates, and easy alterations. </p>
                                    </ScrollAnimation>

                                </div>
                            </div>
                        </Row>
                    </div>
                </Container>
                <div className={classes.rootworksdiv}>
                    <h6>How It Works</h6>
                    <h4>You relax. We do all the running around.</h4>
                    <Row className={classes.howworkdiv}>
                        <div className="col-md-4 text-center" style={{
                            border: "1px solid  rgba(182, 32, 89, 0.6)", borderColor: "rgba(182, 32, 89, 0.6)", borderTopLeftRadius: "10px",
                            borderBottomLeftRadius: "10px", borderBottomLeftRadius: "10px"
                        }} >
                            <div className="col-lg-4" style={{ float: "left" }}>
                                <img className={classes.howworkbg1} src={Bg1} />
                                <img className={classes.howworkimg1} src={Img4} style={{ width: "45px" }} />
                            </div>
                            <div className="col-lg-8 mt-4" style={{ float: "right" }}>
                                <h4 className={classes.howworkhds}>Schedule a pickup</h4>
                                <p className={classes.howworkpara}>Place an order online and we’ll swing by your home to pick up your fabric and sample garment for measurements on the scheduled date. No more gruelling visits to the tailor shop!</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-md-4 text-center" style={{
                            border: "1px solid  rgba(182, 32, 89, 0.6)", borderColor: "rgba(182, 32, 89, 0.6)"
                        }} >
                            <div className="col-lg-4" style={{ float: "left" }}>
                                <img className={classes.howworkbg1} src={Bg2} />
                                <img className={classes.howworkimg2} src={Img5} />
                            </div>
                            <div className="col-lg-8 mt-4" style={{ float: "right" }}>
                                <h4 className={classes.howworkhds}><b>Talk to your designer</b></h4>
                                <p className={classes.howworkpara}>Our designer consultant will reach out to you over Whatsapp to understand your preferences and discuss the look of your outfit. Once you confirm the designs, we share the exact quotes & start the stitching process.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-md-4 text-center" style={{
                            border: "1px solid  rgba(182, 32, 89, 0.6)", borderColor: "rgba(182, 32, 89, 0.6)", borderTopRightRadius: "10px", borderBottomRightRadius: "10px"
                        }}>
                            <div className="col-lg-4" style={{ float: "left" }}>
                                <img className={classes.howworkbg1} src={Bg3} />
                                <img className={classes.howworkimg1} src={Img6} />
                            </div>
                            <div className="col-lg-8 mt-4" style={{ float: "right" }}>
                                <h4 className={classes.howworkhds}><b>Breathe easy</b></h4>
                                <p className={classes.howworkpara}>Sit back and relax while we turn your fabric into a stunning outfit. We’ll deliver it in 5 to 15 working days, depending on the timeline you select. Alterations, if any, are taken care of at no extra cost.</p>
                            </div>
                        </div>
                    </Row>
                </div>
                <div className={classes.rootcraftedsdiv}>
                    <h6>Crafted By Binks</h6>
                    <h4>Pretty in themselves. Stunning on our customers.</h4>
                    <Carousel1 />
                </div>
                <div className={classes.everybodydiv}>
                    <h4>Everybody Loves Binks</h4>
                    <h6>Don't take our word for it, hear it from our customers!</h6>
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="false">

                        <ol className="carousel-indicators" style={{ bottom: "-53px" }}>
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className={"carousel-inner ", classes.innercarousel} >
                            <div className="carousel-item active">
                                <img className={classes.quotation} src={Quotation} />
                                <h1 className={classes.quotationhead}>Loved the way they seamlessly handled my orders and patiently designed each item according to my preference. Plus, they saved me a ton of hassle by picking up the fabric and delivering the clothes at my doorstep.</h1>
                                <h6 style={{ float: "right", color: "#b62059" }}>- Sayanti K, C V Raman Nagar</h6>

                            </div>
                            <div className="carousel-item">
                                <img className={classes.quotation} src={Quotation} />
                                <h1 className={classes.quotationhead}>Loved the way they seamlessly handled my orders and patiently designed each item according to my preference. Plus, they saved me a ton of hassle by picking up the fabric and delivering the clothes at my doorstep.</h1>
                                <h6 style={{ float: "right", color: "#b62059" }}>- Sayanti K, C V Raman Nagar</h6>

                            </div>
                            <div className="carousel-item">
                                <img className={classes.quotation} src={Quotation} />
                                <h1 className={classes.quotationhead}>Loved the way they seamlessly handled my orders and patiently designed each item according to my preference. Plus, they saved me a ton of hassle by picking up the fabric and delivering the clothes at my doorstep.</h1>
                                <h6 style={{ float: "right", color: "#b62059" }}>- Sayanti K, C V Raman Nagar</h6>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span ><img className={classes.lefticon} src={Lefticon} /></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span ><img className={classes.righticon} src={Rightticon} /></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <span className={classes.reviewbtnspan}> <button className={classes.button3}><a>Read More Reviews</a></button></span>
                </div>

                <div className="container rootchargesdiv">
                    <div className={classes.chargesheading}>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                            <h6>Uncomplicated Pricing</h6>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                            <h2>No hidden charges, no fuss.</h2>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                            <h5>We keep the prices of our tailoring services transparent, so your decision making is simpler.</h5>
                        </ScrollAnimation>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-2 col-6 text-center">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                {/* <img className={classes.chargebg} src={Bg1} /> */}
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <img className={classes.chargeimg} src={Img1} />
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-2 col-6 text-center">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <h4 className={classes.pricerateitemname}>Saree Blouse</h4>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <div className={classes.underline}></div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <h6>Rs. 899 onwards</h6>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-2 col-6 text-center">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                {/* <img className={classes.chargebg} src={Bg1} /> */}
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <img className={classes.chargeimg} src={Img1} />
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-2 col-6 text-center">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <h4 className={classes.pricerateitemname}>Saree Blouse</h4>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <div className={classes.underline}></div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <h6>Rs. 899 onwards</h6>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-2 col-6 text-center">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                {/* <img className={classes.chargebg} src={Bg1} /> */}
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <img className={classes.chargeimg} src={Img1} />
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-2 col-6 text-center">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <h4 className={classes.pricerateitemname}>Saree Blouse</h4>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <div className={classes.underline}></div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <h6>Rs. 899 onwards</h6>
                            </ScrollAnimation>
                        </div>
                    </div>
                    <Row className={classes.chargesecondrow}>
                        <div className="col-md-2 col-6 text-center">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                {/* <img className={classes.chargebg} src={Bg1} /> */}
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <img className={classes.chargeimg} src={Img1} />
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-2 col-6 text-center">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <h4 className={classes.pricerateitemname}>Saree Blouse</h4>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <div className={classes.underline}></div>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <h6>Rs. 899 onwards</h6>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-2 col-6 text-center">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                {/* <img className={classes.chargebg} src={Bg1} /> */}
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <img className={classes.chargeimg} src={Img1} />
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-2 col-6 text-center">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <h4 className={classes.pricerateitemname}>Saree Blouse</h4>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">

                                <div className={classes.underline}></div>
                            </ScrollAnimation>

                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <h6>Rs. 899 onwards</h6>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-2 col-6 text-center">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                {/* <img className={classes.chargebg} src={Bg1} /> */}
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <img className={classes.chargeimg} src={Img1} />
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-2 col-6 text-center ">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <h4 className={classes.pricerateitemname}>Saree Blouse</h4>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <div className={classes.underline}></div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <h6>Rs. 899 onwards</h6>
                            </ScrollAnimation>
                        </div>
                    </Row>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                        <h3 className={classes.manymore}>and more!</h3>
                    </ScrollAnimation>
                    <div className="text-center">
                        <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                            <button className={classes.detaipricebtn}>See Detail Pricing</button><br></br>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                            <button className={classes.stichingbtn}>Place A Stitching Order</button>
                        </ScrollAnimation>
                    </div>
                </div>
                <div className="container mt-5 h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-md-6 mx-auto">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <h6 className={classes.frabricheadind}>Fabric Sourcing</h6>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <h2 className={classes.frabricsubheadind}>Let's go fabric shopping!</h2>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <div className={classes.underline}></div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <p className="mt-4 text-justify">
                                    Want something stitched but don’t have the time to shop for fabric? We have a gorgeous in-house range of fabrics. We also partner with popular fabric stores in Bengaluru to source options for you. Just sit back and decide what you like. We’ll do the rest!
                            </p>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-6">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <Row className={classes.fabric1}></Row>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <Row>
                                    <Col className={classes.fabric2}></Col>
                                    <Col className={classes.fabric3}></Col>
                                </Row>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
                <div className="container mt-5 h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-md-6 mx-auto">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <h6 className={classes.thoughtful}>Thoughtful Design</h6>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <h2 className={classes.thoughtfulsubheading}>Little details, big difference</h2>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <div className={classes.underline}></div>
                            </ScrollAnimation>
                            <Accordion >
                                <Card className={classes.accordiancard}>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className={classes.cardheader}>
                                            Seam allowance you'll love
                                        <div className={classes.open_close_box}>
                                                <div className={classes.vertical_line}></div>
                                                <div className={classes.horizontal_line}></div>
                                            </div>
                                        </Accordion.Toggle>
                                    </ScrollAnimation>
                                    <Accordion.Collapse className={classes.accordiancollapse} eventKey="0">
                                        <Card.Body>Our outfits will see you through thick and thin, quite literally! Every piece we craft has ample seam allowance to enable alterations in future.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className={classes.accordiancard}>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                        <Accordion.Toggle as={Card.Header} eventKey="1" className={classes.cardheader}>
                                            Roomy Pockets
                                        <div className={classes.open_close_box}>
                                                <div className={classes.vertical_line}></div>
                                                <div className={classes.horizontal_line}></div>
                                            </div>
                                        </Accordion.Toggle>
                                    </ScrollAnimation>
                                    <Accordion.Collapse className={classes.accordiancollapse} eventKey="1">
                                        <Card.Body>How unfair is it that men get sensible, roomy pockets, while women’s pockets seem like an afterthought! We design pockets that can actually hold stuff. And we make them as big as you want them. Oh, the joys of custom made clothing!</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className={classes.accordiancard}>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">

                                        <Accordion.Toggle as={Card.Header} eventKey="2" className={classes.cardheader}>
                                            Pre-washed lining
                                        <div className={classes.open_close_box}>
                                                <div className={classes.vertical_line}></div>
                                                <div className={classes.horizontal_line}></div>
                                            </div>
                                        </Accordion.Toggle>
                                    </ScrollAnimation>
                                    <Accordion.Collapse className={classes.accordiancollapse} eventKey="2">
                                        <Card.Body>Lining material has a will of its own. It usually shrinks after the first wash, and messes with the look and fit of your dress. We avoid this by washing our lining material before stitching it in.</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                                <Card className={classes.accordiancard}>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                        <Accordion.Toggle as={Card.Header} eventKey="3" className={classes.cardheader}>
                                            Quirky specifications
                                        <div className={classes.open_close_box}>
                                                <div className={classes.vertical_line}></div>
                                                <div className={classes.horizontal_line}></div>
                                            </div>
                                        </Accordion.Toggle>
                                    </ScrollAnimation>
                                    <Accordion.Collapse className={classes.accordiancollapse} eventKey="3">
                                        <Card.Body>A dress with detachable sleeves. A blouse with two avatars - high-necked and low-necked. A trouser with one leg a tad bit shorter than the other. We’ve taken pride in catering to our customers’ unique requirements. Got one yourself? Bring it on!</Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                        <div className="col-md-6">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <Row className={classes.fabric4}></Row>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <Row>
                                    <Col className={classes.fabric5}></Col>
                                    <Col className={classes.fabric6}></Col>
                                </Row>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
                <div className="container mt-5 h-100">
                    <div className="row align-items-center h-100">
                        <div className="col-md-6 mx-auto">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <h6 className={classes.bywomenheading}>By Women, For Women</h6>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <h2 className={classes.bywomensubheading}>Welcome to the Binks sisterhood</h2>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <div className={classes.underline}></div>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <p className="mt-4 text-justify">
                                    As women, we have many nuanced notions about our body type, fit, and fashion choices. We believe it takes a woman to fully appreciate this complexity. That’s why at Binks, we have an all-women team of designers and support staff. Everyone you interact with is a woman you can trust - someone who relates to the problems you’ve faced with clothing and knows how to fix them.
                            </p>
                            </ScrollAnimation>
                        </div>
                        <div className="col-md-6 text-center">
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <div className={classes.bywomenimg}></div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
                <Container className={classes.outerfaqcontainer}>
                    <Jumbotron fluid>
                        <Container className={classes.faqcontainer}>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <h1>FAQ</h1>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                <h3>
                                    In case you're wondering...
                            </h3>
                            </ScrollAnimation>
                            <Accordion >
                                <div className={classes.faqaccordiancard}>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                        <Accordion.Toggle as={Card.Header} eventKey="0" className={classes.faqcardheader} onClick={this.toggleClass} >
                                            How does online tailoring with Binks work?
                                        <div className={this.state.active ? classes.down_arrow : classes.up_arrow}>
                                            </div>
                                        </Accordion.Toggle>
                                    </ScrollAnimation>
                                    <Accordion.Collapse className={classes.faqaccordiancollapse} eventKey="0">
                                        <Card.Body>When you place an order, we'll schedule a pickup for your fabric & sample garment from your home. Next, a dedicated personal designer will help you style your fabric. Once the design is confirmed, we'll stitch the garment & ship it to your home in 5-15 working days. Alterations if any, are taken care of free of charge.</Card.Body>
                                    </Accordion.Collapse>
                                </div>
                                <div className={classes.faqaccordiancard}>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">

                                        <Accordion.Toggle as={Card.Header} eventKey="1" className={classes.faqcardheader} onClick={this.toggleClass}>
                                            How will you take my measurements?
                                        <div className={this.state.active ? classes.down_arrow : classes.up_arrow}>

                                            </div>
                                        </Accordion.Toggle>
                                    </ScrollAnimation>

                                    <Accordion.Collapse className={classes.accordiancollapse} eventKey="1">
                                        <Card.Body>A sample garment works just fine. It needn't fit you perfectly. As long as we know what's wrong with the sample garment (too tight, too loose, wrinkles etc), we can make a new garment that fits well.</Card.Body>
                                    </Accordion.Collapse>
                                </div>
                                <div className={classes.faqaccordiancard}>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">

                                        <Accordion.Toggle as={Card.Header} eventKey="2" className={classes.faqcardheader} onClick={this.toggleClass}>
                                            I don't have a sample garment. What are my options?
                                        <div className={this.state.active ? classes.down_arrow : classes.up_arrow}>
                                            </div>
                                        </Accordion.Toggle>
                                    </ScrollAnimation>
                                    <Accordion.Collapse className={classes.accordiancollapse} eventKey="2">
                                        <Card.Body></Card.Body>
                                    </Accordion.Collapse>
                                </div>
                                <div className={classes.accordiancard}>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">

                                        <Accordion.Toggle as={Card.Header} eventKey="3" className={classes.faqcardheader} onClick={this.toggleClass}>
                                            I don't have fabric but I want something tailored. Can you help?
                                        <div className={this.state.active ? classes.down_arrow : classes.up_arrow}>
                                            </div>
                                        </Accordion.Toggle>
                                    </ScrollAnimation>
                                    <Accordion.Collapse className={classes.accordiancollapse} eventKey="3">
                                        <Card.Body>Yes! We help source fabric, matching or otherwise.</Card.Body>
                                    </Accordion.Collapse>
                                </div>
                                <div className={classes.accordiancard}>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                        <Accordion.Toggle as={Card.Header} eventKey="4" className={classes.faqcardheader} onClick={this.toggleClass}>
                                            How do I make the payment?
                                        <div className={this.state.active ? classes.down_arrow : classes.up_arrow}>
                                            </div>
                                        </Accordion.Toggle>
                                    </ScrollAnimation>
                                    <Accordion.Collapse className={classes.accordiancollapse} eventKey="4">
                                        <Card.Body>Once your design is confirmed, we will share a payment link with you. You can make the payment using any online modes like UPI, card, net banking etc. We only accept online payments.</Card.Body>
                                    </Accordion.Collapse>
                                </div>
                                <div className={classes.accordiancard}>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                        <Accordion.Toggle as={Card.Header} eventKey="5" className={classes.faqcardheader} onClick={this.toggleClass}>
                                            Do you do only alterations?
                                        <div className={this.state.active ? classes.down_arrow : classes.up_arrow} >
                                            </div>
                                        </Accordion.Toggle>
                                    </ScrollAnimation>
                                    <Accordion.Collapse className={classes.accordiancollapse} eventKey="5">
                                        <Card.Body>Nope, unfortunately we don't. In case you have a stitching order, we can take alterations as well.</Card.Body>
                                    </Accordion.Collapse>
                                </div>
                                <div className={classes.accordiancard}>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                        <Accordion.Toggle as={Card.Header} eventKey="6" className={classes.faqcardheader} onClick={this.toggleClass}>
                                            Where is your shop?
                                        <div className={this.state.active ? classes.down_arrow : classes.up_arrow} >
                                            </div>
                                        </Accordion.Toggle>
                                    </ScrollAnimation>
                                    <Accordion.Collapse className={classes.accordiancollapse} eventKey="6">
                                        <Card.Body>Binks is an online boutique & the customer experience is entirely online & at-home. We don't have a physical store where customers can walk in. We operate out of our office in Ulsoor.</Card.Body>
                                    </Accordion.Collapse>
                                </div>
                                <div>
                                    <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                        <Accordion.Toggle as={Card.Header} eventKey="7" className={classes.faqcardheader} onClick={this.toggleClass}>
                                            What is your pricing like?
                                        <div className={this.state.active ? classes.down_arrow : classes.up_arrow} >
                                            </div>
                                        </Accordion.Toggle>
                                    </ScrollAnimation>
                                    <Accordion.Collapse className={classes.accordiancollapse} eventKey="7">
                                        <Card.Body>You can find the list of detailed prices here - https://getbinks.com/bangalore-tailor-near-me-prices</Card.Body>
                                    </Accordion.Collapse>
                                </div>
                            </Accordion>
                            <div className={classes.faqbtndiv}>
                                <ScrollAnimation animateIn="fadeInUp" animateOnce="true">
                                    <button className={classes.button3}><a>Read More FAQs</a></button>
                                </ScrollAnimation>
                            </div>
                        </Container>
                    </Jumbotron>
                </Container>
                <Container className={classes.instacontainer}>
                    <Row className={classes.instarowdiv}>
                        <div class="col s10 text-center">
                            <img className={classes.instalogo} src={InstaLogo} />
                        </div>
                    </Row>
                    <Row className={classes.instaheading}>
                        <div class="col s10 text-center">
                            <h3>See what we're up to on Instagram</h3>
                        </div>
                    </Row>
                    <Row className={classes.instatag}>
                        <div class="col s10 text-center">
                            <h6><a href="http://instagram.com/CraftedByBinks">@CraftedByBinks</a></h6>
                        </div>
                    </Row>
                    <Row xs={2} className={classes.instaphotorow}>
                        <Col className={classes.insta1} >
                            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                                <a><img className={classes.instaphoto} src={Insta1} /></a>
                            </ScrollAnimation>
                            <div className={classes.overlay}>
                                <a><img className={classes.instagray} src={InstaGray} /></a>
                            </div>
                        </Col>
                        <Col className={classes.insta1}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                                <a><img className={classes.instaphoto} src={Insta2} /></a>
                            </ScrollAnimation>
                            <div className={classes.overlay}>
                                <a href="http://instagram.com/CraftedByBinks"><img className={classes.instagray} src={InstaGray} /></a>
                            </div>
                        </Col>
                        <Col className={classes.insta1}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                                <a><img className={classes.instaphoto} src={Insta3} /></a>
                            </ScrollAnimation>
                            <div className={classes.overlay}>
                                <a><img className={classes.instagray} src={InstaGray} /></a>
                            </div></Col>
                        <Col className={classes.insta1}>
                            <ScrollAnimation animateIn="fadeIn" animateOnce="true">
                                <a><img className={classes.instaphoto} src={Insta4} /></a>
                            </ScrollAnimation>
                            <div className={classes.overlay}>
                                <a><img className={classes.instagray} src={InstaGray} /></a>
                            </div>
                        </Col>

                    </Row>


                </Container>
                <Footer />
            </div>

        )
    }

}

export default Home;