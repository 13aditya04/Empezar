import React from "react";
import web from "../src/images/3627634.jpg";
import { NavLink } from "react-router-dom";
import Moredetails from "./Moredetails";

const Common = (props) => {
    return (
        <>
            <section id="header" className="d-flex align-items-center">
            <script data-ad-client="ca-pub-1354689301488052" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        {props.name} <strong className="brand-name"> Empezar</strong>
                                    </h1>

                                    <h1>
                                        {props.lname} {/*Delivering Excellence in Logistics Solutions */}
                                    </h1>

                                    <h2 className="my-3">
                                    {props.sname} {/*The only Integrated Logistics solutions provider at Mundra*/}
                                    </h2>

                                    <h2 className="my-3">
                                        {props.tname} {/*The second largest employer at Mundra Port after the Adani Group. */}

                                    </h2>

                                    <div className="mt-3">
                                        <NavLink to={props.visit} className="btn-get-started" >{props.btnname}</NavLink>
                                    </div>

                                    
                                    {/* <div className="mt-3">
                                        <button type="button" class="btn btn-get-started" data-toggle="modal" data-target="#exampleModal">
                                            Our technology stack
                                        </button>
                                    </div> */}
                                    
                                    

                                    
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img style={{width:'110%'}} src={props.imgsrc} className="img-fluid animated " alt="home-image" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
           
        </>

    )
}

export default Common;