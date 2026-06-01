import React from "react";

const PricePlanSection = () => {
  return (
    <div id="pricing" className="pricing-content section-padding">
      <div className="container">
        <div className="row text-center">
          <div
            className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.1s"
            data-wow-offset={0}
          >
            <div className="single-pricing">
              <div className="price-head">
                <h2>BASIC PACKAGE</h2>
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <h1 className="price">250,000</h1>
              {/* <h5>Monthly</h5> */}
              <ul>
                <li>Mobile-friendly design</li>
                <li>Free SSL</li>
                <li>1 workmail</li>
                <li>Unmetered Bandwidth</li>
                <li>Security & Cloudflare</li>
                <li>Website Design</li>
                <li>Delivery within 5 days</li>
              </ul>
              <a href="/contact">Request Package</a>
            </div>
          </div>
          {/*- END COL */}
          <div
            className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.2s"
            data-wow-offset={0}
          >
            <div className="single-pricing">
              <div className="price-head">
                <h2>STANDARD PACKAGE</h2>
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <h1 className="price">500,000</h1>
              {/* <h5>Monthly</h5> */}
              <ul>
                <li>Basic Features</li>

                <li>Up to 2 Workmails</li>

                <li>Security & Cloudflare</li>
                <li>Website Design</li>
                <li>Delivery within 10 days</li>
              </ul>
              <a href="/contact">Request Package</a>
            </div>
          </div>
          {/*- END COLumn */}
          <div
            className="col-lg-4 col-sm-4 col-xs-12 wow fadeInUp"
            data-wow-duration="1s"
            data-wow-delay="0.3s"
            data-wow-offset={0}
          >
            <div className="single-pricing single-pricing-white">
              <div className="price-head">
                <h2>ADVANCE</h2>
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <span className="price-label">Here</span>
              <h1 className="price">700,000</h1>
              {/* <h5>Monthly</h5> */}
              <ul>
                <li>Up to 10 pages</li>
                <li>Free Domain (1st year)</li>
                <li>Up to 4 Workmails</li>
                <li>Security & Cloudflare</li>
                <li>Website Design</li>
                <li>Delivery within 18 days</li>
              </ul>
              <a href="/contact">Request Package</a>
            </div>
          </div>
          {/*- END COL */}
        </div>
        {/*- END ROW */}
      </div>
      {/*- END CONTAINER */}
    </div>
  );
};

export default PricePlanSection;
