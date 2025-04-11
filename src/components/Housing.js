import React from 'react';

function Housing() {
  return (
    <div className="page-container">
      <h1>Emergency Housing & Shelters</h1>
      <div className="resource-grid">
        <div className="resource-card emergency">
          <h3>Emergency Housing</h3>
          <ul>
            <li>
              <strong>Monroe County DHS:</strong>
              <ul>
                <li>Phone: (585) 753-6000</li>
                <li>After Hours: (585) 442-1742</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>24/7 Shelters</h3>
          <ul>
            <li>
              <strong>House of Mercy:</strong>
              <ul>
                <li>Phone: (585) 546-2580</li>
                <li>Emergency shelter services</li>
              </ul>
            </li>
            <li>
              <strong>Open Door Mission:</strong>
              <ul>
                <li>Phone: (585) 454-6696</li>
                <li>Shelter and support services</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>Housing Assistance</h3>
          <ul>
            <li>
              <strong>Housing Council:</strong>
              <ul>
                <li>Phone: (585) 546-3700</li>
                <li>Housing assistance and advocacy</li>
              </ul>
            </li>
            <li>
              <strong>Catholic Family Center:</strong>
              <ul>
                <li>Phone: (585) 546-7220</li>
                <li>Housing stability services</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Housing;
