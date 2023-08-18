import React from 'react';
import eventsData from '../Data/events';

const Events = () => {
  return (
    <div>
      <h3>Events</h3>
      <div className="row row-cols-1 row-cols-md-2 g-4">
      {eventsData.map(event => (
        <div key={event.id} className="col">
            <div className="card h-100 d-flex flex-column">
            <img src={event.image} className="card-img-top" alt={event.name}
             style={{ width: '100%', height: 'auto' }} />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">{event.title}</h5>
                          </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Events;
