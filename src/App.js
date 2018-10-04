import React, { Component } from 'react';

import './Banner.css';

class Banner extends Component {
  render() {
    return (
      <div className="notification-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="notice">
                <strong className="title">NEW HOMEPAGE</strong>
                Tell us what you think of our new homepage – <a href="http://www.smartsurvey.co.uk/s/1HWN6/">take our
                survey now</a>.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;
