import React, { Component } from 'react';
import classes from './navbar.css';


class Navbar extends Component {
    render() {
        return (
            // <div className={classes.navbar}>
            //     <ul className={classes.navullist}>
            //         <li className={classes.navlist}><a className={classes.left} href="#">Reviews</a></li>
            //         <li className={classes.navlist}><a className={classes.left} href="#">FAQ</a></li>
            //         <li className={classes.navlist}><a className={classes.left} href="#">About</a></li>
            //         <li className={classes.navlist}><a className={classes.left} href="#">#PocketsAreFreedom</a></li>
            //     </ul>
            // </div>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-transperent">
                    <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item" >
                                <a class="nav-link" href="#" style={{fontFamily: "Poppins", color:"#3e4a74", fontSize:"15px"}}>#PocketsAreFreedom </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" style={{fontFamily: "Poppins", color:"#3e4a74", fontSize:"15px"}}>About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" style={{fontFamily: "Poppins", color:"#3e4a74", fontSize:"15px"}}>FAQ</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#" style={{fontFamily: "Poppins", color:"#3e4a74", fontSize:"15px"}}>Reviews</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar; 