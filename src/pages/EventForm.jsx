import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEvent } from "../store/eventsSlice";
import Login from "./Login";
import Navbar from "../components/Navbar";

const EventForm = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    date: "",
    description: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = {
      ...formData,
      id: Math.floor(Math.random() * 1000) + 1,
    };
    dispatch(addEvent(event));
    setFormData({
      id: "",
      title: "",
      date: "",
      description: "",
      image: "",
    });
  };

  return (
    <>
      {user ? (
        <>
          <Navbar />
          <div className="container mt-5">
            <h2>Add New Event</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  className="form-control"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Image URL</label>
                <input
                  type="text"
                  className="form-control"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary mt-4">
                Add Event
              </button>
            </form>
          </div>
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default EventForm;
