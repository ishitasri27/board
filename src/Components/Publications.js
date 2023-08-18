import React from 'react';
import publicationsData from '../Data/publications';
import './Publications.css';

const Publications = () => {
  return (
    <div>
      <h3>Publications</h3>
      <div className="row row-cols-1 row-cols-md-4 g-6">
        {publicationsData.map((publication) => (
          <div key={publication.id} className="col">
            <div className="card">
               <img
                src={publication.coverImage}
                className="card-img-top"
                alt={publication.title}
                style={{ objectFit: 'contain', width: '100%', height: '400px' }}
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a href={publication.link} target="_blank" rel="noopener noreferrer">
                    {publication.title}
                  </a>
                </h5>
                <p className="card-text">{publication.year}</p>
                <p className="card-text">{publication.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
