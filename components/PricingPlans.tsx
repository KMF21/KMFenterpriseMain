import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function PricingPage() {
  return (
    <div className="container py-5">
      {/* <h2 className="text-center mb-4">Choose the perfect plan for your needs</h2> */}
      {/* <div className="row row-cols-1 row-cols-md-3 g-4"> */}
        {/* Lite Plan */}
        <div className="col">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Lite</h5>
              <p className="card-text small text-muted mb-3">
                Ideal for individuals and small teams. Enjoy basic features with limited customization options to get your smaller projects started.
              </p>
              <h4 className="my-4">$6.99<small className="text-muted">/month</small></h4>
              <button className="btn btn-primary rounded-pill">Choose plan</button>
            </div>
            <ul className="list-group list-group-flush text-muted small">
              <li className="list-group-item">For small projects</li>
              <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i> 100+ design templates</li>
              <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i> Essential customization options</li>
              <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i> Regular updates</li>
              <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i> Ideal for individuals and small teams</li>
            </ul>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="col">
          <div className="card h-100 shadow-sm border-primary">
            <div className="card-body text-center">
              <span className="badge bg-warning text-dark position-absolute top-0 start-50 translate-middle mt-2 px-3 py-2 rounded-pill">Best Value</span>
              <h5 className="card-title fw-bold">Pro</h5>
              <p className="card-text small text-muted mb-3">
                Perfect for growing teams, providing advanced design capabilities and extensive template libraries to accelerate complex design tasks.
              </p>
              <h4 className="my-4">$19.99<small className="text-muted">/month</small></h4>
              <button className="btn btn-primary rounded-pill">Choose plan</button>
            </div>
            <ul className="list-group list-group-flush text-muted small">
              <li className="list-group-item">For developing teams</li>
              <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i> 10,000+ premium template library</li>
              <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i> Advanced customization</li>
              <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i> Integration with 50+ design tools including Figma, Sketch, and Adobe XD</li>
              <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i> Regular updates</li>
              <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i> Perfect for growing teams</li>
            </ul>
          </div>
        </div>

        {/* Unlimited Plan */}
        <div className="col">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title fw-bold">Unlimited</h5>
              <p className="card-text small text-muted mb-3">
                Provide complete flexibility for enterprises, including unlimited access to all features, advanced customization, and seamless integration with various design tools.
              </p>
              <h4 className="my-4">$49.99<small className="text-muted">/month</small></h4>
              <button className="btn btn-primary rounded-pill">Choose plan</button>
            </div>
            <ul className="list-group list-group-flush text-muted small">
              <li className="list-group-item">For enterprises</li>
              <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i> Unlimited template library</li>
              <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i> Advanced customization</li>
              <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i> Integration with 50+ design tools including Figma, Sketch, and Adobe XD</li>
              <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i> Real-time collaboration</li>
              <li className="list-group-item"><i className="bi bi-check-circle-fill text-success me-2"></i> Best for large teams and enterprises</li>
            </ul>
          </div>
        </div>
      {/* </div> */}
    </div>
  );
}

export default PricingPage;