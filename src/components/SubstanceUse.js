import React from 'react';

function SubstanceUse() {
  return (
    <div className="page-container">
      <h1>Substance Use Support</h1>
      <div className="resource-grid">
        <div className="resource-card">
          <h3>24/7 Support Lines</h3>
          <ul>
            <li><strong>NYS HOPELine:</strong> 1-877-846-7369</li>
            <li><strong>Delphi Rise:</strong> (585) 627-1777</li>
            <li><strong>ROCovery Fitness:</strong> (585) 484-0234</li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>Treatment Centers</h3>
          <ul>
            <li>
              <strong>Strong Recovery:</strong>
              <ul>
                <li>Phone: (585) 275-3161</li>
                <li>Comprehensive addiction treatment</li>
              </ul>
            </li>
            <li>
              <strong>Unity Chemical Dependency:</strong>
              <ul>
                <li>Phone: (585) 723-7723</li>
                <li>Inpatient and outpatient services</li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="resource-card">
          <h3>Support Groups</h3>
          <ul>
            <li>
              <strong>Rochester AA:</strong>
              <ul>
                <li>Phone: (585) 232-6720</li>
                <li>24/7 hotline and meetings</li>
              </ul>
            </li>
            <li>
              <strong>Rochester NA:</strong>
              <ul>
                <li>Phone: (585) 235-7889</li>
                <li>Local meetings and support</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SubstanceUse;
