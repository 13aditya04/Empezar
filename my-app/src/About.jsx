import React from "react";
import web from "../src/images/20945860.png";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import Moreabout from "./Moreabout";

const About = () => {
    return (
        <>
            <Common lname="The only Integrated Logistics solutions provider at Mundra" sname="The second largest employer at Mundra Port after the Adani Group." imgsrc={web} visit="/contact" btnname="Contact Now" />           
            <Moreabout />
        </>

    )
}

export default About;