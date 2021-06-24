import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import Moredetails from "./Moredetails";




const Service = () => {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center' style={{ color: '#FF5733', fontWeight: '400' }}>Our Services</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
              {
                Sdata.map((val, ind) => {
                  return <Card key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    desc={val.desc}
                    det={val.det}

                  />

                })
              }



            </div>
            
            
            <Moredetails />
            
          </div>
        </div>
      </div>

    </>
  )
}

export default Service;
