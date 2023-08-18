import React from "react";
import membersData from "../Data/members";

const Members = () => {
  return (
    <div>
      <h2>Members</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {membersData.map((member) => (
          <div key={member.id} className="col">
            <div className="card h-100 d-flex flex-column" 
            style={{ width: "24rem", height: "18rem"}}>
              <img
                src={member.image}
                className="card-img-top"
                alt={member.name}
                style={{ objectFit: "cover", width: "100%", height: "400px" }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title">{member.name}</h5>
                <div className="card-body">
                  <p>{member.position}</p>
                  <p>{member.department}</p>
                  <p>{member.year}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
