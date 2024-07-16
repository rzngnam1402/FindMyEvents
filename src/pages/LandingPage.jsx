import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const { user, loading, error } = useSelector((state) => state.user);
  console.log("landing", user);
  return (
    <>
      <div className="container text-center mt-5">
        <div className="jumbotron">
          <h1 className="display-4">Welcome to FindMyEvents!</h1>
          <p className="lead">Discover and promote events in your area.</p>
          <hr className="my-4" />
          <p>
            Explore detailed information about upcoming events and share your
            own.
          </p>
          <Link to="/events" className="btn btn-primary btn-lg" role="button">
            Explore Now
          </Link>
        </div>

        <div id="explore" className="mt-5">
          <h2>Upcoming Events</h2>
          <p>Find events that match your interests and participate!</p>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="src/assets/images/event1.png"
                  alt="Event"
                />
                <div className="card-body">
                  <h5 className="card-title">Music Festival</h5>
                  <p className="card-text">
                    Join us for an exciting music festival featuring top
                    artists.
                  </p>
                  <a href="#" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="src/assets/images/event2.png"
                  alt="Event"
                />
                <div className="card-body">
                  <h5 className="card-title">Tech Conference</h5>
                  <p className="card-text">
                    Learn about the latest in technology at this premier
                    conference.
                  </p>
                  <a href="#" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="src/assets/images/event3.png"
                  alt="Event"
                />
                <div className="card-body">
                  <h5 className="card-title">Art Exhibition</h5>
                  <p className="card-text">
                    Experience a stunning display of art from local and
                    international artists.
                  </p>
                  <a href="#" className="btn btn-primary">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
