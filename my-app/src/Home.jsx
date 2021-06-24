import React from "react";
import web from "../src/images/11065.jpg";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import m1 from "./images/mundra1.png";
import m2 from "./images/mundra2.png";
import m3 from "./images/mundra3.png";
import m4 from "./images/mundra4.png";


const Home = () => {
    return (
        <>

            <Common name="Grow your business with" tname="Delivering Excellence in Logistics Solutions" imgsrc={web} visit="/service" btnname="Get Started" />

            <hr className="style5"></hr>
            <h2 style={{ fontFamily: 'Pacifico, cursive', color: '#D73695' }} className="align-content-around text-center mt-4 mb-4">History</h2>
            <div className="align-content-around text-center mt-4 mb-4 pb-4"  >
                <h2 style={{ color: '#3498db', fontWeight: 'bolder', fontFamily: 'BioRhyme, serif' }}>Built on the twin pillars of ‘transparency’ & ‘trust’</h2>
                <p style={{ fontFamily: 'Montserrat, sans-serif', color: '#8F858B' }} > The Empezar Group was incorporated in 2008 and since then has spread its wings into various lines of the logistics industry - Port Transportation, Empty Container Yard, Warehousing, Customs Cargo Clearance, Freight Forwarding, Technology Solutions and Total Logistics.Empezar has a vision to become a leading integrated logistics solutions provider, on the backbone of a powerful technological platform to deliver customer delight.In a short span, Empezar has built robust relationships with Shipping Lines and Clients alike. We have operations in Mundra & Hazira; and offices at Gandhidham, Mumbai and Delhi. </p>
            </div>

            <hr className="style5"></hr>
            <h2 style={{ fontFamily: 'Pacifico, cursive', color: '#D73695' }} className="text-center">Mundra</h2>
            <div style={{textAlign:'center'}}><img style={{ width: '100px' }} src={m1} /> </div>
            
            <div className="align-content-around text-center mt-4 mb-4 pb-4" >
            <p style={{fontFamily: 'Montserrat, sans-serif' , color:'#8F858B'}}>Strategically located, Mundra is a natural gateway to the cargo hubs in Northern and Western India – bringing down logistics costs.</p>
                <img style={{ width: '100px' }} src={m2} />
            </div>

            <div className="align-content-around text-center mt-4 mb-4 pb-4" >        
             <p style={{fontFamily: 'Montserrat, sans-serif' , color:'#8F858B'}}>6 Railway lines for handling Container Trains & 10 Railway lines for Bulk cargo offer unmatched connectivity. </p>
                <img style={{ width: '100px' }} src={m3} />
            </div>

            <div className="align-content-around text-center mt-4 mb-4 pb-4">
               <p style={{fontFamily: 'Montserrat, sans-serif' , color:'#8F858B'}}>A deep draft, all-weather port & India’s largest commercial port. Mundra can berth the largest post panamax vessel and can handle four million TEUs.</p>
               <img style={{ width: '100px' }} src={m4} />
            </div>

        </>

            )
}

            export default Home;