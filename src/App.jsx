import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Login from "./pages/Login";
import { Provider } from "react-redux";
import store from "./store/Store";
import { Logout } from "./pages/Logout";
import LandingPage from "./pages/LandingPage";
import EventList from "./pages/EventList";
import EventForm from "./pages/EventForm";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/events" element={<EventList />} />
          <Route path="/add" element={<EventForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
