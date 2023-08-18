import React from "react";
import interviewsData from "../Data/interviews";

const Interviews = () => {
  return (
    <div>
      <h3>Interviews</h3>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {interviewsData.map((interview) => (
          <div key={interview.id} className="col">
            <div className="card h-100 d-flex flex-column"
            style={{ width: "24rem", height: "18rem"}}>
              <img src={interview.image} 
              className="card-img-top" 
              alt={interview.name}  
              style={{ objectFit: "contain", width: '100%', height: 'auto' }}/>
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{interview.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interviews;
