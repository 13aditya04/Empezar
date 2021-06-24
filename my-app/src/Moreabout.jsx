import React from "react";
import more1 from "./images/more1.PNG";
import more2 from "./images/more2.PNG";
import more3 from "./images/more3.PNG";
import more4 from "./images/more4.PNG";
import more5 from "./images/more5.PNG";
import more6 from "./images/more6.PNG";
import more7 from "./images/more7.PNG";


const Moreabout = () => {
    return (
        <>
          
            <hr className="style5"></hr>
            <h2 style={{ fontFamily:'Pacifico, cursive' ,color:'#D73695'}} className="align-content-around text-center mt-4 mb-4 pb-4">More About Us</h2>

            <div className="align-content-around text-center mt-4 mb-4 pb-4"  >
                <h2 style={{ color: '#FF5733', fontWeight: 'bolder' ,fontFamily: 'BioRhyme, serif' }}>The largest SEZ Based Warehouse in Mundra SEZ</h2>
                <p style={{fontFamily: 'Montserrat, sans-serif' , color:'#8F858B'}} > Offering advantages such as duty deferment, GST deferment, stock and sell & no late fees for bill of entry filing. </p>
                <img style={{ width: '100px' }} src={more1} />
            </div>

            <div className="align-content-around text-center mt-4 mb-4 pb-4" >
                <h2 className="mt-4" style={{ color: '#FF5733', fontWeight: 'bolder', fontFamily: 'BioRhyme, serif' }}>The most commercially viable CFS</h2>
                <p style={{fontFamily: 'Montserrat, sans-serif' , color:'#8F858B'}}>Offers the quickest evacuation from the terminals. World class infrastructure, complete transparency and real time reporting. Current clients across Polymer, Heavy Machinery, Cosmetics, Timber, Paper, Bitumen & Oil Rigs.</p>
                <img style={{ width: '100px' }} src={more2} />
            </div>

            <div className="align-content-around text-center mt-4 mb-4 pb-4" >
                <h2 className="mt-4" style={{ color: '#FF5733', fontWeight: 'bolder',fontFamily: 'BioRhyme, serif' }}>The largest transportation fleet within Mundra SEZ</h2>
                <p style={{fontFamily: 'Montserrat, sans-serif' , color:'#8F858B'}}>Over 240 Trailers. Manage the Container Operations of all 4 Terminals at Mundra Port. Handle 350,000 TEUs/month – the highest in India. In-house maintenance facilities which minimizes down time.</p>
                <img style={{ width: '100px' }} src={more3} />
            </div>

            <div className="align-content-around text-center mt-4 mb-4 pb-4" >
                <h2 className="mt-4" style={{ color: '#FF5733', fontWeight: 'bolder', fontFamily: 'BioRhyme, serif' }}>The Largest Empty Container Yard </h2>
                <p style={{fontFamily: 'Montserrat, sans-serif' , color:'#8F858B'}}>Handle over 130,000 TEUs a year. In-house Maintenance and Repair. Systems support Container Location, Barcoding and Real Times Updates for customers.</p>
                <img style={{ width: '100px' }} src={more4} />
            </div>

            <div className="align-content-around text-center mt-4 mb-4 pb-4" >
                <h2 className="mt-4" style={{ color: '#FF5733', fontWeight: 'bolder', fontFamily: 'BioRhyme, serif' }}>Pathbreaking Technology Solutions </h2>
                <p style={{fontFamily: 'Montserrat, sans-serif' , color:'#8F858B'}}>Support advanced reporting mechanisms for customisable real time reports. Deployed technology solutions for leading Shipping Lines & Logistics Companies. </p>
                <img style={{ width: '100px' }} src={more5} />
            </div>

            <div className="align-content-around text-center mt-4 mb-4 pb-4">
                <h2 className="mt-4" style={{ color: '#FF5733', fontWeight: 'bolder', fontFamily: 'BioRhyme, serif' }}>One of the most reputed Custom House Brokers</h2>
                <p style={{fontFamily: 'Montserrat, sans-serif' , color:'#8F858B'}}>With retired customs officials leading an enviable team of professionals. Our Clients are in the Top 3 Importers in Mundra in terms of Duty Payment. </p>
                <img style={{ width: '100px' }} src={more6} />
            </div>

            <hr className="style5"></hr>
            
            <div className="align-content-around text-center mt-4 mb-4 pb-4"  >
            <h2 className="mt-4" style={{ fontFamily:'Pacifico, cursive', color:'#D8B834' }}>Service & Compliance</h2>

                 <p> Corporate office in Gandhidham for regular Customer Interactions. All facilities compliant of the Statutory Rules and Regulations and accredited with the relevant certifications and permissions. </p>
                <img style={{ width: '150px' }} src={more7} />
            </div>
        </>
    )
}
export default Moreabout;