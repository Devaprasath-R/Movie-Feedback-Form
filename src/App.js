import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FeedbackForm from "./Components/FeedbackForm";
import ReviewList from "./Components/ReviewList";  // Updated import

function App() {
  return (
    <Router>
        <h1>Movie Feedback</h1>
        <div>
        <nav>
          <Link to="/feedback" style={{marginRight:'10px'}}>Give Feedback</Link>
          <Link to="/reviews">View Reviews</Link>
        </nav>
        
        <Routes>
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/reviews" element={<ReviewList />} />  {/* Updated Component */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
