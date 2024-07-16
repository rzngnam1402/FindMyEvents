import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteEvent, fetchEvents } from "../store/eventsSlice";
import Login from "./Login";
import Navbar from "../components/Navbar";

const EventList = () => {
  const dispatch = useDispatch();
  const { events, loading, error } = useSelector((state) => state.events);
  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteEvent(id));
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      {user ? (
        <>
          <Navbar />
          <div className="container mt-5">
            <h2>Upcoming Events</h2>
            <div className="row">
              {events.map((event) => (
                <div key={event.id} className="col-md-4 mb-4">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={event.image}
                      alt={event.title}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{event.title}</h5>
                      <p className="card-text">{event.description}</p>
                      <p className="card-text">Date: {event.date}</p>
                      <button
                        onClick={() => handleDelete(event.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default EventList;
